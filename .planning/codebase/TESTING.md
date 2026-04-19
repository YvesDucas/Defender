# Testing

Project: **Defender** (Williams 1981 Arcade Clone)
Date: 2026-04-19

## Current State

Currently, the project lacks automated test coverage. There are no unit tests, integration tests, or end-to-end (E2E) suites configured.

## Verification Strategy

### Automated Testing (Proposed)
If testing were to be introduced, the following strategy is recommended:
1. **Unit Tests (Vitest)**: For pure math utilities and wrapping logic (`wrapX`, `distWrap`).
2. **Integration Tests**: Verification of entity AI behaviors and collision resolution in `World`.
3. **E2E Tests (Playwright/Cypress)**: Visual regression testing and input-to-state verification.

### Manual Verification
1. **Developer Playtesting**: Running the local dev server (`npm run dev`) and verifying game behavior against the 1981 original's mechanics.
2. **Visual Audit**: Checking Canvas rendering for correct scaling and raster artifacting.
3. **Audio Audit**: Verifying sound synthesis triggers and cleanup of loops.

## Critical Verification Areas
- Horizontal wrapping at `WORLD_WIDTH` boundaries.
- Lander abduction logic (carried humanoids properly tracking carrier position).
- Planet destruction (all Landers becoming Mutants when humanoids are lost).
- Performance (maintaining locked 60 FPS update frequency).
