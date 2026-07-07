const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function sendTelegram(order) {

    const caption = `
🔔 ORDER BARU

🧾 Invoice : ${order.invoice}

👤 Username : ${order.username}

📧 Email : ${order.email}

📦 Produk : ${order.product}

💰 Harga : Rp${Number(order.price).toLocaleString("id-ID")}

📌 Status : Pending Verifikasi
`;

    const form = new FormData();

    form.append("chat_id", CHAT_ID);

    form.append("photo", order.imageUrl);

    form.append("caption", caption);

    const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`,
        {
            method: "POST",
            body: form
        }
    );

    return await response.json();

}
