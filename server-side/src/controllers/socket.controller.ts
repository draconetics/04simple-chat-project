import { createChannel } from "./channel.controller";
import { createMessage } from "./message.controller";

module.exports = function(io:any){

    io.on('connect', (socket:any) => {
        socket.on('join', async(data:any, callback:Function) => {
        
            console.log(data);
            await createChannel(data.channel);
            socket.join(data.channel)

            socket.emit('message', { username: 'admin', message: `${data.user.name}, welcome to room ${data.channel}.`});
            socket.broadcast.to(data.channel).emit('message', { username: 'admin', message: `${data.user.name} has joined!` });
      
            //io.to(data.channel).emit('roomData', { room: data.channel, users: getUsersInRoom(user.room) });

            callback();
        });


        
        socket.on('sendMessage', async(data:any, callback:Function) => {
            await createMessage(data.message,data.channel,data.username)
                .then(()=>{
                    io.to(data.channel).emit('message', { username:data.username,message:data.message });            
                })
                .catch((error)=>{
                    console.log(error)
                });            
            callback();
        });

      });

}

  
  