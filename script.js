document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const slider = document.querySelector(".slides");

    function showSlide() {
        if (index >= totalSlides) index = 0;
        if (index < 0) index = totalSlides - 1;

        let newTransformValue = -index * 100 + "%";
        slider.style.transition = "transform 0.8s ease-in-out"; // Smoother transition
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
});

function playVideo(videoUrl) {
    window.location.href = `video.html?video=${videoUrl}`;
}

