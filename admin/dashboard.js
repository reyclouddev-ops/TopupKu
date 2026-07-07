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
