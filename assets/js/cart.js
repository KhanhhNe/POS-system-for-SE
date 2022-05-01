const menuItems = [
    {
        id: "1",
        name: "Hamburger",
        price: 123.0,
        image: "assets/img/menu-hamburger.png",
        description: "Delicious hamburger"
    },
    {
        id: "2",
        name: "Sandwich",
        price: 69.5,
        image: "assets/img/menu-hamburger.png",
        description: "Delicious sandwich"
    },
    {
        id: "3",
        name: "Pizza",
        price: 72.0,
        image: "assets/img/menu-hamburger.png",
        description: "Delicious pizza"
    },
    {
        id: "4",
        name: "Chicken",
        price: 140.0,
        image: "assets/img/menu-hamburger.png",
        description: "Delicious chicken"
    },
    {
        id: "5",
        name: "Onion",
        price: 25.4,
        image: "assets/img/menu-hamburger.png",
        description: "Delicious onion"
    },
    {
        id: "6",
        name: "Lemon",
        price: 30.9,
        image: "assets/img/menu-hamburger.png",
        description: "Delicious lemon"
    },
    {
        id: "7",
        name: "Beef",
        price: 50.0,
        image: "assets/img/menu-hamburger.png",
        description: "Delicious beef"
    }
]
let cart = []
if (localStorage.getItem('POS_cart')) {
    cart = JSON.parse(localStorage.getItem('POS_cart'))
}

const cartElem = document.querySelector('.cart')


function setupCart() {
    while (cartElem.childElementCount) {
        cartElem.removeChild(cartElem.children[0])
    }

    let totalQuantity = 0, totalPrice = 0

    for (const item of cart) {
        if (item.quantity === 0) continue

        const template = document.createElement('template')
        template.innerHTML = `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <h2 class="item-name">${item.name}</h2>
                <div class="item-summary">
                    <h5>x${item.quantity}</h5>
                    <h4 class="item-price">$ ${item.price}</h4>
                </div>
            </div>
        `
        cartElem.append(template.content)
        const quantity = item.quantity || 0;
        totalQuantity += quantity
        totalPrice += (item.price || 0) * quantity
    }

    const template = document.createElement('template')
    template.innerHTML = `
        <div class="summary">
            <h2>Total: </h2>
            <div class="total">
                <h2>x${totalQuantity}</h2>
                <h1 class="price">$ ${totalPrice}</h1>
            </div>
        </div>
    `
    cartElem.append(template.content)
}

setupCart()