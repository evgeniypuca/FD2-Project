import { AbstractPage, ResolvedData } from "../router";
import tamplate from './templates/coffee.html';
import './scss/coffee.scss';
import { generateElemets } from "./function/generateElement";
import { modalView } from "./function/modalViev";
import { cartCounter } from "./function/cartCounter";
import { Catalog } from "../router/models/CatalogInterface";


const templateEl = document.createElement("template");
templateEl.innerHTML = tamplate;

export class CoffeePage extends AbstractPage {

    render(): HTMLElement | DocumentFragment {
        return templateEl.content.cloneNode(true) as DocumentFragment;
    }
    onRender(): void {
        const catalogFragment: HTMLElement | null = document.querySelector('.catalog')
        const catalog = this.routeState.resolvedData!.productList as Catalog[];

        generateElemets(catalog, "coffee", catalogFragment);
        
        const cards: NodeListOf<Element>| null = document.querySelectorAll('.menu-item')
        cards.forEach((card) => {
            card.addEventListener('click', (e) => {
            modalView(e, catalog)
            });
            
        });

        cartCounter();

    }
}