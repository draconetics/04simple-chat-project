import {Document} from 'mongoose'
export interface IMessage extends Document{
    content:string,
    user:string,
    channel:{type:any,ref:string}
}
