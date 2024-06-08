import mongoose from 'mongoose'

const CertificateFoodSafetySchema = mongoose.Schema({
    description: String,
    image: String,
    certificatesFoodSafetyImage: String,
})

const CertificateFoodSafety = mongoose.model('CertificateFoodSafety', CertificateFoodSafetySchema);

export default CertificateFoodSafety;