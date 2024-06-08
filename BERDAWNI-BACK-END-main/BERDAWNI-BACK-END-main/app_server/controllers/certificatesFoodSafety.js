import cloudinary from "../middleware/cloudinary.js";
import CertificateFoodSafety from "../models/certificatesFoodSafety.js"

export const allCert = async (req, res) => {
    try {
        const prods = await CertificateFoodSafety.find();
        res.json({ result: true, body: prods });
    } catch (e) {
        res.json({ result: false });
    }
}

export const oneCert = async (req, res) => {
    try {
        const prod = await CertificateFoodSafety.findById(req.params.id);
        res.json({ result: true, body: prod });
    } catch (e) {
        res.json({ result: false });
    }
}

export const addCert = async (req, res) => {
    try {
        const prod = await CertificateFoodSafety.create(req.body);
        res.json({ result: true, body: prod });
    } catch (e) {
        res.json({ result: false });
    }
}

export const addImage = async (req, res) => {
    try {
        if (req.params.type == 0) {
            let image = '';
            await cloudinary.v2.uploader.upload(req.file.path,
                {
                    resource_type: "raw",
                    folder: 'CertificateFoodSafety',
                    public_id: req.params.name
                },
                async function (error, result) {
                    image = await result.secure_url;
                });
            const prod = await CertificateFoodSafety.updateOne(
                { _id: req.params.id },
                {
                    $set:
                    {
                        image: image
                    }
                }
            );
            res.json({ result: true, body: image });
        } else {
            let image = '';
            await cloudinary.v2.uploader.upload(req.file.path,
                {
                    resource_type: "raw",
                    folder: 'CertificateFoodSafety',
                    public_id: req.params.name
                },
                async function (error, result) {
                    image = await result.secure_url;
                });
            const prod = await CertificateFoodSafety.updateOne(
                { _id: req.params.id },
                {
                    $set:
                    {
                        certificatesFoodSafetyImage: image
                    }
                }
            );
            res.json({ result: true, body: image });
        }
    } catch (e) {
        res.json({ result: false });
    }
}

export const updateCert = async (req, res) => {
    try {
        const prod = await CertificateFoodSafety.updateOne(
            { _id: req.params.id },
            {
                $set:
                {
                    description: req.body.description,
                    date: req.body.date,
                }
            }
        );
        res.json({ result: true });
    } catch (e) {
        res.json({ result: false });
    }
}

export const deleteCert = async (req, res) => {
    try {
        const desc = await CertificateFoodSafety.remove({ _id: req.params.id });
        res.json({ result: true, body: desc });
    } catch (e) {
        res.json({ result: false });
    }
}