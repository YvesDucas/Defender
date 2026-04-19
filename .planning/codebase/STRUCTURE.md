# Structure

Project: **Defender** (Williams 1981 Arcade Clone)
Date: 2026-04-19

## Directory Layout

```
/
├── .planning/           # GSD planning and codebase map
├── docs/                # Screenshots and documentation
├── public/              # Static assets (favicon, etc.)
├── src/                 # Source code (TypeScript)
│   ├── core/            # Engine fundamentals
│   ├── rendering/       # Visual subsystem
│   ├── states/          # FSM implementation
│   ├── systems/         # Game logic systems
│   └── world/           # Entity management and physics
├── index.html           # Main entry document
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Build configuration
```

## Key Files

| File | Subsystem | Description |
|------|-----------|-------------|
| `src/main.ts` | Entry | Application bootstrapper. |
| `src/game.ts` | Game | Main orchestrator class. |
| `src/world/world.ts` | World | Monolithic class handling all entity state, AI, and wrap-around physics. |
| `src/rendering/renderer.ts` | Rendering | Canvas 2D rasterizer for entities, terrain, and UI. |
| `src/core/constants.ts` | Config | Hard-coded constants (speeds, scores, dimensions). |
| `src/systems/sound.ts` | Audio | Procedural sound generation nodes. |
| `src/states/state-machine.ts` | FSM | Generic state management logic. |

## Naming Conventions

- **Files**: Kebab-case (e.g., `state-machine.ts`).
- **Directories**: Kebab-case.
- **Classes**: PascalCase (e.g., `InputManager`).
- **Interfaces**: PascalCase (no `I` prefix).
- **Constants**: UPPER_SNAKE_CASE.
- **Enums**: PascalCase.
