document.addEventListener('DOMContentLoaded', () => {
    // Atualiza o valor total do carrinho e exibe uma mensagem se estiver vazio
    function updateTotal() {
        let total = 0; 
        const cartItems = document.querySelectorAll('.cart-item'); 
        const totalElement = document.querySelector('.cart-total span'); 

        // Calcula o total com base no preço e quantidade de cada item
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.cart-item-price').innerText.replace('R$ ', '').replace(',', '.'));
            const quantity = parseInt(item.querySelector('.cart-item-quantity span').innerText);
            total += price * quantity; 
        });

        // Atualiza o elemento total com o valor formatado
        totalElement.innerText = `R$ ${total.toFixed(2)}`;

        // Verifica se o carrinho está vazio e exibe uma mensagem
        if (cartItems.length === 0) {
            document.querySelector('.cart-items').innerHTML = "<p class='empty-cart'>Seu carrinho está vazio!</p>";
            document.querySelector('.cart-total').style.display = 'none'; // Esconde o total se não houver itens
        } else {
            document.querySelector('.cart-total').style.display = 'block'; // Mostra o total se houver itens
        }
    }

    // Configura os botões para aumentar, diminuir ou remover itens
    function attachEventListeners() {
        const increaseButtons = document.querySelectorAll('.increase'); 
        const decreaseButtons = document.querySelectorAll('.decrease'); 
        const removeButtons = document.querySelectorAll('.remove-item');

        // Vincula os eventos de clique para aumentar a quantidade
        increaseButtons.forEach(button => {
            button.removeEventListener('click', handleIncrease); 
            button.addEventListener('click', handleIncrease); 
        });

        // Vincula os eventos de clique para diminuir a quantidade
        decreaseButtons.forEach(button => {
            button.removeEventListener('click', handleDecrease); 
            button.addEventListener('click', handleDecrease); 
        });

        // Vincula os eventos de clique para remover itens do carrinho
        removeButtons.forEach(button => {
            button.removeEventListener('click', handleRemove); 
            button.addEventListener('click', handleRemove); 
        });
    }

    // Lida com o aumento da quantidade de itens no carrinho
    function handleIncrease(event) {
        const quantity = event.target.closest('.cart-item').querySelector('.cart-item-quantity span'); 
        quantity.innerText = parseInt(quantity.innerText) + 1; 
        updateTotal(); 
    }

    // Lida com a diminuição da quantidade de itens no carrinho
    function handleDecrease(event) {
        const quantity = event.target.closest('.cart-item').querySelector('.cart-item-quantity span'); 
        if (parseInt(quantity.innerText) > 1) { 
            quantity.innerText = parseInt(quantity.innerText) - 1; 
            updateTotal(); 
        }
    }

    // Lida com a remoção de itens do carrinho
    function handleRemove(event) {
        const item = event.target.closest('.cart-item'); 
        item.classList.add('remove-animation'); 
        setTimeout(() => {
            item.remove(); 
            updateTotal(); 
            attachEventListeners(); 
        }, 300); 
    }

    // Configura os eventos ao carregar a página
    attachEventListeners(); 
    updateTotal(); 
});
