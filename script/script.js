const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselCards = document.querySelector('.carousel-cards');
const cardWidth = 420; // Width of each card including margin and image width
const numCardsToShow = 1; // Number of card-image pairs to show at once
let cardIndex = 0;

nextBtn.addEventListener('click', () => {
    cardIndex++;
    if (cardIndex > carouselCards.children.length - numCardsToShow) {
        cardIndex = 0;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    cardIndex--;
    if (cardIndex < 0) {
        cardIndex = carouselCards.children.length - numCardsToShow;
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -cardIndex * cardWidth;
    carouselCards.style.transform = `translateX(${offset}px)`;
}