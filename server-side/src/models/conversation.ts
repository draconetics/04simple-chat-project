import mongoose, { Schema } from 'mongoose';
import {IConversation} from '../interfaces/IConversation'
const conversationSchema = new mongoose.Schema({
    messages:[]
}, {  timestamps: true })


export = mongoose.model<IConversation>('Conversation', conversationSchema)