import mongoose from 'mongoose'
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        formulation: {
            type: Array,
            required: true,
        },
        manufacturer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Company',
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        countInStock: {
            type: Number,
            required: true,
            default: 0,
        },
        reviews: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reviews',
        }],
    },
    { timestamps: true }

)

const Product = mongoose.model('Product', productSchema)
export default Product