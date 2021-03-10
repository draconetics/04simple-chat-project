import {  chatDatabaseInstance as database } from './operations.controller';

module.exports = function(io:any){
    io.on('connect', (socket:any) => {
        socket.on('join', async(data:any, callback:Function) => {
        
            if(data){
                const {user, channel} = data;
                
                database.addUser({username:user.username, organization: user.organization, channel});
                database.addChannel(channel);

                console.log('creating channel');
                console.log(channel);
                socket.join(channel);
                console.log('loading messages')
                io.to(channel).emit('loadMessages', database.getMessagesByChannel(channel));
                console.log('emit message');
                socket.emit('message', { username: 'admin', message: `${user.username}, welcome to room ${channel}.`});
                socket.broadcast.to(channel).emit('message', { username: 'admin', message: `${user.username} has joined!` });    

                io.to(data.channel).emit('onlineUsers', { users: database.userTable });
            }

            callback();
        });

       
        socket.on('sendMessage', async(data:any, callback:Function) => {
            const { message, channel, username} = data;
            database.addMessage({message, channel, username});
            io.to(channel).emit('message', { username,message });            
            callback();
        });

        socket.on('close', async (username:string) => {

            const searchedUser = database.findUser(username)
            if(searchedUser){
                io.to(searchedUser.channel).emit('message', { username: 'Admin', message: `${searchedUser.username} has left.` });
                database.deleteUser(searchedUser.username);
                io.to(searchedUser.channel).emit('onlineUsers', { users: database.userTable });
            }
            console.log(socket.disconnected);
            socket.disconnect();
            console.log(socket.disconnected);
        })

        socket.on('disconnect', async(username='') => {
            console.log('executing disconnect');
            
        })//end socket.on(disconnect)

      });

}

  
  