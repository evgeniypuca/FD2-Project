import { Catalog } from "../../router/models/CatalogInterface";

export function generateElemets(jsonCatalog: Catalog[], cat: string, catalogFragvent: HTMLElement| null) {
    let count = 0;
    for (let i = 0; i < jsonCatalog.length; i += 1) {
        if (jsonCatalog[i].category === cat) {
            const  menuItem = document.createElement("div");
            menuItem.classList.add('menu-item');
            const menuImg = document.createElement("div");
            menuImg.classList.add('menu-img');
            menuImg.classList.add(`img${i+1}`);
            const itemList = document.createElement("div");
            itemList.classList.add('item-list');
            const itemListTop = document.createElement("div");
            itemListTop.classList.add('item-list-top');
            const itemTitle = document.createElement("p");
            itemTitle.classList.add('item-title');
            const itemDescription = document.createElement("span");
            itemDescription.classList.add('item-description');
            const itemPrice = document.createElement("span");
            itemPrice.classList.add('item-price');

            itemTitle.textContent = jsonCatalog[i].name as string;
            itemDescription.textContent = jsonCatalog[i].description as string;
            itemPrice.textContent = jsonCatalog[i].price as string;

            itemListTop.append(itemTitle);
            itemListTop.append(itemDescription);
            itemList.append(itemListTop);
            itemList.append(itemPrice);  
            menuItem.append(menuImg); 
            menuItem.append(itemList);
            menuItem.id = i as unknown as string;
            catalogFragvent!.append(menuItem);
            count++;
        }
    }
}