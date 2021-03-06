import {Document} from 'mongoose'
export interface IUser extends Document{
    username:string,
    socket:string,
    organization:string,
    channel:{type:any,ref:string}
}
