// Fish World JavaScript Interactions

// Fish Counter
let fishCount = 0;
const fishCountElement = document.getElementById('fish-count');
const viewFishBtn = document.getElementById('view-fish-btn');
const resetBtn = document.getElementById('reset-btn');

// View Another Fish
viewFishBtn.addEventListener('click', function() {
    fishCount++;
    fishCountElement.textContent = fishCount;
    
    // Add a small animation
    fishCountElement.style.transform = 'scale(1.2)';
    fishCountElement.style.transition = 'transform 0.2s';
    setTimeout(() => {
        fishCountElement.style.transform = 'scale(1)';
    }, 200);
    
    // Show a random fish message
    const messages = [
        '🐠 Beautiful!',
        '🌊 So graceful!',
        '🐟 Magnificent!',
        '🐡 Incredible!',
        '🐋 Wonderful!'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create a temporary message element
    const message = document.createElement('div');
    message.textContent = randomMessage;
    message.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #B2EBF2; color: #333; padding: 10px 20px; border-radius: 20px; font-weight: bold; animation: fadeIn 0.3s;';
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 2000);
});

// Reset Counter
resetBtn.addEventListener('click', function() {
    fishCount = 0;
    fishCountElement.textContent = fishCount;
    
    // Add a reset animation
    fishCountElement.style.color = '#00695C';
    setTimeout(() => {
        fishCountElement.style.color = '#C62828';
    }, 300);
});

// Reveal Secret for each fish card
const revealButtons = document.querySelectorAll('.reveal-btn');
const secretTexts = document.querySelectorAll('.secret-text');

revealButtons.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const secretText = secretTexts[index];
        
        if (secretText.style.display === 'none') {
            secretText.style.display = 'block';
            secretText.style.animation = 'fadeIn 0.5s ease-out';
            btn.textContent = 'Hide Secret';
            btn.style.background = '#C62828';
        } else {
            secretText.style.display = 'none';
            btn.textContent = 'Reveal Secret';
            btn.style.background = '#B2EBF2';
        }
    });
});

// Theme Switcher
const themeButtons = document.querySelectorAll('.theme-btn');

themeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const theme = this.getAttribute('data-theme');
        
        // Remove all themes
        document.body.classList.remove('ocean-theme', 'coral-theme');
        
        // Add selected theme
        if (theme) {
            document.body.classList.add(theme + '-theme');
        }
        
        // Update button styles
        themeButtons.forEach(b => {
            b.style.background = '#E0F2F1';
            b.style.color = '#333';
        });
        
        this.style.background = '#C62828';
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
console.log('🐠 Welcome to The Fish World! 🐠');
console.log('Discover the magic of fish!');