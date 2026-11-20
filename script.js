// Piano World JavaScript Interactions

// Piano Counter
let pianoCount = 0;
const pianoCountElement = document.getElementById('piano-count');
const viewPianoBtn = document.getElementById('view-piano-btn');
const resetBtn = document.getElementById('reset-btn');

// View Another Piano
viewPianoBtn.addEventListener('click', function() {
    pianoCount++;
    pianoCountElement.textContent = pianoCount;
    
    // Add a small animation
    pianoCountElement.style.transform = 'scale(1.2)';
    pianoCountElement.style.transition = 'transform 0.2s';
    setTimeout(() => {
        pianoCountElement.style.transform = 'scale(1)';
    }, 200);
    
    // Show a random piano message
    const messages = [
        '🎹 Beautiful!',
        '🎼 So elegant!',
        '🎶 Magnificent!',
        '🎻 Incredible!',
        '🎵 Wonderful!'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create a temporary message element
    const message = document.createElement('div');
    message.textContent = randomMessage;
    message.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #FFCCBC; color: #333; padding: 10px 20px; border-radius: 20px; font-weight: bold; animation: fadeIn 0.3s;';
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 2000);
});

// Reset Counter
resetBtn.addEventListener('click', function() {
    pianoCount = 0;
    pianoCountElement.textContent = pianoCount;
    
    // Add a reset animation
    pianoCountElement.style.color = '#8D6E63';
    setTimeout(() => {
        pianoCountElement.style.color = '#D84315';
    }, 300);
});

// Reveal Secret for each piano card
const revealButtons = document.querySelectorAll('.reveal-btn');
const secretTexts = document.querySelectorAll('.secret-text');

revealButtons.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const secretText = secretTexts[index];
        
        if (secretText.style.display === 'none') {
            secretText.style.display = 'block';
            secretText.style.animation = 'fadeIn 0.5s ease-out';
            btn.textContent = 'Hide Secret';
            btn.style.background = '#D84315';
        } else {
            secretText.style.display = 'none';
            btn.textContent = 'Reveal Secret';
            btn.style.background = '#FFCCBC';
        }
    });
});

// Theme Switcher
const themeButtons = document.querySelectorAll('.theme-btn');

themeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const theme = this.getAttribute('data-theme');
        
        // Remove all themes
        document.body.classList.remove('classical-theme', 'modern-theme');
        
        // Add selected theme
        if (theme) {
            document.body.classList.add(theme + '-theme');
        }
        
        // Update button styles
        themeButtons.forEach(b => {
            b.style.background = '#FFF3E0';
            b.style.color = '#333';
        });
        
        this.style.background = '#D84315';
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
console.log('🎹 Welcome to The Piano World! 🎹');
console.log('Discover the magic of the piano!');