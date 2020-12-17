import mongoose, { Schema } from 'mongoose';
import {IMessage} from '../interfaces/IMessage'
const messageSchema = new mongoose.Schema({
    content:String,
    user:String,
    channel:{ type: Schema.Types.ObjectId, ref: 'Channel' }
}, {  timestamps: true })

export = mongoose.model<IMessage>('Message', messageSchema)