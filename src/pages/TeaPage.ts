import { AbstractPage, ResolvedData } from "../router";
import tamplate from './templates/tea.html';
import './scss/coffee.scss';
import { generateElemets } from "./function/generateElement";
import { modalView } from "./function/modalViev";
import { cartCounter } from "./function/cartCounter";
import { Catalog } from "../router/models/CatalogInterface";

const templateEl = document.createElement("template");
templateEl.innerHTML = tamplate;

export class TeaPage extends AbstractPage {

    render(): HTMLElement | DocumentFragment {
        return templateEl.content.cloneNode(true) as DocumentFragment;
    }
    onRender(): void {
        const catalogFragvent: HTMLElement | null = document.querySelector('.catalog')
        const catalog = this.routeState.resolvedData!.productList as Catalog[] ;
        generateElemets(catalog, "tea", catalogFragvent);
        const cards: NodeListOf<Element>| null = document.querySelectorAll('.menu-item')
        const form = document.forms.namedItem('modal');

        cards.forEach((card) => {
            return card.addEventListener('click', (e) => {
                modalView(e, catalog)
            });
            
        })
                
        form?.addEventListener('submit', (e) => {
            e.preventDefault();
            const size = String(new FormData(form).get('size') ?? '');
            cartCounter();  
        })
        cartCounter();

    }
}