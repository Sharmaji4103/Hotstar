document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const slider = document.querySelector(".slides");

    function showSlide() {
        if (index >= totalSlides) index = 0;
        if (index < 0) index = totalSlides - 1;

        let newTransformValue = -index * 100 + "%";
        slider.style.transition = "transform 0.8s ease-in-out"; // Smooth transition
        slider.style.transform = `translateX(${newTransformValue})`;
    }

    // Move to Next Slide
    function nextSlide() {
        index++;
        showSlide();
    }

    // Move to Previous Slide
    function prevSlide() {
        index--;
        showSlide();
    }

    // Assigning Functions to Buttons
    document.querySelector(".next-btn").addEventListener("click", nextSlide);
    document.querySelector(".prev-btn").addEventListener("click", prevSlide);

    // 👉 **Touch Swipe Support for Mobile**
    let startX = 0;
    let endX = 0;

    slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        let swipeThreshold = 50; // Minimum swipe distance
        let swipeDistance = startX - endX;

        if (swipeDistance > swipeThreshold) {
            nextSlide(); // Swipe Left → Next Slide
        } else if (swipeDistance < -swipeThreshold) {
            prevSlide(); // Swipe Right → Previous Slide
        }
    }
});
