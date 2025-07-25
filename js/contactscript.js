
    document.addEventListener("DOMContentLoaded", function () {
        const iframe = document.getElementById("contactForm");
        const fallbackMessage = document.getElementById("fallbackMessage");

        iframe.addEventListener("error", function () {
            iframe.style.display = "none"; // Hide the iframe
            fallbackMessage.style.display = "block"; // Show the fallback message
        });

        // Timeout in case the iframe doesn't load within a reasonable time
        setTimeout(() => {
            if (!iframe.contentWindow || iframe.contentWindow.length === 0) {
                iframe.style.display = "none";
                fallbackMessage.style.display = "block";
            }
        }, 15000); // 5 seconds timeout
    });

