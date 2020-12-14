import mongoose from 'mongoose'
const orderSchema = mongoose.Schema (
    {
        user: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }],
        orderItem: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        }],
        shippingAddress: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Address',
            required: true,
        }],
        paymentMethod: {
            type: String,
            required: true,
        },
        payment: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Payment',
            required: true,
        }],
        paymentResults: {
            id: { type: String },
            status: { type: String },
            update_time: { type: String },
            email_address: { type: String },
        },
        taxPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        shippingPrice: {
            type: String,
            required: true,
            default: 0.0,
        },
        totalPrice: {
            type: String,
            required: true,
            default: 0.0,
        },
        isPaid: {
            type: Boolean,
            required: true,
            default: false,
        },
        paidAt: {
            type: Date,
        },
        isDelivered: {
            type: Boolean,
            required: true,
            default: false,
        },
        deliveredAt: {
            type: Date,
        },
    },
    { timestamps: true }
)
const Order = mongoose.model('Order', orderScheme)
export default Order