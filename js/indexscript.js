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

    const cards = document.querySelectorAll('.product-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                entry.target.classList.add('in-view');
                entry.target.classList.remove('out-of-view');
            } else {
                entry.target.classList.remove('in-view');
                entry.target.classList.add('out-of-view');
            }
        });
    }, {
        threshold: 0.5 // At least half visible
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});

