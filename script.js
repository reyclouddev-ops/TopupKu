const bestSellerDiv = document.getElementById("bestSeller");
const regulerDiv = document.getElementById("reguler");
const gamepassDiv = document.getElementById("gamepass");

let selectedType = "";

function createCard(product){

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h3>${product.name}</h3>
        <p>${rupiah(product.price)}</p>

        <button onclick="buyProduct(
            '${product.name}',
            ${product.price},
            '${product.type}'
        )">
            🛒 Beli Sekarang
        </button>
    `;

    return card;
}

products.bestSeller.forEach(product=>{
    bestSellerDiv.appendChild(createCard(product));
});

products.reguler.forEach(product=>{
    regulerDiv.appendChild(createCard(product));
});

products.gamepass.forEach(product=>{
    gamepassDiv.appendChild(createCard(product));
});

function buyProduct(name,price,type){

    selectedType = type;

    document.getElementById("selectedProduct").value = name;
    document.getElementById("selectedPrice").value = price;

    window.scrollTo({
        top:document.querySelector(".checkout").offsetTop,
        behavior:"smooth"
    });

}

document
.getElementById("checkoutForm")
.addEventListener("submit",function(e){

e.preventDefault();

const username =
document.getElementById("username").value;

const email =
document.getElementById("email").value;

const product =
document.getElementById("selectedProduct").value;

const price =
document.getElementById("selectedPrice").value;

if(product==""){

alert("Silakan pilih produk dulu!");

return;

}

const invoice =
"RCD-" +
Math.random()
.toString(36)
.substring(2,10)
.toUpperCase();

document.getElementById("invoice").innerText =
invoice;

document.getElementById("produk").innerText =
product;

document.getElementById("harga").innerText =
rupiah(price);

document
.getElementById("paymentPage")
.classList
.remove("hidden");

window.scrollTo({

top:
document.getElementById("paymentPage").offsetTop,

behavior:"smooth"

});

if(selectedType=="gamepass"){

document
.getElementById("gamepassInfo")
.classList
.add("hidden");

}else{

document
.getElementById("gamepassInfo")
.classList
.add("hidden");

}

});

document
.getElementById("uploadBtn")
.addEventListener("click",()=>{

const file =
document.getElementById("proof").files[0];

if(!file){

alert("Upload bukti pembayaran dahulu.");

return;

}

alert("✅ Bukti pembayaran berhasil dikirim.\n\nStatus : Pending Verifikasi");

if(selectedType=="gamepass"){

document
.getElementById("gamepassInfo")
.classList
.remove("hidden");

}

});
