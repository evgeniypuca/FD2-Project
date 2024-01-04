import { Catalog } from "../../router/models/CatalogInterface";
import { key } from "./key";


export function createModal(id:number, catalog: Catalog[]) {
  
    const totalPrice = document.getElementById('totalPrice');
    const modalImg: HTMLElement| null = document.querySelector('#modal__img');
    const inputs: NodeList =  document.querySelectorAll('input');
    
    modalImg!.classList.add(`img${Number(id)+1}`);
    modalImg!.classList.add('modal__img');

    const modalTitle: HTMLElement| null = document.querySelector('.modal__title');
    modalTitle!.textContent = catalog[id].name as string;

    const modalDescription : HTMLElement| null= document.querySelector('.modal__description');
    modalDescription!.textContent =catalog[id].description as string;
    
    const inputSizeS : HTMLElement| null= document.getElementById('size-s');
    inputSizeS!.textContent = catalog[id].sizes!.s.addprice;
    inputSizeS!.classList.add('s');
    inputSizeS!.setAttribute('checked', 'true');
    const inputSizeL : HTMLElement| null = document.getElementById('size-l');
    inputSizeL!.textContent = catalog[id].sizes.l.addprice;
    inputSizeL!.classList.add('l');
    const inputSizeM : HTMLElement| null = document.getElementById('size-m');
    inputSizeM!.textContent = catalog[id].sizes.m.addprice;
    inputSizeM!.classList.add('m');

    const modalSizeNameS : HTMLElement| null = document.querySelector('.modal__size-name-s');
    modalSizeNameS!.textContent = catalog[id].sizes.s.size;

    const modalSizeNameM : HTMLElement| null = document.querySelector('.modal__size-name-m');
    modalSizeNameM!.textContent = catalog[id].sizes.m.size;

    const modalSizeNameL: HTMLElement| null = document.querySelector('.modal__size-name-l');
    modalSizeNameL!.textContent = catalog[id].sizes.l.size;

   
    let result = Number(catalog[id].price);

    let currentResult: number = 0
    totalPrice!.textContent = `$${result + currentResult}`; 

  const curentInputs = document.querySelectorAll('input');
    curentInputs!.forEach((input) => {
        input.addEventListener('click', (e) => {
            let elem = e.target as HTMLInputElement;   
            if(elem.value === `s`) {
              console.log('s');
              currentResult = 0;
                totalPrice!.textContent = `$${result + currentResult}`; 
            }else if (elem.value === `m`) {
              console.log('m');
                currentResult = 0.5;
                totalPrice!.textContent = `$${result + currentResult}`; 
            } else if (elem.value === `l`){
              console.log('l');
                currentResult = 1;
                totalPrice!.textContent = `$${result + currentResult}`; 
            }
            });
    }) 



    

}