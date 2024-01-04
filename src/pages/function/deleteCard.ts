export 
function deleteCard(dataValue: string): void {
    const cards: NodeListOf<HTMLElement>= document.querySelectorAll('.modal');
    cards.forEach((card) => {
        if (card.dataset.card === dataValue) {
            localStorage.removeItem(dataValue);
        }
    })
}