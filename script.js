function accessCart() {
    // toggel (.hide)
    let cart = document.getElementById("cart-section")
    let cart_icon = document.getElementById("cart-icon")
    cart_icon.classList.toggle('cart-active')
    cart.classList.toggle('hide')
}

function navBtn(btn) {
    // let is_active = btn.classList.contains('active')
    const allAinParent = btn.parentElement.querySelectorAll('a');
    
    allAinParent.forEach(allAinParent => {
        allAinParent.classList.remove('active');
    })

    btn.classList.add('active');
}

function updateCart() {
    let icon_nbItem = document.getElementById('icon-nb-items');
    let value = Number(icon_nbItem.textContent);

    if(icon_nbItem.textContent != '0') {
        icon_nbItem.classList.add('red');
    } else {
        icon_nbItem.classList.remove('red');
    }
}
updateCart();


function checkout() {
    alert('Thanks for your money 👋🙂👌');
    clearCart();
}

function clearCart() {
    
    // delete all items

    document.getElementById('icon-nb-items').textContent = '0';
    updateCart();
}

