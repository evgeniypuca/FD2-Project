import { AbstractPage } from "../router";
import tamplate from './templates/main.html';
import './scss/main.scss';
import { cartCounter } from "./function/cartCounter";



const templateEl = document.createElement("template");
templateEl.innerHTML = tamplate;

export class mainPage extends AbstractPage {

    render(): HTMLElement | DocumentFragment {
        return templateEl.content.cloneNode(true) as DocumentFragment;
    }
    onRender(): void {
        const sliderRow:HTMLElement | null = document.querySelector('.slider-row');
        const BTN_LEFT:HTMLElement | null = document.querySelector('.slider__previos');
        const BTN_RIGHT:HTMLElement | null = document.querySelector('.slider__next');
        const sliderControls = document.querySelectorAll('.slider__control div');
        const slides = document.querySelectorAll('.slider__figure');
        const time:number = 6000;
        let counter = 0;

        function autoscroll () {
            setInterval(() => {
                    scrollNext ();
                },time);
            }

        autoscroll ();
        
        function scrollNext () {
            counter +=480;
            if (counter > 961) {
                counter = 0;
            }
            if (sliderRow) {
                sliderRow.style.right = counter + 'px';
            }

        } 
            
        function scrollPrev () {
                counter -=480;
            if (counter < 0) {
                counter = 960;
            }
            if (sliderRow) {
                sliderRow.style.right = counter + 'px';
            }
        }
        
        if (BTN_LEFT) {
            BTN_LEFT.addEventListener('click', scrollPrev);
        }
        if (BTN_RIGHT) {
            BTN_RIGHT.addEventListener('click',scrollNext);
        }
        
        cartCounter();

      
    }

}