import mongoose, { Schema } from 'mongoose';
import {IChannel} from '../interfaces/IChannel'
const channelSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },

}, {  timestamps: true })


export = mongoose.model<IChannel>('Channel', channelSchema)