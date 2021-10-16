import { Request, Response } from 'express'
import User from '../Models/User';
class UserController{
	public async listAllUser(req:Request, res:Response): Promise<Response>{
		 const users = await User.find();
		 return res.send(users);
	}
	public async saveUser(req:Request, res:Response): Promise<Response>{
		const user = await User.create(req.body);
		return res.send(user);
   }

}


export default new UserController();