document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation (Text Sliding In)
    gsap.from(".hero-text", {
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    });

    // Product Showcase (Fade In on Scroll)
    gsap.utils.toArray(".product-item").forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

    // About Us Page (Timeline Animation)
    gsap.from(".about-content", {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about-content",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // Contact Page (Bouncing Arrow Animation)
    gsap.to(".contact-arrow", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 0.6,
        ease: "power1.inOut"
    });
    document.addEventListener("DOMContentLoaded", function() {
        // GSAP Animation - Slide statistics from left to center
        gsap.from(".statistics", {
            x: -200,    // Move from the left
            opacity: 0, // Start invisible
            duration: 2, // Time taken for animation
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".statistics",
                start: "top 80%", // Animation starts when the div is 80% visible
                toggleActions: "play none none none",
            }
        });
    });
    
});
