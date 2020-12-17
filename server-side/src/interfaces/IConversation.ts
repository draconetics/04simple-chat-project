import {Document} from 'mongoose'
export interface IConversation extends Document{
    messages?:{userId:any,message:string,image?:string}[]
}
