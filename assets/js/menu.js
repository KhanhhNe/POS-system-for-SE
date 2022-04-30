const menuItems = [
    {
        id: "1",
        name: "Hamburger",
        price: "123,00",
        image: "assets/img/menu-hamburger.png"
    },
    {
        id: "2",
        name: "Sandwich",
        price: "69,00",
        image: "assets/img/menu-hamburger.png"
    },
    {
        id: "3",
        name: "Pizza",
        price: "72,00",
        image: "assets/img/menu-hamburger.png"
    },
    {
        id: "4",
        name: "Chicken",
        price: "140,00",
        image: "assets/img/menu-hamburger.png"
    },
    {
        id: "5",
        name: "Onion",
        price: "25,00",
        image: "assets/img/menu-hamburger.png"
    },
    {
        id: "6",
        name: "Lemon",
        price: "30,00",
        image: "assets/img/menu-hamburger.png"
    },
    {
        id: "7",
        name: "Beef",
        price: "50,00",
        image: "assets/img/menu-hamburger.png"
    }
]
let cart = []
if (localStorage.getItem('POS_cart')) {
    cart = JSON.parse(localStorage.getItem('POS_cart'))
}

const menuElem = document.querySelector('.menu')


function setupMenu() {
    while (menuElem.childElementCount) {
        menuElem.removeChild(menuElem.children[0])
    }

    for (const item of menuItems) {
        const template = document.createElement('template')
        template.innerHTML = `
            <div class="item" id="item-${item.id}">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-name">${item.name}</div>
                <div class="item-details">
                    <span class="item-price">Kr ${item.price}</span>
                    <button class="item-buy" onclick="buyItem('${item.id}')">Buy</button>
                    <div class="item-modify-wrapper">
                        <button class="item-modify decrease" onclick="reduceItem('${item.id}')">-</button>
                        <span class="item-order-amount">0</span>
                        <button class="item-modify increase" onclick="buyItem('${item.id}')">+</button>
                    </div>
                </div>
            </div>
        `
        menuElem.append(template.content)
    }

    for (const item of cart) {
        updateItem(item.id)
    }
}

setupMenu()


function getCartItem(itemId) {
    return cart.filter(i => i.id === itemId)[0]
}


function updateItem(itemId) {
    const quantity = getCartItem(itemId).quantity
    const itemElem = document.querySelector(`#item-${itemId}`)
    if (quantity > 0) {
        itemElem.classList.add('in-cart')
    } else {
        itemElem.classList.remove('in-cart')
    }
    itemElem.querySelector(`.item-order-amount`).textContent = String(quantity)
}


function saveCart() {
    localStorage.setItem('POS_cart', JSON.stringify(cart))
}


function buyItem(itemId) {
    if (getCartItem(itemId) === undefined) {
        const item = menuItems.filter(i => i.id === itemId)[0]
        cart.push({
            ...item,
            quantity: 0
        })
    }
    getCartItem(itemId).quantity += 1
    updateItem(itemId)
    saveCart()
}


function reduceItem(itemId) {
    const item = getCartItem(itemId)
    if (item === undefined || item.quantity === 0) return

    item.quantity -= 1
    updateItem(itemId)
    saveCart()
}
