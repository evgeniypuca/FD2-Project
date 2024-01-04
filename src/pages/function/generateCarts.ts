import { Catalog } from "../../router/models/CatalogInterface";
import { handleDeleteButtons } from "./handleDeleteButtons";

export function generateCarts(catalog:Catalog[]) {
    const carts:HTMLElement | null  = document.querySelector('.carts')
    if (carts) {
        carts.innerHTML ='';
    }

    if (localStorage.length) {
        for (let i = 0; i < localStorage.length; i++) {
        let id = Number(localStorage.key(i));
           
    const card: HTMLElement| null = document.createElement('div');
    card!.classList.add('modal');
    card.dataset.card = id.toString();

    const modalImg: HTMLElement| null = document.createElement('div');
    modalImg!.classList.add(`img${Number(id)+1}`);
    modalImg!.classList.add('modal__img');

    const modalBody: HTMLElement| null = document.createElement('div');
    modalBody!.classList.add('modal__body');
    modalBody!.setAttribute('name', 'modal')

    const modalTitle: HTMLElement| null = document.createElement('h3');
    modalTitle!.classList.add('modal__title')
    modalTitle!.textContent = catalog[id].name as string;

    const modalDescription : HTMLElement| null= document.createElement('p');
    modalDescription!.classList.add('modal__description')
    modalDescription!.textContent =catalog[id].description ;
    
    const modalSize : HTMLElement| null = document.createElement('div');
    modalSize!.classList.add('modal__size')
// --------------------------------------------------------
    const inputSizeS : HTMLElement| null= document.createElement('input');
    inputSizeS!.setAttribute('type', 'radio');
    inputSizeS!.setAttribute('name', `size${id}`);
    inputSizeS!.setAttribute('id', `s${id}`);

    const label1 : HTMLElement| null= document.createElement('label');
    label1!.setAttribute('for', `s${id}`);
    label1!.classList.add('modal__menu-button')
        
    const spanTypeS : HTMLElement| null= document.createElement('span');
    spanTypeS!.textContent = 'S';
    spanTypeS!.classList.add('modal__size-type');
    
    const spanSizeS : HTMLElement| null= document.createElement('span');
    spanSizeS!.textContent = catalog[id].sizes.s.addprice;
    spanSizeS!.classList.add('modal__size-name', 'modal__size-name-s')

    label1!.append(spanTypeS);
    label1!.append(spanSizeS);
//----------------------------------------------------
    const inputSizeM : HTMLElement| null= document.createElement('input');
    inputSizeM!.setAttribute('type', 'radio');
    inputSizeM!.setAttribute('name', `size${id}`);
    inputSizeM!.setAttribute('id', `m${id}`);

    const label2 : HTMLElement| null= document.createElement('label');
    label2!.setAttribute('for', `m${id}`);
    label2!.classList.add('modal__menu-button')

    const spanTypeM : HTMLElement| null= document.createElement('span');
    spanTypeM!.textContent = 'M';
    spanTypeM!.classList.add('modal__size-type');

    const spanSizeM : HTMLElement| null= document.createElement('span');
    spanSizeM!.textContent = catalog[id].sizes.m.addprice;
    spanSizeM!.classList.add('modal__size-name', 'modal__size-name-m');

    label2!.append(spanTypeM);
    label2!.append(spanSizeM);

//----------------------------------------------------
    const inputSizeL : HTMLElement| null= document.createElement('input');
    inputSizeL!.setAttribute('type', 'radio');
    inputSizeL!.setAttribute('name', `size${id}`);
    inputSizeL!.setAttribute('id', `l${id}`);

    const label3 : HTMLElement| null= document.createElement('label');
    label3!.setAttribute('for', `l${id}`);
    label3!.classList.add('modal__menu-button')

    const spanTypeL : HTMLElement| null= document.createElement('span');
    spanTypeL!.textContent = 'L';
    spanTypeL!.classList.add('modal__size-type');

    const spanSizeL: HTMLElement| null= document.createElement('span');
    spanSizeL!.textContent = catalog[id].sizes.l.addprice;
    spanSizeL!.classList.add('modal__size-name', 'modal__size-name-l');

    label3!.append(spanTypeL);
    label3!.append(spanSizeL);

// ---------------------------------------------------------------
    const modalTotal: HTMLElement| null= document.createElement('div');
    spanSizeL!.classList.add('modal__total');

    const button: HTMLElement| null= document.createElement('button');
    button.textContent = 'Delete'
    button!.setAttribute('type', 'submit');
    button!.classList.add('modal__close');
    button.dataset.card = id.toString();

    const totalPrice: HTMLElement| null= document.createElement('span');
    totalPrice!.setAttribute('id', 'totalPrice');
    let result = Number(catalog[id].price);




   
    modalTotal.append(totalPrice)
    modalSize.append(inputSizeS)   
    modalSize.append(label1)   
    modalSize.append(inputSizeM)   
    modalSize.append(label2)
    modalSize.append(inputSizeL)   
    modalSize.append(label3)    
    modalBody.append(modalTitle);
    modalBody.append(modalDescription);
    modalBody.append(modalSize);
    modalBody.append(modalTotal);
    modalBody.append(button);
    card.append(modalImg );
    card.append(modalBody);
    carts?.append(card)
  

    let currentResult: number = 0
    // if(localStorage.getItem(id.toString()) === 's') {
    //     currentResult = 0;
    //     inputSizeS!.setAttribute('checked', 'true');
    // } else if (localStorage.getItem(id.toString()) === 'm') {
    //     currentResult = 0.5;
    //     inputSizeM!.setAttribute('checked', 'true');
    // } else if (localStorage.getItem(id.toString()) === 'l') {
    //     currentResult = 1;
    //     inputSizeL!.setAttribute('checked', 'true');
    // };
    

    totalPrice!.textContent = `$${result + currentResult}`; 

    const curentInputs = document.querySelectorAll('input');
   
    curentInputs!.forEach((input) => {
        input.addEventListener('click', (e) => {
            let elem = e.target as HTMLInputElement;   
            if(elem.id === `s${id}`) {
                currentResult = 0;
                totalPrice!.textContent = `$${result + currentResult}`; 
            }else if (elem.id === `m${id}`) {
                currentResult = 0.5;
                totalPrice!.textContent = `$${result + currentResult}`; 
            } else if (elem.id === `l${id}`){
                currentResult = 1;
                totalPrice!.textContent = `$${result + currentResult}`; 
            }
            });
    }) 

    

        }
    } else {
        if (carts) {
            carts.innerHTML = 'no products selected';
        }

    }
    handleDeleteButtons(catalog)


}

