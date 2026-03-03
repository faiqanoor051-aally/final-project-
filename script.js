 let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
cart.push({name, price, qty:1});
localStorage.setItem("cart", JSON.stringify(cart));
alert(name + " added to cart!");
}

function loadCart(){
let cartDiv = document.getElementById("cartItems");
let total = 0;
cartDiv.innerHTML="";

cart.forEach((item,index)=>{
total += item.price * item.qty;

cartDiv.innerHTML += `
<div class="cart-item">
${item.name} (Rs ${item.price}) x ${item.qty}
<div>
<button onclick="increase(${index})">+</button>
<button onclick="decrease(${index})">-</button>
<button onclick="removeItem(${index})">Delete</button>
</div>
</div>`;
});

document.getElementById("total").innerText="Total: Rs " + total;
}

function increase(index){
cart[index].qty++;
localStorage.setItem("cart", JSON.stringify(cart));
loadCart();
}

function decrease(index){
if(cart[index].qty>1){
cart[index].qty--;
}
localStorage.setItem("cart", JSON.stringify(cart));
loadCart();
}

function removeItem(index){
cart.splice(index,1);
localStorage.setItem("cart", JSON.stringify(cart));
loadCart();
}

function submitOrder(){
alert("Your Order Submitted Successfully!");
localStorage.removeItem("cart");
window.location.href="contact.html";
}
function openLogin(){
document.getElementById("loginPopup").style.display="flex";
}

function closeLogin(){
document.getElementById("loginPopup").style.display="none";
}

function loginUser(){
let username=document.getElementById("username").value;
if(username==""){
alert("Please enter username");
return;
}
alert("Welcome "+username+" 💖");
closeLogin();
}