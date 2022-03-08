import { Request, Response } from 'express'
import Roles from '../Models/Access_Level';
class UserController {
	public async listRoles(_req: Request, res: Response): Promise<Response> {
		const roles = await Roles.find();
		return res.send(roles);
	}
	public async saveRoles(req: Request, res: Response): Promise<Response> {
		try {
		     const { level,  role } = req.body;
			const resultRole= await Roles.find({level:level,  role: role});
			if(resultRole.length >0){
				return res.status(409).json({ message: "O nivel de acesso já existe" });
			}
			const roles = await Roles.create(req.body);
			return res.send(roles);
		} catch (error) {
			return res.status(200).json({ message: "Aconteceu um erro ao cadastrar", error });
		}
	}

}


export default new UserController();