import mongoose, { Schema } from 'mongoose';
import {IUser} from '../interfaces/IUser';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 3
    },
    email: {
        type: String,
        unique: true
    },
    photo: {
        type: String,
        unique: true
    },
    active:{
        type: Boolean,
    },
    organization:{
        type: String
    },
    channels:[
        { type: Schema.Types.ObjectId, ref: 'Channel' }
    ]
}, {  timestamps: true })

export = mongoose.model<IUser>('User', userSchema)
