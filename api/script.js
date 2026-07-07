const formData = new FormData();

formData.append(
    "proof",
    document.getElementById("proof").files[0]
);

formData.append(
    "invoice",
    document.getElementById("invoice").innerText
);

formData.append(
    "username",
    document.getElementById("username").value
);

formData.append(
    "email",
    document.getElementById("email").value
);

formData.append(
    "product",
    document.getElementById("selectedProduct").value
);

formData.append(
    "price",
    document.getElementById("selectedPrice").value
);

formData.append(
    "type",
    selectedType
);

const response = await fetch(
    "/api/upload-proof",
    {
        method: "POST",
        body: formData
    }
);

const result = await response.json();

if(result.success){

    alert("✅ Bukti pembayaran berhasil dikirim!");

}else{

    alert(result.message);

}
