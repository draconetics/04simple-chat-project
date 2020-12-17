import {Document} from 'mongoose'
export interface IUser extends Document{
    name:string,
    email?:string,
    photo?:string,
    active?:boolean,
    organization?:string,    
    channels?:{type:any,ref:string}[]
}
