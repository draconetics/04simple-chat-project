import { IChannel } from '../interfaces/IChannel';
import Channel from '../models/channel'
import Message from "../models/message";
import User from '../models/user';

export const createMessage = async(content:string, channelName:string, username:string)=>{
    const channel = await Channel.findOne({name:channelName});
    const user = await User.findOne({username:username});
    if(channel && user){
        let message = new Message({content,channel,user});
        return await message.save(function(error){
            if(error)console.log("error saving a message")
            console.log("message saved")
            console.log(message);
        })
    }
}
