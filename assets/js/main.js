const prevButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');
const testimonialContainer = document.querySelector('.testimonial-cards-container');
const testimonialCards = document.querySelectorAll('.testimonial-card');

let scrollAmount;

function updateScrollAmount() {
    scrollAmount = testimonialCards[0].offsetWidth;
}

updateScrollAmount();
window.addEventListener('resize', updateScrollAmount);

prevButton.addEventListener('click', () => {
    testimonialContainer.scrollBy(-scrollAmount, 0);
});

nextButton.addEventListener('click', () => {
    testimonialContainer.scrollBy(scrollAmount, 0);
});