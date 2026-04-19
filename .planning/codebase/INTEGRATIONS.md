# Integrations

Project: **Defender** (Williams 1981 Arcade Clone)
Date: 2026-04-19

## External Services

This project is a **zero-dependency, offline-first** arcade clone. It does not integrate with any external SaaS products or APIs during runtime.

| Integration | Type | Purpose | Status |
|-------------|------|---------|--------|
| **GitHub**  | Infrastructure | Version control and hosting (`YvesDucas/Defender`) | Active |
| **Vite**    | Tooling | Dev server and build pipeline | Active |

## Internal Integrations

| Subsystem | Integrates with | Interface |
|-----------|-----------------|-----------|
| **Renderer** | `HTMLCanvasElement` | `CanvasRenderingContext2D` |
| **Sound**    | `AudioContext` | Web Audio API nodes |
| **Input**    | `KeyboardEvent` | Global event listeners |

## Data Flow

1. **Input**: Dispatched from global keyboard listeners to `Input` state in `src/core/input.ts`.
2. **Game States**: The FSM in `src/states/` consumes input and updates `World` state.
3. **World**: Orchestrates entity physics and collision detection.
4. **Renderer**: Consumes `World` state to draw to the Canvas.
5. **Sound**: Consumes game events (fire, explode, etc.) to trigger synthesized sounds.
