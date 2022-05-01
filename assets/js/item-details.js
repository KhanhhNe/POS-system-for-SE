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

const searchParams = new URLSearchParams((new URL(location)).search)
const itemId = searchParams.get('item_id')

function displayItem(itemId) {
    const item = menuItems.find(i => i.id === itemId)
    if (item === undefined) return

    document.querySelector('.item-details-wrapper').innerHTML = `   
        <div class="item-details">
            <section>
                <div class="item-brief-line">
                    <h1 class="item-name">${item.name}</h1>
                    <h3 style="text-align: right">Unit Price</h3>
                </div>
                <div class="item-brief-line">
                    <h3 class="item-id">SKU: ${item.id}</h3>
                    <h2 class="item-price">$ ${item.price}</h2>
                </div>
            </section>
            <section>
                <h3>Description</h3>
                ${item.description}
            </section>
        </div>
    `
}

displayItem(itemId)
