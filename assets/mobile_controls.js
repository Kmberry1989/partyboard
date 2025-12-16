(function() {
    // Check if device is mobile (rough check) or if we want to force it for testing
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 1024;

    if (!isMobile) return;

    // Create Styles
    const style = document.createElement('style');
    style.innerHTML = `
        .mc-container {
            position: fixed;
            bottom: 20px;
            width: 100%;
            height: 150px;
            pointer-events: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 40px;
            z-index: 9999;
            box-sizing: border-box;
        }

        .mc-dpad {
            position: relative;
            width: 150px;
            height: 150px;
            pointer-events: auto;
        }
        
        .mc-btn {
            position: absolute;
            background: rgba(255, 255, 255, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(4px);
            border-radius: 12px;
            display: grid;
            place-items: center;
            font-size: 24px;
            color: white;
            user-select: none;
            touch-action: none;
            width: 50px;
            height: 50px;
            transition: background 0.1s;
        }

        .mc-btn:active {
            background: rgba(255, 255, 255, 0.4);
            transform: scale(0.95);
        }

        .mc-up { top: 0; left: 50px; }
        .mc-down { bottom: 0; left: 50px; }
        .mc-left { top: 50px; left: 0; }
        .mc-right { top: 50px; right: 0; }

        .mc-action {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: rgba(255, 200, 0, 0.3);
            border: 4px solid rgba(255, 200, 0, 0.6);
            pointer-events: auto;
            display: grid;
            place-items: center;
            font-weight: bold;
            color: white;
            font-size: 1.2rem;
            backdrop-filter: blur(4px);
            touch-action: none;
        }
        
        .mc-action:active {
            background: rgba(255, 200, 0, 0.5);
            transform: scale(0.95);
        }
    `;
    document.head.appendChild(style);

    // Create Elements
    const container = document.createElement('div');
    container.className = 'mc-container';

    // D-Pad
    const dpad = document.createElement('div');
    dpad.className = 'mc-dpad';
    
    const btnUp = createButton('mc-btn mc-up', '▲', 'ArrowUp', 'w');
    const btnDown = createButton('mc-btn mc-down', '▼', 'ArrowDown', 's');
    const btnLeft = createButton('mc-btn mc-left', '◀', 'ArrowLeft', 'a');
    const btnRight = createButton('mc-btn mc-right', '▶', 'ArrowRight', 'd');

    dpad.append(btnUp, btnDown, btnLeft, btnRight);

    // Action Button
    const actionBtn = document.createElement('div');
    actionBtn.className = 'mc-action';
    actionBtn.innerText = 'Go!'; // Or Jump
    addTouchLogic(actionBtn, ' ', ' ');

    // Add to DOM
    container.append(dpad, actionBtn);
    document.body.appendChild(container);

    // Logic
    function createButton(className, text, key1, key2) {
        const btn = document.createElement('div');
        btn.className = className;
        btn.innerText = text;
        addTouchLogic(btn, key1, key2);
        return btn;
    }

    function addTouchLogic(element, key1, key2) {
        const start = (e) => { e.preventDefault(); simulateKey(key1, key2, true); };
        const end = (e) => { e.preventDefault(); simulateKey(key1, key2, false); };

        element.addEventListener('touchstart', start);
        element.addEventListener('touchend', end);
        element.addEventListener('mousedown', start); // For testing on desktop
        element.addEventListener('mouseup', end);
    }

    function simulateKey(key1, key2, isDown) {
        const eventType = isDown ? 'keydown' : 'keyup';
        
        // Dispatch for both alternate keys
        [key1, key2].forEach(k => {
            const event = new KeyboardEvent(eventType, {
                key: k,
                code: k === ' ' ? 'Space' : `Key${k.toUpperCase()}`,
                bubbles: true
            });
            window.dispatchEvent(event);
        });
    }

})();
