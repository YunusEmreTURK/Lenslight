import mongoose from "mongoose"

const { Schema } = mongoose

const photoSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true // fotoğrafın tanımı girilirken başta ve sondaki boşlukları siler
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
});

const Photo = mongoose.model("Photo", photoSchema)

export default Photo