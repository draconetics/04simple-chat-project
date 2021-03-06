import {Document} from 'mongoose'
export interface IMessage extends Document{
    content:string,
    user:{type:any,ref:string},
    channel:{type:any,ref:string}
}
