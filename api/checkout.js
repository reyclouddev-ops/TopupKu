export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method tidak diizinkan"
        });
    }

    try {

        const {
            username,
            email,
            product,
            price,
            type
        } = req.body;

        if (!username || !email || !product || !price) {
            return res.status(400).json({
                success: false,
                message: "Data belum lengkap."
            });
        }

        const invoice =
            "RCD-" +
            Math.random()
                .toString(36)
                .substring(2, 10)
                .toUpperCase();

        const order = {

            invoice,

            username,

            email,

            product,

            price,

            type,

            status: "MENUNGGU_PEMBAYARAN",

            createdAt: new Date().toISOString()

        };

        return res.status(200).json({

            success: true,

            message: "Checkout berhasil.",

            order

        });

    } catch (err) {

        return res.status(500).json({

            success: false,

            message: err.message

        });

    }

}
