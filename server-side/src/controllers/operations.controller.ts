export const userTable:any = [];
export const channelTable:any = [];
export const messageTable:any = [];

class chatDatabase {
    userTable:any = [];
    channelTable:string[] = [];
    messageTable:any = [];

    addUser(user:any){
        if(this.findUser(user.username) === null){
            this.userTable.push(user);
        }
    }

    findUser(username:string){
        const userList = this.userTable.filter((item:any)=>item.username === username);
        if(userList.length > 0){
            return userList[0];
        }
        return null;
    }

    deleteUser(username:string){
        this.userTable = this.userTable.filter((item:any)=>item.username!==username);
    }

    addChannel(channel:string){
        if(this.findChannel(channel) === null){
            this.channelTable.push(channel);
        }
    }

    findChannel(channel:string){
        const channelList = this.channelTable.filter((item:string)=>item === channel);
        if(channelList.length > 0){
            return channelList[0]
        }
        return null;
    }

    addMessage(message:any){
        this.messageTable.push(message);
    }

    getMessagesByChannel(channel:string){
        return this.messageTable.filter((item:any)=> item.channel === channel);
    }
}

export const chatDatabaseInstance = new chatDatabase();
