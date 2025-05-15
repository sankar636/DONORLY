import mongoose from "mongoose";
import { Schema } from "mongoose";

const donorSchema = new Schema({
    fullname: {
        firstname:{
            type: String,
            required: true,
        },
        lastname: {
            type: String,
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    contactNo: {
        type: Number,
        required: true
    },
    socketId: {
        type: String
    },
    profilePicture: {
        type: String
    }
})

const Donor = mongoose.model("Donor",donorSchema);

export default Donor