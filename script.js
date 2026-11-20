// Tree Forest JavaScript Interactions

// Tree Counter
let treeCount = 0;
const treeCountElement = document.getElementById('tree-count');
const viewTreeBtn = document.getElementById('view-tree-btn');
const resetBtn = document.getElementById('reset-btn');

// View Another Tree
viewTreeBtn.addEventListener('click', function() {
    treeCount++;
    treeCountElement.textContent = treeCount;
    
    // Add a small animation
    treeCountElement.style.transform = 'scale(1.2)';
    treeCountElement.style.transition = 'transform 0.2s';
    setTimeout(() => {
        treeCountElement.style.transform = 'scale(1)';
    }, 200);
    
    // Show a random tree message
    const messages = [
        '🌳 Majestic!',
        '🌲 So beautiful!',
        '🍁 Gorgeous!',
        '🌿 Amazing!',
        '🌴 Wonderful!'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create a temporary message element
    const message = document.createElement('div');
    message.textContent = randomMessage;
    message.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #8BC34A; color: white; padding: 10px 20px; border-radius: 20px; font-weight: bold; animation: fadeIn 0.3s;';
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 2000);
});

// Reset Counter
resetBtn.addEventListener('click', function() {
    treeCount = 0;
    treeCountElement.textContent = treeCount;
    
    // Add a reset animation
    treeCountElement.style.color = '#95a5a6';
    setTimeout(() => {
        treeCountElement.style.color = '#4CAF50';
    }, 300);
});

// Reveal Secret for each tree card
const revealButtons = document.querySelectorAll('.reveal-btn');
const secretTexts = document.querySelectorAll('.secret-text');

revealButtons.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const secretText = secretTexts[index];
        
        if (secretText.style.display === 'none') {
            secretText.style.display = 'block';
            secretText.style.animation = 'fadeIn 0.5s ease-out';
            btn.textContent = 'Hide Secret';
            btn.style.background = '#e74c3c';
        } else {
            secretText.style.display = 'none';
            btn.textContent = 'Reveal Secret';
            btn.style.background = '#4CAF50';
        }
    });
});

// Theme Switcher
const themeButtons = document.querySelectorAll('.theme-btn');

themeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const theme = this.getAttribute('data-theme');
        
        // Remove all themes
        document.body.classList.remove('dark-theme', 'pastel-theme');
        
        // Add selected theme
        if (theme) {
            document.body.classList.add(theme + '-theme');
        }
        
        // Update button styles
        themeButtons.forEach(b => {
            b.style.background = '#fff59d';
            b.style.color = '#333';
        });
        
        this.style.background = '#4CAF50';
        this.style.color = 'white';
    });
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Console greeting
console.log('🌳 Welcome to the Tree Forest! 🌳');
console.log('Explore the trees and interact with the features!');