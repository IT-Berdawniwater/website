import Product from "../models/product.js";
import cloudinary from "../middleware/cloudinary.js";

export const allproducts = async (req, res) => {
    try {
        const prods = await Product.find();
        res.json({ result: true, body: prods });
    } catch (e) {
        res.json({ result: false });
    }
}

export const oneprod = async (req, res) => {
    try {
        const prod = await Product.findById(req.params.id);
        res.json({ result: true, body: prod });
    } catch (e) {
        res.json({ result: false });
    }
}

export const addProd = async (req, res) => {
    try {
        const prod = await Product.create(req.body);
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
                    folder: 'Products',
                    public_id: req.params.name
                },
                async function (error, result) {
                    image = await result.secure_url;
                });
            const prod = await Product.updateOne(
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
                    folder: 'Products',
                    public_id: req.params.name
                },
                async function (error, result) {
                    image = await result.secure_url;
                });
            res.json({ result: true, body: image });
        }
    } catch (e) {
        res.json({ result: false });
    }
}

export const updateProdImages = async (req, res) => {
    try {
        const prod = await Product.updateOne(
            { _id: req.params.id },
            {
                $set:
                {
                    images: req.body.images
                }
            }
        );
        res.json({ result: true });
    } catch (e) {
        res.json({ result: false });
    }
}

export const updateProd = async (req, res) => {
    try {
        const prod = await Product.updateOne(
            { _id: req.params.id },
            {
                $set:
                {
                    units: req.body.units,
                    name: req.body.name,
                    license: req.body.license,
                    license1: req.body.license1,
                    composite: req.body.composite,
                    ca: req.body.ca,
                    mg: req.body.mg,
                    na: req.body.na,
                    k: req.body.k,
                    fe: req.body.fe,
                    fl: req.body.fl,
                    hco: req.body.hco,
                    no: req.body.no,
                    ni: req.body.ni,
                    so: req.body.so,
                    cl: req.body.cl,
                    total: req.body.total,
                    ph: req.body.ph,
                    fb: req.body.fb,
                    twitter: req.body.twitter,
                    whatsapp: req.body.whatsapp,
                }
            }
        );
        res.json({ result: true });
    } catch (e) {
        res.json({ result: false });
    }
}

export const deleteProd = async (req, res) => {
    try {
        const desc = await Product.remove({ _id: req.params.id });
        res.json({ result: true, body: desc });
    } catch (e) {
        res.json({ result: false });
    }
}
