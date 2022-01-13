import { Request, Response } from 'express'
import { Iaccess_level } from '../interfaces/UserInterface';
import Roles from '../Models/Access_Level';
class UserController{
	public async listRoles(res:Response): Promise<Response>{
		 const roles:Iaccess_level[] = await Roles.find();
		 return res.send(roles);
	}
	public async saveRoles(req:Request, res:Response): Promise<Response>{
		const roles = await Roles.create(req.body);
		return res.send(roles);
   }

}


export default new UserController();