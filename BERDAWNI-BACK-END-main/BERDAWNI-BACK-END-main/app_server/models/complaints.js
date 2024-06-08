import mongoose from 'mongoose'

const ComplaintsSchema = mongoose.Schema({
    fullName: String,
    emailAddress: String,
    phoneNumber: String,
    address: String,
    message: String,
    date: {
        type: Date,
        default: new Date()
    },
    isViewed: Boolean
})

const Complaints = mongoose.model('Complaints', ComplaintsSchema);

export default Complaints;