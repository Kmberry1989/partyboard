# PartyBoard Roadmap

## Project Vision
To create a web-based, 3D party board game inspired by "Mario Party". Players take turns rolling dice, navigating a board, and competing in mini-games to earn coins and stars. The game utilizes Three.js for 3D graphics and runs directly in the browser.

## Phase 1: Foundation & Prototype (Current Focus)
- [x] **Character Selection**: 3D character selection screen with models and cars.
- [ ] **Street Race Mini-game**: Flesh out `streetrace.html` into a playable mini-game.
    - [ ] Implement game states (Menu, Racing, Results).
    - [ ] Add controls (Steering, Acceleration).
    - [ ] Implement track generation or endless scrolling.
    - [ ] Add obstacles and win/loss conditions.
- [ ] **Project Documentation**: Create Instructions and Roadmap.

## Phase 2: The Board Game System
- [ ] **Game Loop Design**:
    1.  **Turn Start**: Player rolls dice (1-10).
    2.  **Movement**: Player moves token along the board path.
    3.  **Space Landing**:
        -   **Blue Space**: +3 Coins.
        -   **Red Space**: -3 Coins.
        -   **Event Space**: Triggers a board event.
        -   **Shop Space**: Buy items/stars.
    4.  **Turn End**: Next player goes.
    5.  **Round End**: All players have moved -> **Mini-game Phase**.
    6.  **Resolution**: Mini-game winner gets coins -> New Round.
- [ ] **Board Implementation**:
    -   Create a 3D board environment in `index.html` (or separate `board.html`).
    -   Pathfinding logic for spaces.
    -   Camera following current player.

## Phase 3: Mini-Game Expansion
- [ ] **Mini-game Framework**: System to seamlessly transition from Board to Mini-game and back with score tracking.
- [ ] **New Mini-games**:
    -   *Platform Jumper*: Avoid falling off platforms.
    -   *Coin Collector*: Top-down arena scavenger hunt.
    -   *Survival*: Dodge falling objects.
- [ ] **Street Race Polish**: Add AI opponents, power-ups.

## Phase 4: UI & Polish
- [ ] **HUD**: Display coins, stars, current turn, rankings.
- [ ] **Audio**: Sound effects and background music.
- [ ] **Menu System**: Main menu, pause menu, settings.
- [ ] **Multiplayer**: (Optional) Local hot-seat or WebSocket-based online play.

## Technical Stack
-   **Engine**: Three.js
-   **Physics**: (TBD) simple custom collision or Cannon.js/Ammo.js if needed.
-   **State Management**: Vanilla JS objects/classes to manage game state (coins, stars, positions).
