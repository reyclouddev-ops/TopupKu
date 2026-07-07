import { Resend } from "resend";
import { connectDB } from "../lib/mongodb.js";

const resend = new Resend(process.env.RESEND_API_KEY);

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            success: false
        });
    }

    try {

        const {
            invoice,
            username,
            email,
            product,
            price,
            status
        } = req.body;

        // ==========================
        // EMAIL KE USER
        // ==========================

        const db = await connectDB();

await db.collection("orders").updateOne(

{

invoice

},

{

$set:{

status,

updatedAt:new Date()

}

}

);

        await resend.emails.send({

            from: "ReyCloudDev <onboarding@resend.dev>",

            to: email,

            subject: `Status Pesanan ${invoice}`,

            html: `
            <h2>TopUpKu</h2>

            <p>Halo <b>${username}</b></p>

            <p>Status pesanan kamu sekarang:</p>

            <h1>${status}</h1>

            <hr>

            <p>Invoice : ${invoice}</p>

            <p>Produk : ${product}</p>

            <p>Total : Rp${Number(price).toLocaleString("id-ID")}</p>

            <br>

            <p>Terima kasih telah menggunakan ReyCloudDev.</p>
            `

        });

        // ==========================
        // TELEGRAM OWNER
        // ==========================

        await fetch(

            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,

            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    chat_id: CHAT_ID,

                    text:
`📢 STATUS ORDER

🧾 ${invoice}

👤 ${username}

📦 ${product}

💰 Rp${Number(price).toLocaleString("id-ID")}

✅ Status:
${status}`

                })

            }

        );

        // ==========================
        // NANTI:
        // UPDATE DATABASE
        // ==========================

        return res.status(200).json({

            success: true,

            message: "Status berhasil diperbarui."

        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({

            success: false,

            message: err.message

        });

    }

}
