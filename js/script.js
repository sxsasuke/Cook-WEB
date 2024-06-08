document.addEventListener("DOMContentLoaded", function() {
    const detailsElements = document.querySelectorAll("details");

    detailsElements.forEach(details => {
        details.addEventListener("toggle", function() {
            const content = details.querySelector(".content");

            if (details.open) {
                const height = content.scrollHeight;
                content.style.maxHeight = `${height}px`;
            } else {
                content.style.maxHeight = '0';
            }
        });
    });
});