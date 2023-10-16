// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        },
        subtotalWithDiscount: 0
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        },
        subtotalWithDiscount: 0
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Wedding dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Boots',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Cap',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    let producte = products.find(item => item.id === id);    
    let producteAfegit = cart.find(product => product.id === id);

    if(producteAfegit){
        producteAfegit.quantity += 1;
    }else{
        cart.push({...producte, quantity: 1});
    }        
    applyPromotionsCart()
    calculateTotal(); 
    printCart();
}

// Exercise 2
function cleanCart() {
    cart.splice(0, cart.length);    
    total = 0;
    printCart();
}

// Exercise 3
function calculateTotal() {
    total = 0;
    for(let item of cart){
        total += item.subtotalWithDiscount;
    }
    return total;
}

// Exercise 4
function applyPromotionsCart() {    
    for(let item of cart){
        if(item.offer && item.quantity >= item.offer.number){
            let descompte = item.price * (1 - item.offer.percent/100);
            item.subtotalWithDiscount = item.quantity * descompte;
        } else{
            item.subtotalWithDiscount = item.price * item.quantity;
        }
        total += item.subtotalWithDiscount;
    }      
}

// Exercise 5
function printCart() {
    let cartModal = document.getElementById("cart_list");
    let cartList = "";    

    cart.forEach((item) => {
        cartList += '<tr>';
        cartList += '<th scope="row">' + item.name + '</th>';
        cartList += '<td>$' + item.price.toFixed(2) + '</td>';
        cartList += '<td>' + item.quantity + '</td>';
        cartList += '<td>$' + item.subtotalWithDiscount.toFixed(2) + '</td>';
        cartList += '<td>';
        cartList += '<button type="button" onclick="removeFromCart(' + item.id + ')" class="btn btn-outline-secondary btn-sm">Remove 1</button>';
        cartList += '</td>';
        cartList += '</tr>';
        
    });
    cartModal.innerHTML = cartList;

    let cartTotal = document.getElementById("total_price");
    cartTotal.innerHTML = total.toFixed(2); 
    
    //Actualitzar comptador productes al navbar
    let count = document.getElementById("count_product");
    let countCart = cart.reduce((total, item) => total + item.quantity, 0);
    count.innerHTML = countCart;   
}



// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    const indexProduct = cart.findIndex(item => item.id === id);

    if(indexProduct !== -1){
        const product = cart[indexProduct];

        if(product.quantity > 1){
            product.quantity--;
        }else{
            cart.splice(indexProduct, 1);
        }

        applyPromotionsCart();
        calculateTotal();
        printCart();
    }
}

function open_modal() {
    printCart();
}