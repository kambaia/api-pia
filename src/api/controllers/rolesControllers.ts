import { Request, Response } from 'express'
import Roles from '../Models/Access_Level';
class UserController {
	public async listRoles(_req: Request, res: Response): Promise<Response> {
		const roles = await Roles.find();
		return res.send(roles);
	}
	public async listRolesSchool(req: Request, res: Response): Promise<Response> {
		const { school } = req.params;
		const roles = await Roles.find({ type: "school" });
		const newRoles = [];
		for (let index in roles) {
			newRoles.push(roles[index].role);
		}
		return res.send(newRoles);
	}
	public async saveRoles(req: Request, res: Response): Promise<Response> {
		try {
			const { level, role } = req.body;
			const resultRole = await Roles.find({ level: level, role: role });
			if (resultRole.length > 0) {
				return res.status(409).json({ message: "O nivel de acesso já existe" });
			}
			const roles = await Roles.create(req.body);
			return res.send(roles);
		} catch (error) {
			return res.status(200).json({ message: "Aconteceu um erro ao cadastrar", error });
		}
	}
	public async updateRoles(req: Request, res: Response): Promise<Response> {
		try {
			const { roleId } = req.params;
			const input = req.body;
			const resultRole = await Roles.findByIdAndUpdate({ _id: roleId },
				{ $set: input },
				{ new: false },);
			if (!resultRole) {
				return res.status(409).json({ message: "O nivel de acesso já existe" });
			}
			return res.send(resultRole);
		} catch (error) {
			return res.status(200).json({ message: "Aconteceu um erro ao cadastrar", error });
		}
	}

}


export default new UserController();