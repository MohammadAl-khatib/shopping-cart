/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);



}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody) 
function clearCart() {
  for(let i=1; i<table.rows.length;i++){
    table.deleteRow(i);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tablebodyEl = table.getElementsByTagName('tbody')[0];
  let tr3 = document.createElement('tr');

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  for (let i = 0; i < cart.items.length; i++) {
    let tr1 = document.createElement('tr');
    
// TODO: Create a TD for the delete link, quantity,  and the item
    let td1El = document.createElement('td');
    let td2El = document.createElement('td');
    let td3El = document.createElement('td');

// TODO: Add the TR to the TBODY and each of the TD's to the TR
    tablebodyEl.appendChild(tr1);
    tr1.appendChild(td1El);
    tr1.appendChild(td2El);
    tr1.appendChild(td3El);

    td1El.textContent = 'X';
    td2El.textContent = cart.items[i].quantity;
    td3El.textContent = cart.items[i].product;

  
  }
}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // if(event.target.td1El.id > table.rows.length){
   console.log (event.parentNode);
  // cart.removeItem(0);
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  // renderCart();
  
  // }
}

// This will initialize the page and draw the cart on screen
renderCart();


