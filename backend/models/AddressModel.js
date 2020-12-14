import mongoose from 'mongoose'
const addressSchema = mongoose.Schema(
    {
        street: {
            type: String,
            required: true,
        },
        addressLine2: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        zipCode: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

const Address = mongoose.model('Address', addressSchema)
export default Address