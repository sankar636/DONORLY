import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const  benificiarySchema = new Schema({
    fullname: {
        firstname:{
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true
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
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    benificiaryType: {
        type: String,
        enum: ['medical','education','disaster','orphan','physicalDefect','other'],
        default: 'other'
    },
    customTypeDetail: {
        type: String, // only required when beneficiaryType is 'other'
    },
    pictures: {
        type: [String],  // validate it at the router for 1 to 5 image of the benificiary
        required: true
    },
    socketId: {
        type: String  // this is for communication between donor and benificiary
    },
    amountReceived: {
        type: Number
    }
})

const Benificiary = mongoose.model('Benificiary',benificiarySchema);

export default Benificiary