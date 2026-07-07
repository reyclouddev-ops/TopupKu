async function login(){

const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

const response =
await fetch("/api/admin-login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

username,
password

})

});

const result =
await response.json();

if(result.success){

localStorage.setItem(
"adminToken",
result.token
);

window.location.href="dashboard.html";

}else{

document.getElementById("error").innerText=
result.message;

}

}

const demoOrders = [

{

invoice:"RCD-8A12BCDE",

username:"acuyykernzz",

product:"80 Robux",

price:17000,

status:"Pending"

},

{

invoice:"RCD-5ZX71QWE",

username:"Player123",

product:"Police Pass",

price:18000,

status:"Pending"

}

];

const tbody =
document.getElementById("orders");

demoOrders.forEach(order=>{

tbody.innerHTML += `

<tr>

<td>${order.invoice}</td>

<td>${order.username}</td>

<td>${order.product}</td>

<td>Rp${order.price.toLocaleString("id-ID")}</td>

<td id="${order.invoice}">
${order.status}
</td>

<td>

<button
class="btn accept"
onclick="changeStatus('${order.invoice}','Pending Verifikasi')">

Terima

</button>

<button
class="btn process"
onclick="changeStatus('${order.invoice}','Diproses')">

Proses

</button>

<button
class="btn done"
onclick="changeStatus('${order.invoice}','Lunas')">

Lunas

</button>

<button
class="btn reject"
onclick="changeStatus('${order.invoice}','Ditolak')">

Tolak

</button>

</td>

</tr>

`;

});

async function changeStatus(invoice, status){

    document.getElementById(invoice).innerText = status;

    // Nanti ambil data order dari database
    const order = demoOrders.find(x => x.invoice === invoice);

    await fetch("/api/admin-update",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            invoice,

            username:order.username,

            email:"reyclouddev@gmail.com", // nanti dari database

            product:order.product,

            price:order.price,

            status

        })

    });

    alert("Status berhasil diperbarui.");

}

}

function logout(){

localStorage.removeItem("adminToken");

window.location.href="login.html";

}
