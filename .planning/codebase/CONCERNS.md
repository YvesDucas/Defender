# Concerns

Project: **Defender** (Williams 1981 Arcade Clone)
Date: 2026-04-19

## Technical Debt

### 1. Monolithic Game Logic (`src/world/world.ts`)
The `World` class is responsible for the state and AI of 6 different enemy types, the player, and humanoids, as well as collision detection and physics. This violates the Single Responsibility Principle and makes the file difficult to navigate.
- **Risk**: High. Changes to one enemy's AI can accidentally break another's.
- **Action**: Consider splitting entity AI into dedicated classes/modules (e.g., `src/entities/Lander.ts`).

### 2. Rendering Monolith (`src/rendering/renderer.ts`)
The `Renderer` class contains specific drawing instructions for every entity. As the game grows (e.g., adding more particle types or UI overlays), this file will become unmanageable.
- **Risk**: Medium. Low performance impact, but high maintenance cost.

### 3. Lack of Automated Testing
With zero tests, verifying that world-wrapping physics or complex AI interactions (like Lander abduction) still work after a refactor is purely manual.
- **Risk**: High. Regressions in physics/collision are easy to miss.

## Fragile Areas

### Horizontal Wrapping
The entire world logic relies on the constant application of `wrapX`. Forgetting to wrap a coordinate in a new feature will cause entities to disappear or behave erratically.

### Physics and Framerate
The game uses a fixed-timestep accumulator, which is good. however, if `dt` grows too large, the `while` loop in `game.ts` could theoretically cause a hang (though unlikely in a browser context unless the tab is backgrounded for a long time).

## Known Issues (Implicit)
- **Collision Sensitivity**: Pixel-perfect collision is simulated with radii. Some edge cases (e.g., laser grazing a pod) might feel "loose" to players accustomed to original arcade hardware.
- **Sound Context**: Sounds require a user interaction to start. The 'Attract' screen handles this, but if a user refreshes or deep links, sound may remain disabled until the first keypress.
