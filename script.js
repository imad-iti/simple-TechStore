const { createElement } = require("react");

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
    let totalPrice = parseFloat(document.getElementById('total-price').textContent.replace("Total price : $" , ""));
    let message = 'Thanks for your 👋🙂👌' + totalPrice;
    if(totalPrice == 0) {
        alert('Your cart is Empty 💳❌');
    } else {
        alert(message);
        accessCart();
        clearCart();
    }
}

function clearCart() {

    // delete all items

    document.getElementById('icon-nb-items').textContent = '0';
    document.getElementById('nb-items').textContent = "Items : 0";
    document.getElementById('total-price').textContent = "Total price : $0";
    document.getElementById('cart-items').textContent = "";
    updateCart();
}

function addToCart(btn) {
    let iconNbItems = document.getElementById("icon-nb-items");
    let nbItems = document.getElementById("nb-items");

    let count = parseInt(iconNbItems.textContent) + 1;

    nbItems.textContent = "Items : " + count;
    iconNbItems.textContent = count;


    let card = btn.closest(".card");

    let name = card.querySelector(".product-name").textContent;

    let price = parseFloat(
        card.querySelector(".price").textContent.replace("$", "")
    );

    let totalPrice = document.getElementById("total-price");

    let currentTotal = parseFloat(
        totalPrice.textContent.replace("Total price : $", "")
    );

    totalPrice.textContent =
        `Total price : $${(currentTotal + price).toFixed(2)}`;  // %.2f

    
    let p = document.createElement("p");

    p.innerHTML = `${name} = $${price}`;

    // document.getElementById("total-price").before(p);
    document.getElementById("cart-items").appendChild(p);


    updateCart();
}