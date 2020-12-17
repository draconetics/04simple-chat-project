import {Document} from 'mongoose'
export interface IChannel extends Document{
    name:string,
    messages?:{type:any,ref:string}[]
}
