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
    const moveSlides = (resultSlide = 0) => {
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
    
    let widthSlided = 0;
    let posInit = 0;
    let posX1 = 0;
    let posX2 = 0;
    let posY1 = 0;
    let posY2 = 0;
    let isSwipe = false;
    let isScroll = false;
    let allowSwipe = true;
    const trfRegExp = /([-0-9.]+(?=px))/;
    let swipeStartTime = 0;
    let swipeEndTime = 0;

    const getEvent = (e: TouchEvent) => {
        return (e.type.search("touch") !== -1) ? e.touches[0] : null;
    }

    const swipeStart = (e: Event) => {
      const evt = getEvent(e as TouchEvent);
      if (!evt) { return; }
      if (allowSwipe) {
        swipeStartTime = Date.now();
        posInit = posX1 = evt.clientX;
        posY1 = evt.clientY;
        sliderTrack.style.transition = '';
        slider.addEventListener('touchmove', function(e) {
          swipeAction(e);
        }, false);
        slider.addEventListener('touchend', swipeEnd);
      }
    };

    const swipeAction = (e: Event) => {
      const touchEvent = e as TouchEvent;
      allowSwipe = true;
      const evt = getEvent(touchEvent);
      if (!evt) { return; }
      const style = sliderTrack.style.transform;
      const transformArray = style.match(trfRegExp);
      const transformString = transformArray ? transformArray[0] : null;
      const transform = transformString ? +transformString : 0;
      posX2 = posX1 - evt.clientX;
      posX1 = evt.clientX;

      posY2 = posY1 - evt.clientY;
      posY1 = evt.clientY;

      if (!isSwipe && !isScroll) {
        const posY = Math.abs(posY2);
        if (posY >= 7) {
          isScroll = true;
          allowSwipe = false;
        } else if (posY < 7) {
          isSwipe = true;
          e.preventDefault();
          e.stopPropagation();
        }
      }
      if (isSwipe) {
        sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
      }
    };
    const swipeEnd = () => {
      isSwipe = false;
      slider.addEventListener('touchmove', function(e) {
        swipeAction(e);
      }, false);
      slider.addEventListener('touchend', swipeEnd);

      if (allowSwipe) {
        swipeEndTime = Date.now();
        if (posInit !== posX1 && !isScroll && swipeEndTime - swipeStartTime < 800) {
          widthSlided += (posInit - posX1) * 3;
          if (widthSlided > moveWidth) {
            widthSlided = moveWidth;
          }
          if (widthSlided <= 0) {
            widthSlided = 0;
          }
          moveSlides(widthSlided);
        } else if (widthSlided + (posInit - posX1) > moveWidth) {
          moveSlides(moveWidth);
          sliderTrack.style.transform = `translate3d(-${moveWidth}px, 0px, 0px)`;
        } else if (widthSlided + (posInit - posX1) <= 0) {
          moveSlides(0);
          sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
        }
      }
      isScroll = false;
    };

    sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
    slider.addEventListener('touchstart', swipeStart);
}
