import mongoose, { mongo } from 'mongoose'
const reviewSchema = mongoose.Schema(
    {
        user: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }],
        Product: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        }],
        comment: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
    },
    { timestamp: true }
)

const Review = mongoose.model("Review", reviewSchema)
export default Review