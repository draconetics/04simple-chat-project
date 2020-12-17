import { NextFunction, Response, Request} from 'express'
import { IUser } from '../interfaces/IUser';
import User from '../models/user'
export const createUser = async (
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
    
  };


export const sample = async(
    req: Request,
    res: Response,
    next: NextFunction
)=>{
        return res.status(201).json({status:201,message:"success",data:"this is just a sample!!"});
}

export const addUser = async(name:string, organization:string)=>{
    let user = new User({name,organization})
    await user.save(function(error){
      if(error)console.log(error)
    })
    return user;
}

