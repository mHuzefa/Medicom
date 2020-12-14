import mongoose, { mongo } from 'mongoose'
const paySchema = mongoose.Schema(
    {
        user: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }],
        method: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        accountNo: {
            type: Number,
            required: true,
        },
        dateOfExpiration: {
            type: Date,
            required: true,
        },
        cvc: {
            type: Number,
            required: true,
        },
    },
    { timestamp: true }
)

const Payment = mongoose.model("Payment", paySchema)
export default Payment