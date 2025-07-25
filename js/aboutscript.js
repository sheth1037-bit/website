
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".statistics-h2");
    const speed = 200; // Adjust this for animation speed

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScroll = () => {
        timelineItems.forEach((item) => {
            if (isInViewport(item)) {
                item.classList.add("active");
            }
        });
    };

    // Run on scroll
    window.addEventListener("scroll", handleScroll);

    // Run on page load
    handleScroll();
});

