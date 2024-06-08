import Complaints from "../models/complaints.js"

export const allComplaints = async (req, res) => {
    try {
        const comp = await Complaints.find();
        res.json({ result: true, body: comp });
    } catch (e) {
        res.json({ result: false });
    }
}

export const addComplaints = async (req, res) => {
    try {
        const comp = await Complaints.create(req.body);
        res.json({ result: true, body: comp });
    } catch (e) {
        console.log(e);
        res.json({ result: false });
    }
}

export const viewComplaints = async (req, res) => {
    try {
        const comp = await Complaints.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    isViewed: true
                }
            }
        );
        res.json({ result: true, body: comp });
    } catch (e) {
        console.log(e);
        res.json({ result: false });
    }
}