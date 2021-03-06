import mongoose, { Schema } from 'mongoose';
import {IMessage} from '../interfaces/IMessage'
const messageSchema = new mongoose.Schema({
    content:String,
    channel:{ type: Schema.Types.ObjectId, ref: 'Channel' },
    user:{ type: Schema.Types.ObjectId, ref: 'User' }
}, {  timestamps: true })

export = mongoose.model<IMessage>('Message', messageSchema)