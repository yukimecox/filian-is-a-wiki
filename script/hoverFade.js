const quotes = document.querySelectorAll(".saying");
let isMobile = window.innerWidth <= 426;

quotes.forEach((saying) => {
    saying.addEventListener("mouseenter", () => {
        if (!isMobile) {
            const timeline = gsap.timeline();
            timeline.to(saying, { opacity: 0, duration: 2 });
        }
    });

    saying.addEventListener("mouseleave", () => {
        if (!isMobile) {
            const timeline = gsap.timeline();
            timeline.to(saying, { opacity: 1, duration: 2 });
        }
    });

    // animation cancel when on mobile
    window.addEventListener("resize", () => {
        isMobile = window.innerWidth <= 426;
    });
});