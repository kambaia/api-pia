import { Request, Response } from 'express'
import { IUser } from '../interfaces/UserInterface';
import User from '../Models/User';
class UserController {
	public async listAllUser(req: Request, res: Response): Promise<Response> {
		const { userId } = req.query;
		try {
			if (userId) {
				const users = await User.findById(userId).populate('roles', '_id role type livel');
				return res.status(200).send(users);
			}else{
				const users: IUser[] = await User.find().populate('roles', '_id role type livel');
				return res.status(200).send(users);
			}
		} catch (error) {
			return res.status(404).send(error);
		}
	}
	public async listUser(req: Request, res: Response): Promise<Response> {
		const { userId } = req.params;
		try {
			const users = await User.findById(userId).populate('roles', '_id role type livel');
				return res.status(200).send(users);
		} catch (error) {
			return res.status(404).json({ message: "Nenhum usuário cadastrado" });
		}

	}
	public async saveUser(req: Request, res: Response): Promise<Response> {
		try {
			const user = await User.create(req.body);
			return res.status(200).json({ message: "Cadastro feito  com sucesso", user });
		} catch (error) {
			return res.status(500).json({ message: "Orrou um error ao cadastrar o usuário" });
		}
	}
	public async updateUser(req: Request, res: Response): Promise<Response> {
		try {
			const data = req.body;

			const { userId } = req.params;
			console.log(userId);

			const user = await User.updateOne({ _id: userId }, { $set: data }, { new: false });
			console.log(user);
			return res.status(200).json({ message: "As suas informações foram actualizadas com sucesso", user });
		} catch (error) {
			return res.status(200).json({ message: "Aconteceu um erro ao atualizada", error });
		}
	}
	public async deleteUser(req: Request, res: Response): Promise<Response> {
		try {
			const id = req.params.id;
			const user = await User.findByIdAndDelete(id);
			console.log(user)
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