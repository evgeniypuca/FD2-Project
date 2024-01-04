import { Catalog } from "../../router/models/CatalogInterface";
import { cartCounter } from "./cartCounter";
import { deleteCard } from "./deleteCard";
import { generateCarts } from "./generateCarts";

export function handleDeleteButtons(catalog:Catalog[]) {
    const deleteButtons:NodeListOf<HTMLButtonElement>= document.querySelectorAll('.modal__close')
    deleteButtons.forEach ((btn) => {

    btn.addEventListener('click',() => {
        const data = btn.dataset.card as string; 
        deleteCard(data)
        generateCarts(catalog) ;
        cartCounter();
    });
})
}
