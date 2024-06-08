// JavaScript source code

import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({
    image: String,
    units: String,
    name: String,
    license: String,
    license1: String,
    composite: {
        type: String,
        default: 'Composition (mg/L)'
    },
    ca: String,
    mg: String,
    na: String,
    k: String,
    fe: String,
    fl: String,
    hco: String,
    no: String,
    ni: String,
    so: String,
    cl: String,
    total: String,
    ph: String,
    fb: String,
    twitter: String,
    whatsapp: String,
    images: [String]
})
const Product = mongoose.model('Product', ProductSchema);
export default Product;
