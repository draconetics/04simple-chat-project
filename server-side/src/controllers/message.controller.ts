import { IChannel } from '../interfaces/IChannel';
import Channel from '../models/channel'
import Message from "../models/message";

export const createMessage = async(content:string, channel:string, username:string)=>{
    let channelFound:any = await Channel.find({name:channel})
    if(channelFound.length == 0)
        throw new Error("channel not found");
    channelFound = channelFound[0];
    let message = new Message({content,channel:channelFound._id,user:username})
    return await message.save(function(error){
        if(error)console.log("error saving a message")
        console.log(message);
    })
    
}
