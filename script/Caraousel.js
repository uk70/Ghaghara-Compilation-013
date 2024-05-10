
const initWomenSlider = ()=>{
    const skimage = document.querySelector(".sk-caraousel .sk-cimage")
    const slideButtons = document.querySelectorAll(".sk-caraousel .slide-button")
    const sliderScrollbar = document.querySelector(".caraousel-container .slider-scrollbar")
    const scrollbarThumb =sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = skimage.scrollWidth - skimage.clientWidth;

    scrollbarThumb.addEventListener("mousedown", (e)=>{
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) =>{
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            skimage.scrollLeft = scrollPosition;
            
        }

        const handleMouseUp = () =>{
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

    })

    slideButtons.forEach(button =>{
        button.addEventListener("click", () =>{
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = skimage.clientWidth * direction;
            skimage.scrollBy({left:scrollAmount, behavior:"smooth"})

        })
    })

    const handleSlideButtons = ()=>{
        slideButtons[0].style.display = skimage.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = skimage.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    const updateSrollThumbPosition = () =>{
        const scrollPosition = skimage.scrollLeft
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`
    }

    skimage.addEventListener("scroll", ()=>{
        handleSlideButtons();
        updateSrollThumbPosition();
    })
}
window.addEventListener("load", initWomenSlider)


const initMenSlider = () => {
    const skimage = document.querySelector(".sk-caraousel-men .sk-cimage");
    const slideButtons = document.querySelectorAll(".sk-caraousel-men .slide-button");
    const sliderScrollbar = document.querySelector(".caraousel-container-men .slider-scrollbar-men");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb-men");
    const maxScrollLeft = skimage.scrollWidth - skimage.clientWidth;

    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            skimage.scrollLeft = scrollPosition;

        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

    });

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide-men" ? -1 : 1;
            const scrollAmount = skimage.clientWidth * direction;
            skimage.scrollBy({ left: scrollAmount, behavior: "smooth" });

        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = skimage.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = skimage.scrollLeft >= maxScrollLeft ? "none" : "block";
    };

    const updateSrollThumbPosition = () => {
        const scrollPosition = skimage.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    skimage.addEventListener("scroll", () => {
        handleSlideButtons();
        updateSrollThumbPosition();
    });
};

window.addEventListener("load", initMenSlider);
