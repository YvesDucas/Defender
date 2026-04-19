# Conventions

Project: **Defender** (Williams 1981 Arcade Clone)
Date: 2026-04-19

## Coding Standards

### TypeScript
- **Strict Typing**: No use of `any`. Interfaces are preferred over types for entity definitions.
- **Imports**: All relative internal imports MUST include the `.js` extension to maintain ESM compatibility with the Vite/TypeScript build pipeline.
- **Target**: ES2022.

### Style
- **Indentation**: 2 spaces.
- **Naming**:
    - **Classes**: `PascalCase` (e.g., `Renderer`)
    - **Methods/Functions**: `camelCase` (e.g., `updateEnemies`)
    - **Variables**: `camelCase`
    - **Constants**: `UPPER_SNAKE_CASE` (e.g., `CANVAS_WIDTH`)
- **Modules**: Single-class-per-file (mostly) with kebab-case filenames.

## Design Patterns

### State Containers
The `World` class acts as the primary state container for all gameplay entities. Methods in `World` should focus on physics, AI logic, and collision resolution.

### Side-Effect Separation
- **Logic**: Stored in `src/world/` and `src/game.ts`.
- **Side Effects (Rendering)**: Isolated in `src/rendering/renderer.ts`.
- **Side Effects (Audio)**: Isolated in `src/systems/sound.ts`.

### FSM Registration
New game states must be registered in the `Game` constructor's `registerStates` method using the `StateMachine` API.
