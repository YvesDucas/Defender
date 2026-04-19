export class InputManager {
  private keys = new Set<string>();
  private justPressed = new Set<string>();
  private anyKeyFlag = false;

  // Gamepad state
  private gamepadButtons = new Set<number>();
  private gamepadJustPressed = new Set<number>();
  private axisThreshold = 0.5;
  private prevAxes: number[] = [0, 0]; // Track previous axis state for justPressed logic

  // Mapping Gamepad buttons to Keyboard codes to minimize game logic changes
  private buttonMapping: Record<number, string> = {
    0: 'Space',      // A / Cross (Fire)
    1: 'KeyZ',       // B / Circle (Smart Bomb)
    2: 'KeyX',       // X / Square (Hyperspace)
    3: 'KeyX',       // Y / Triangle
    12: 'ArrowUp',    // D-Pad Up
    13: 'ArrowDown',  // D-Pad Down
    14: 'ArrowLeft',  // D-Pad Left
    15: 'ArrowRight', // D-Pad Right
    7: 'ArrowRight',  // RT / R2 (Thrust)
  };

  constructor() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    
    window.addEventListener('gamepadconnected', (e) => {
      console.log('Gamepad connected: %s', e.gamepad.id);
    });
  }

  private handleKeyDown = (e: KeyboardEvent): void => {
    if (!this.keys.has(e.code)) {
      this.justPressed.add(e.code);
    }
    this.keys.add(e.code);
    this.anyKeyFlag = true;

    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space',
         'KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyZ', 'KeyX', 'ShiftLeft', 'ShiftRight'].includes(e.code)) {
      e.preventDefault();
    }
  };

  private handleKeyUp = (e: KeyboardEvent): void => {
    this.keys.delete(e.code);
  };

  /**
   * Polls the gamepad state. Should be called once per frame in the game loop.
   */
  poll(): void {
    const gamepads = navigator.getGamepads();
    const gp = gamepads[0]; 
    if (!gp) return;

    // Process buttons
    gp.buttons.forEach((btn, index) => {
      if (btn.pressed) {
        if (!this.gamepadButtons.has(index)) {
          this.gamepadJustPressed.add(index);
          const mappedKey = this.buttonMapping[index];
          if (mappedKey) this.justPressed.add(mappedKey);
        }
        this.gamepadButtons.add(index);
        this.anyKeyFlag = true;

        const mappedCode = this.buttonMapping[index];
        if (mappedCode) this.keys.add(mappedCode);
      } else {
        this.gamepadButtons.delete(index);
      }
    });

    // Process Axes (Standard Left Stick)
    const axes = gp.axes;
    if (axes.length >= 2) {
      const h = axes[0];
      const v = axes[1];

      // Horizontal JustPressed and Keys
      if (h < -this.axisThreshold) {
        if (this.prevAxes[0] >= -this.axisThreshold) this.justPressed.add('ArrowLeft');
        this.keys.add('ArrowLeft');
        this.anyKeyFlag = true;
      } else if (h > this.axisThreshold) {
        if (this.prevAxes[0] <= this.axisThreshold) this.justPressed.add('ArrowRight');
        this.keys.add('ArrowRight');
        this.anyKeyFlag = true;
      }

      // Vertical JustPressed and Keys
      if (v < -this.axisThreshold) {
        if (this.prevAxes[1] >= -this.axisThreshold) this.justPressed.add('ArrowUp');
        this.keys.add('ArrowUp');
        this.anyKeyFlag = true;
      } else if (v > this.axisThreshold) {
        if (this.prevAxes[1] <= this.axisThreshold) this.justPressed.add('ArrowDown');
        this.keys.add('ArrowDown');
        this.anyKeyFlag = true;
      }

      this.prevAxes[0] = h;
      this.prevAxes[1] = v;
    }
  }

  isKeyDown(code: string): boolean {
    if (this.keys.has(code)) return true;
    for (const [btnIdx, mappedCode] of Object.entries(this.buttonMapping)) {
      if (mappedCode === code && this.gamepadButtons.has(parseInt(btnIdx))) {
        return true;
      }
    }
    return false;
  }

  isAnyKeyPressed(code?: string): boolean {
    if (code !== undefined) {
      return this.justPressed.has(code);
    }
    return this.anyKeyFlag;
  }

  endFrame(): void {
    this.justPressed.clear();
    this.gamepadJustPressed.clear();
    this.anyKeyFlag = false;
    
    // Clear ALL mapped keys and axis keys to prevent ghost inputs
    const keysToClear = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space', 'KeyZ', 'KeyX'];
    keysToClear.forEach(k => this.keys.delete(k));
  }

  destroy(): void {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
  }
}
