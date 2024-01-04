import { AbstractPage } from "../router";
import tamplate from './templates/contacts.html';
import './scss/main.scss';
import { cartCounter } from "./function/cartCounter";

const templateEl = document.createElement("template");
templateEl.innerHTML = tamplate;

export class ContactsPage extends AbstractPage {

    render(): HTMLElement | DocumentFragment {
        return templateEl.content.cloneNode(true) as DocumentFragment;
    }
    onRender(): void {
        cartCounter();

    }
}