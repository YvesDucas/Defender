# Tech Stack

Project: **Defender** (Williams 1981 Arcade Clone)
Date: 2026-04-19

## Core Technologies

| Layer | Technology | Version / Specification |
|-------|------------|-------------------------|
| **Language** | TypeScript | ^5.9.3 |
| **Runtime** | Web Browser | ES2022+ |
| **Graphics** | HTML5 Canvas 2D | Procedural raster-style rendering |
| **Audio** | Web Audio API | Procedural synthesis (F.M./Oscillators) |
| **Build Tool**| Vite | ^7.3.1 |

## Configuration

### TypeScript
- **Target**: `ES2022`
- **Strict Mode**: Enabled
- **Module Resolution**: `bundler`
- **Conventions**: ESM imports with `.js` extensions (required for Vite/TS compatibility in this setup).

### Build System
- **Development**: `npm run dev` (Vite)
- **Production Bundle**: `npm run build` (tsc + vite build)
- **Output**: `./dist`

## Dependencies

### Runtime
Zero runtime dependencies. The engine is built directly on native browser APIs.

### Infrastructure
- `vite`: Build and development server
- `typescript`: Type checking and transpilation
