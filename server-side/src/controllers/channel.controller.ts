import Channel from '../models/channel'
import User from '../models/user';
//import User from '../models/user'

/* export const createChannelAndUser = async(name:string, organization:string,
                                        channelName:string)=>{
    const channel = new Channel({name:channelName})
    await channel.save(function(error){
        if(error)console.log("error saving channel");
        const user = new User({name,organization})
        if(user.channels)
            user.channels.push(channel._id)
        user.save(function (error){
            if(error)console.log("error saving user ")
        });
    });
    return channel;
} */

export const createChannel = async(channel:string)=>{
    
    let existChanel = await Channel.find({ name: channel });
    if(existChanel.length === 0){
        let newChannel = new Channel({name:channel});
        await newChannel.save(function(error){
          if(error)console.log(error);
          console.log("channel created")
        })
        return newChannel;
    }else{
        return existChanel[0];
    }
}


