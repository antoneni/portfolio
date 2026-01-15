window.onload = () => {
    // Back to Top Logic
    const btt = document.getElementById("backToTop");
    
    window.onscroll = () => {
        if (window.scrollY > 400) {
            btt.style.display = "block";
        } else {
            btt.style.display = "none";
        }
    };

    btt.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    console.log("Portfolio Loaded: Audio Disabled, Visuals Maxed.");
};