import cloudinary from "../lib/cloudinary.js";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method tidak diizinkan"
    });
  }

  try {

    /*
      Pada langkah berikutnya (Part 5.2C),
      file upload dari form akan dibaca
      menggunakan formidable.

      Setelah didapat path file sementara,
      simpan ke variabel filePath.
    */

    const filePath = req.body.filePath;

    if (!filePath) {
      return res.status(400).json({
        success: false,
        message: "File belum ditemukan."
      });
    }

    const result = await cloudinary.uploader.upload(filePath, {
      folder: "reyclouddev/payment-proof",
      resource_type: "image"
    });

    return res.status(200).json({
      success: true,
      imageUrl: result.secure_url,
      publicId: result.public_id
    });

  } catch (err) {

    return res.status(500).json({
      success: false,
      message: err.message
    });

  }

}
