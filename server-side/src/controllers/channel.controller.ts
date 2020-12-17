import Channel from '../models/channel'
import User from '../models/user'

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

export const createChannel = async(channelName:string)=>{
    let existChanel = await Channel.find({ name: channelName });
    if(existChanel.length == 0){
        let channel = new Channel({name:channelName});
        await channel.save(function(error){
          if(error)console.log(error);
          console.log("channel created")
        })
    }
}
