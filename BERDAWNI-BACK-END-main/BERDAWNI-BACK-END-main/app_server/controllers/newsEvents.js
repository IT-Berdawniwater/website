import cloudinary from "../middleware/cloudinary.js";
import NewsEvents from "../models/newsEvents.js"

export const allnews = async (req, res) => {
    try {
        const prods = await NewsEvents.find();
        res.json({ result: true, body: prods });
    } catch (e) {
        res.json({ result: false });
    }
}

export const oneNews = async (req, res) => {
    try {
        const prod = await NewsEvents.findById(req.params.id);
        res.json({ result: true, body: prod });
    } catch (e) {
        res.json({ result: false });
    }
}

export const addNews = async (req, res) => {
    try {
        const prod = await NewsEvents.create(req.body);
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
                    folder: 'NewsEvents',
                    public_id: req.params.name
                },
                async function (error, result) {
                    image = await result.secure_url;
                });
            const prod = await NewsEvents.updateOne(
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
                    folder: 'NewsEvents',
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

export const updateNewsImages = async (req, res) => {
    try {
        const prod = await NewsEvents.updateOne(
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

export const updateNews = async (req, res) => {
    try {
        const prod = await NewsEvents.updateOne(
            { _id: req.params.id },
            {
                $set:
                {
                    name: req.body.name,
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

export const deleteNews = async (req, res) => {
    try {
        const desc = await NewsEvents.remove({ _id: req.params.id });
        res.json({ result: true, body: desc });
    } catch (e) {
        res.json({ result: false });
    }
}