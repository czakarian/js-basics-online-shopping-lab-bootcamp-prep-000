var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * ((100-1) +1) +1)
  var newobj = {[item]: itemPrice}
  cart.push(newobj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if(cart.length() === 0) {
    console.log("Your shopping cart is empty.")
  }
  else if(cart.length === 1) {
    var cartitem = cart[0]
    var price = cart[0]
    console.log(`In your cart, you have ${cart[0]} at $${cart[0].item}.`)
  }
  else if(cart.length === 2) {
    console.log(`In your cart, you have ${cart[0]} at $${cart[0]}`)
  }
  else {
    consolelog
  }
}

function total() {
  for(var i = 0; i < cart.length())
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
