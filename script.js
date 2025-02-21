document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const slider = document.querySelector(".slides");

    let startX = 0;
    let endX = 0;

    function showSlide() {
        if (index >= totalSlides) index = 0;
        if (index < 0) index = totalSlides - 1;

        let newTransformValue = -index * 100 + "%";
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(${newTransformValue})`;
    }

    function nextSlide() {
        index++;
        showSlide();
    }

    function prevSlide() {
        index--;
        showSlide();
    }

    // Auto-slide every 3 seconds
    const autoSlide = setInterval(nextSlide, 3000);

    // Touch events for mobile swipe
    slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchmove", (e) => {
        endX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", () => {
        let diff = startX - endX;

        if (diff > 50) {
            // Swipe left (next slide)
            clearInterval(autoSlide);
            nextSlide();
        } else if (diff < -50) {
            // Swipe right (previous slide)
            clearInterval(autoSlide);
            prevSlide();
        }
    });

});

// Function to open video page
function playVideo(videoUrl) {
    window.location.href = `video.html?video=${videoUrl}`;
}
