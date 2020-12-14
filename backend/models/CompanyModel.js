import mongoose, { mongo } from 'mongoose'
const companySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        email: {
            type: email,
            required: true,
        },
        address: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Address",
            required: true,
        },
        products: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: "true",
        }]
    },
    { timestamp: true }
)

const Company = mongoose.model("Company", companySchema)
export default Company