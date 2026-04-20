# Roadmap: Defender Modernization

## Milestone 1: The Engine Reborn (Refactor & Foundation)
Standardize the codebase to support modern features without breaking the core loop.

### Phase 1: World Decoupling
Split the 650-line `world.ts` into discrete modules.
- **Goals**: Move AI and State logic into dedicated `Player`, `Enemy`, and `Scenario` modules.
- **Verification**: Zero gameplay regression (Unit tests for physics).

### Phase 2: Rendering Modularization
Extract all Canvas calls from `renderer.ts`.
- **Goals**: Create individual view components for each entity type.
- **Verification**: Visual parity check at 4K Ultrawide.

### Phase 3: Accessibility & Polish
Implement the core layer of modern convenience.
- **Goals**: "Continue" system (A-01) and Tutorial hints (A-02).
- **Verification**: Automated playthrough to verify "Game Over" vs "Continue" states.

---

## Milestone 2: Visual Overdrive (Modern Aesthetics)
Transform the 1981 look into a 2025 "Neon-Premium" experience.

### Phase 4: Glow & Bloom
Implement the luminous "Arcade Glow" throughout the game.
- **Goals**: Post-processing bloom layer using offscreen blur (V-01).
- **Verification**: Side-by-side screenshot comparisons.

### Phase 5: The Atmosphere
Particles and starry depth.
- **Goals**: High-density particle system (V-02) and Parallax starfield (V-03).
- **Verification**: Performance audit at 4K/60FPS.

---

## Milestone 3: Defender 2.0 (Systems & Meta)
Adding the modern gameplay loop and social components.

### Phase 6: Meta-Progression
Difficulty modes and basic persistence.
- **Goals**: Game modes (G-03) and Sound upgrade (A-03).
- **Verification**: Multi-session testing.

### Phase 7: Strategic Expansion
Ship upgrades and achievement badges.
- **Goals**: Power-up system (G-02) and Achievements (G-04).
- **Verification**: Playtesting for balance.

### Phase 8: Global Status
The social layer.
- **Goals**: Leaderboard integration (G-01).
- **Verification**: Integration testing with data persistence.

---
*Last updated: 2026-04-19*
