# PartyBoard Instructions

## Overview
PartyBoard is a web-based 3D party game where players traverse a board, collect coins and stars, and compete in mini-games. Think of it as a browser-based version of "Mario Party".

## Getting Started

### Prerequisites
*   A modern web browser (Edge, Chrome, Firefox) with WebGL support.
*   A code editor (VS Code recommended) for development.
*   A local web server (e.g., Live Server extension for VS Code, Python `http.server`, or Node.js `http-server`) is **required** to load 3D assets due to CORS policies.

### Installation
1.  Clone the repository:
    ```bash
    git clone https://github.com/Kmberry1989/partyboard.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd partyboard
    ```

### How to Play
1.  **Launch the Game**: Open your local web server and navigate to `index.html` (Main Board) or `streetrace.html` (Mini-game Prototype).
2.  **Navigation**:
    *   Use the Mouse to interact with menus and select characters.
    *   Use Keyboard controls (Arrow Keys / WASD) for mini-games.
3.  **Street Race Demo**:
    *   Open `streetrace.html`.
    *   Select your character using the Mouse Wheel or Clicking.
    *   (Coming Soon) Press `Start` to begin the race. Avoid obstacles and reach the finish line!

## Development Guide

### File Structure
*   `index.html`: Entry point for the main board game.
*   `streetrace.html`: Standalone file for the Street Race mini-game.
*   `assets/`: Directory for images, textures, and sounds.
*   `players/`: Directory for GLB/GLTF 3D models (Characters and Cars).

### Adding a New Mini-game
1.  Create a new HTML file (e.g., `minigame_jumping.html`).
2.  Copy the basic Three.js setup from `streetrace.html`.
3.  Implement your specific game logic in the `update()` loop.
4.  Link it to the main board event system.

### Asset Management
*   Ensure all 3D models are optimized .glb files.
*   Place textures in `assets/textures`.
*   Reference assets using relative paths or the raw GitHub content URL during prototyping.

## Credits
*   Developed by Kyle Berry.
*   Powered by Three.js.
