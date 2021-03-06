import { IUser } from '../interfaces/IUser';
import channel from '../models/channel';
import User from '../models/user'
/*export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
  
    try{
        let newUser:IUser = new User(req.body);
        await newUser.save();
        res.status(201).json({status:201,message:"success",data:newUser});
    }catch(e){
        //next(new HttpException(e.status,e.message));
    } 
    
  }; */



export const createUser = 
    async(username:string, organization:string,socket:string,channel:any)=>{
    

      let existUser = await User.find({ username: username });
      if(existUser.length === 0){
          let newUser = new User({username,socket,organization,channel});
          await newUser.save(function(error){
            if(error)console.log(error);
            console.log("user created")
          })
          return newUser;
      }else{
          const user = existUser[0];
          User.findOneAndUpdate({_id:user._id}, {socket:socket},{upsert:true}, function (err:Error, result:IUser){
            if(err) throw err;
            console.log('user exist change socket');
            console.log(result);
            return result;
          });
      }
}

export const getOnlineUsers = async()=>{
  let usersList = await User.find({ "socket": {"$exists" : true, "$ne" : ""} }).exec();       

  return usersList;
}

export const logoutUser = async(username:string)=>{   
  try {
      console.log('searching');
      console.log(username);
      return await User.findOneAndUpdate({username:username},{socket:""});
  } catch (error) {
      console.log(error);
  }
}

export const getChannelOfUser = async(user:IUser)=>{
  try {
    return await channel.findById(user.channel);
  } catch (error) {
      console.log(error);
  } 
}

export const getUsers = async()=>{
  let usersList = await User.find({});       

  return usersList;
}

/* 
export const removeUser = async(socketId:string)=>{
  try {
      await User.findOneAndUpdate({socket:socketId},{socket:""});
  } catch (error) {
      console.log(error);
  }
     
} */
