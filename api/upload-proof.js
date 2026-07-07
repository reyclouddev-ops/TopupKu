import formidable from "formidable";
import cloudinary from "../lib/cloudinary.js";

export const config = {
  api: {
    bodyParser: false,
  },
};

function parseForm(req) {
  return new Promise((resolve, reject) => {

    const form = formidable({
      multiples: false,
      keepExtensions: true,
    });

    form.parse(req, (err, fields, files) => {

      if (err) {
        reject(err);
        return;
      }

      resolve({
        fields,
        files,
      });

    });

  });
}

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
    });
  }

  try {

    const { fields, files } = await parseForm(req);

    const proof = files.proof;

    if (!proof) {
      return res.status(400).json({
        success: false,
        message: "Bukti pembayaran belum dipilih."
      });
    }

    const upload = await cloudinary.uploader.upload(
      proof.filepath,
      {
        folder: "ReyCloudDev/PaymentProof",
      }
    );

    return res.status(200).json({

      success: true,

      image: upload.secure_url,

      publicId: upload.public_id,

      invoice: fields.invoice,

      username: fields.username,

      email: fields.email,

      product: fields.product,

      price: fields.price,

      type: fields.type

    });

  } catch (err) {

    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message
    });

  }

}
