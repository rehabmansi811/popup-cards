let currentSlideIndex = 0;
let slides = document.querySelectorAll('.slider-image');
let dots = document.querySelectorAll('.dot');
let slideInterval = setInterval(nextSlide, 3000);

function showSlide(index) {
    // Loop back to the first slide if the index exceeds the number of slides
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    // Move the slider by changing the transform property
    document.querySelector('.slider').style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    // Update the active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlideIndex);
    });
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

function setCurrentSlide(index) {
    showSlide(index);
}

document.querySelector('.slider-container').addEventListener('mouseover', () => {
    clearInterval(slideInterval);
});

document.querySelector('.slider-container').addEventListener('mouseout', () => {
    slideInterval = setInterval(nextSlide, 3000);
});
// Swipe functionality for touch devices
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.slider-container').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.slider-container').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    if (touchEndX < touchStartX) {
        nextSlide();  // Swipe left
    }
    if (touchEndX > touchStartX) {
        prevSlide();  // Swipe right
    }
}