import { Request, Response } from 'express'
import { IUser } from '../interfaces/UserInterface';
import User from '../Models/User';

class UserController {
	public async listAllUser(req: Request, res: Response): Promise<Response> {
		try {
			const users: IUser[] = await User.find().populate('roles', '_id role type livel');
			return res.status(200).send(users);
		} catch (error) {
			return res.status(404).json("Nenhum usuário cadastrado");
		}
	}
	public async listUser(req: Request, res: Response): Promise<Response> {
		const { userId } = req.params;
		try {
			const users = await User.findById(userId).populate('roles', '_id role type livel');
			return res.status(200).send(users);

		} catch (error) {
			return res.status(404).json("Nenhum usuário cadastrado");
		}
	}
	public async saveUser(req: Request, res: Response): Promise<Response> {
		try {
			const user = await User.findOne({ email: req.body.email, phoneNumber:req.body.phoneNumber}) as IUser;
            if (!user) {	
				console.log(req.body);		  
				const data = await User.create(req.body);
				data.password = undefined;
				return res.status(200).json({ message: "Cadastro feito  com sucesso", data });
            } else {
                return res.status(400).json({ error: "Usuário já está cadastrado" })
            }
		} catch (error) {
			console.log(error);
			return res.status(500).json({ message: "Orrou um error ao cadastrar o usuário" });
		}
	}
	public async updateUser(req: Request, res: Response): Promise<Response> {
		try {
			const data = req.body;
			const { userId } = req.params;
			
			const user = await User.updateOne({ _id: userId }, { $set: data }, { new: false });
			return res.status(200).json({ message: "As suas informações foram actualizadas com sucesso", user });
		
		} catch (error) {
			return res.status(200).json({ message: "Aconteceu um erro ao atualizada", error });
		}
	}
	public async deleteUser(req: Request, res: Response): Promise<Response> {
		try {

			const id = req.params.id;

			const user = await User.findByIdAndDelete(id);
			if (user) {
				return res.status(204).send("Deletado com sucesso")
			}
			return res.status(404).send(user);
		} catch (error) {
			return res.status(404).send(error);
		}

	}

}


export default new UserController();