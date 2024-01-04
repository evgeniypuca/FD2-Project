import { Catalog } from "../../router/models/CatalogInterface";
import { cartCounter } from "./cartCounter";
import { createModal } from "./createModal";
import { key } from "./key";

export function modalView(e:any, catalog:Catalog[]): void {
    const modalContainer:HTMLElement | null = document.querySelector('.modal-container');
    const body: HTMLElement | null= document.querySelector('body')

    createModal(e.currentTarget.id, catalog);

    const id = e.currentTarget.id;
    modalContainer!.classList.toggle('modalHiden');
    body!.classList.toggle('noscroll');

    const form = document.forms.namedItem('modal');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        modalContainer!.classList.remove('modalHiden');
        body!.classList.remove('noscroll');
        
        const option = <HTMLInputElement> document.querySelector('input[name="size"]:checked');
        localStorage.setItem(id, option.value)
        cartCounter();

    })
   
}
