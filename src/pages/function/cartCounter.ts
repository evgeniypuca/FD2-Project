export  function cartCounter(): void {
    const cartCount: HTMLElement | null = document.getElementById('cartCounter');
    if (cartCount) {
        if (localStorage.length === 1){
            cartCount.textContent = `${localStorage.length} dish in`;
        } else if (localStorage.length > 1) {
            cartCount.textContent = `${localStorage.length} dishes in`;
        } else {
            cartCount.textContent = '';
        }
    }
}
