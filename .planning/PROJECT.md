# Project: Defender Modernized

Modernizing the classic 1981 Defender arcade experience for 2025 hardware and expectations. This project transforms a pure pixel-perfect clone into a "Defender 2.0" experience with 4K ultrawide support, updated visuals, and deeper gameplay mechanics.

## Core Value
Preserve the frantic, high-intensity "Defender feel" while removing the friction of 40-year-old hardware constraints and monolithic codebases.

## Context
The project started as a zero-dependency TypeScript/Canvas 2D clone. We have already implemented 4K Ultrawide (21:9) scaling and full Controller support. The codebase is functional but monolithic (`world.ts` and `renderer.ts`), which limits extensibility for modern features.

## Requirements

### Validated
- ✓ **4K Ultrawide Support**: Native 5040x2160 rendering scale.
- ✓ **Controller Integration**: Web Gamepad API support with custom L/R stick and D-pad movement.
- ✓ **High-Visibility UI**: Scanner points scaled for 4K visibility (8x8 player, 4x4 enemy).

### Active
- [ ] **Visual Overhaul**: Implement bloom/glow effects, particle systems for explosions, and parallax scrolling for the starfield.
- [ ]  **Gameplay Expansion**: Add "Defender 2.0" features (Online leaderboards, ship upgrades, and multiple difficulty modes).
- [ ]  **Engineering Quality**: Refactor `world.ts` and `renderer.ts` into modular entity-based components.
- [ ]  **Accessibility Layer**: Implement a "Continue" system and difficulty curving.

### Out of Scope
- [Mobile Port] — Target is currently high-fidelity desktop/web only.
- [Local Co-op] — Focusing on a tight single-player experience for now.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| 4K Native Resolution | Target high-end ultrawide displays first to establish premium quality. | ✓ Implemented |
| Web Gamepad API | Vital for arcade experience; maps to existing keyboard logic for stability. | ✓ Implemented |
| Refactor-while-building | To support complex new features like upgrades, the monolithic code needs modules. | Pending |

## Evolution
This document evolves at phase transitions and milestone boundaries.

**After each phase transition**:
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

---
*Last updated: 2026-04-19 after modernization kickoff*
