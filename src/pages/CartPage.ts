import { AbstractPage, ResolvedData } from "../router";
import tamplate from './templates/cart.html';
import './scss/coffee.scss';
import { cartCounter } from "./function/cartCounter";
import { generateCarts } from "./function/generateCarts";
import { Catalog } from "../router/models/CatalogInterface";


const templateEl = document.createElement("template");
templateEl.innerHTML = tamplate;

export class CartPage extends AbstractPage {

    render(): HTMLElement | DocumentFragment {
        return templateEl.content.cloneNode(true) as DocumentFragment;
    }
    onRender(): void {
        const catalog  = this.routeState.resolvedData!.productList as  Catalog[] ;
        generateCarts(catalog) ;
        cartCounter();
        
        const deleteAll:HTMLElement | null = document.getElementById('deleteAll');
        deleteAll?.addEventListener('click', (e) => {
            localStorage.clear();
            generateCarts(catalog) ;
            cartCounter();
        });
        
        const order:HTMLElement | null = document.getElementById('order');
        const orderPopup = document.querySelector('.order__popup')
        order?.addEventListener('click', (e) => {
            localStorage.clear();
            generateCarts(catalog);
            cartCounter();
            orderPopup?.classList.add('modalHiden');
        });

   
    }
}