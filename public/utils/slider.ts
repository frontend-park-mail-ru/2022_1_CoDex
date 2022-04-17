/**
 * @description Отрисовывает и меняет указанный слайдер.
 * @param { string } selector Селектор для слайдера
 */

export const slider = (selector: string) => {
    const slider = document.querySelector(selector);
    const sliderList = slider?.querySelector(".slider__list") as HTMLElement;
    const sliderTrack = slider?.querySelector(".slider__list__track") as HTMLElement;
    const slides = slider?.querySelectorAll(".slide");
    if (!slider || ! sliderList || !sliderTrack || !slides) { return; } 
    let slideIndex = 0;

    const buttons = slider.querySelector(".slider__arrows") as HTMLElement;
    const previous = buttons?.children[0];
    const next = buttons?.children[1];
    const oneSlideWidth = (slides[0] as HTMLElement).offsetWidth;
    const totalWidth = sliderList?.offsetWidth || 0;
    const visibleAmount = Math.floor(totalWidth / oneSlideWidth);
    const gap = Math.floor((totalWidth - visibleAmount * oneSlideWidth) / (visibleAmount - 1));

    const itemsAmount = slides.length;

    let moveWidth = 0;
    if (itemsAmount > visibleAmount) {
        moveWidth = (itemsAmount - visibleAmount) * oneSlideWidth + 
        + oneSlideWidth - (totalWidth - oneSlideWidth * visibleAmount) + gap;
    }
    sliderTrack.style.transform = "translate3d(0px, 0px, 0px)";
    previous?.classList.toggle("disabled", slideIndex === 0);
    next?.classList.toggle("disabled", slideIndex >= itemsAmount - visibleAmount);
    
    const addButtonsEvent = (buttons: HTMLElement) => {
        buttons.addEventListener("click", (e) => {
            const target = e.target as HTMLElement;
            if (target?.classList.contains("slider__button__left")) { 
                slideIndex--;
            } else if (target.classList.contains("slider__button__right")) {
                slideIndex++;
            } else {
                return;
            }
            moveSlides();
        });
    }
    
    /**
     * @description Сдвигает слайды на необходимую величину.
     * @param { Number } Ширина, по которую необходимо сдвинуть слайды
     */
    const moveSlides = (resultSlide: number = 0) => {
        if (!sliderTrack) { return; }
        sliderTrack.style.transition = "transform .5s";
        if (resultSlide) {
            sliderTrack.style.transform = `translate3d(-${resultSlide}px, 0px, 0px)`;
            return;
        }
        if (slideIndex < 0) { slideIndex = 0;}
        let slideWidth = 0;
        if (slideIndex * (oneSlideWidth + gap) > moveWidth) {
            slideWidth = moveWidth;
        } else {
            slideWidth = slideIndex * (oneSlideWidth + gap);
        }
        sliderTrack.style.transform = `translate3d(-${slideWidth}px, 0px, 0px)`;
        previous?.classList.toggle("disabled", slideIndex === 0);
        next?.classList.toggle("disabled", slideIndex >= itemsAmount - visibleAmount);

        if (slideIndex >= itemsAmount - visibleAmount) {
            if (itemsAmount - visibleAmount - 1 > 0) {
                slideIndex = itemsAmount - visibleAmount - 1;
            } else {
                slideIndex = 0;
            }
        }
    }
    addButtonsEvent(buttons);
    // TODO: swipe? 

}
