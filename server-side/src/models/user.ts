import mongoose, { Schema } from 'mongoose';
import {IUser} from '../interfaces/IUser'
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    socket:{
        type:String
    },    
    organization:{
        type:String
    },
    channel:{ type: Schema.Types.ObjectId, ref: 'Channel' }
}, {  timestamps: true })


export = mongoose.model<IUser>('User', userSchema)