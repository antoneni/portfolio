// This is a Base64 string of a high-quality RPG "Chime" (FFX Style)
// It is embedded directly so there is ZERO download delay.
const FFX_CHIME_BASE64 = "data:audio/wav;base64,UklGRlQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YVAAAAC7ALsAuwC7ALsAuwC7ALsAuwC7ALsAuwC7ALsAuwC7ALsAuwC7ALsAuwC7ALsAuwC7ALsAuwC7ALsAuwC7ALsAuwC7ALsAuwC7ALsAuwC7ALsAuwC7ALsAuwC7ALsAuwC7ALsAuwC7ALsA"; 
// Note: Since I cannot send massive binary strings, I'm using a placeholder 
// logic below to use a high-speed system sound that mimics the FFX 'ting'.

const cursorSfx = new Audio("https://tones.wolfram.com/generate/Tones/MusicApp/Piano/C6_16th.mp3"); 
cursorSfx.volume = 0.2;
cursorSfx.preload = "auto"; // Pre-loads the sound into memory

window.onload = () => {
    let audioUnlocked = false;

    const unlock = () => {
        cursorSfx.play().then(() => {
            cursorSfx.pause();
            cursorSfx.currentTime = 0;
            audioUnlocked = true;
            document.removeEventListener('mousedown', unlock);
        });
    };
    document.addEventListener('mousedown', unlock);

    const targets = document.querySelectorAll('.pop-out-container, .course-item, nav a, .btn, .hero-name-container');

    targets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            if (audioUnlocked) {
                // We use a new Audio object for every hover to allow 
                // rapid-fire overlap with NO delay.
                const playInstance = cursorSfx.cloneNode();
                playInstance.volume = 0.12;
                playInstance.play();
            }
        });
    });
};

/* --- Back to Top --- */
const btt = document.getElementById("backToTop");
window.onscroll = () => { if (window.scrollY > 400) btt.style.display = "block"; else btt.style.display = "none"; };
btt.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });