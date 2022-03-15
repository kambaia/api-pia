import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import {User} from '../Models/User';
import { authToke } from '../utils';
import GeneteRefreshToken from '../Provider/GeneteRefreshToken';

class authUsersController {
	public async authinticationShools(req: Request, res: Response): Promise<Response> {
		try {
			const { email, password } = req.body;
			const user = await User.findOne({ email }).select('+password').populate('roles', 'level type role');
			if (!user)
				return res.json({ message: "E-mail ou  palavra pass incorreta" });
			if (!await bcrypt.compare(password, user.password!)) {
				return res.json({ message: "E-mail ou  palavra pass incorreta" });
			} else {
				user.password = undefined;
				const refreshToken = await GeneteRefreshToken.execute(user._id.toString());
				const token = authToke(user._id.toString());
				return res.json({ user, token, refreshToken });
			}
		} catch (error) {
			return res.status(400).json({ message: "Usuário inválido", error: error });
		}
	}

	public async authinticationParents(req: Request, res: Response): Promise<Response> {
		try {
			const { phoneNumber, password, email} = req.body;
			const user = await User.find({
				$or: [{ email: email }, { phoneNumber:phoneNumber }],
			  }).select('+password').populate('roles', 'level type role');
			if (user.length ===0)
				return res.json({ message: "E-mail ou  palavra pass incorreta" });
			if (!await bcrypt.compare(password, user[0].password!))
				return res.json({ message: "E-mail ou  palavra pass incorreta" });
			user[0].password = undefined;
			const id: string = user[0]._id.toString();
			const token = authToke(id);
			return res.json({ user, token });
		} catch (error) {
			return res.status(400).json({ error: "Usuário inválido" });
		}
	}


	public async authinticationStudent(req: Request, res: Response): Promise<Response> {
		try {
			const { studentNumber, password } = req.body;
			const user = await User.findOne({ studentNumber: studentNumber }).select('+password').populate('roles', '_id level role type ');
			
			if (!user)
				return res.json({ message: "E-mail ou  palavra pass incorreta" });
			if (!await bcrypt.compare(password, user.password!))
				return res.json({ message: "E-mail ou  palavra pass incorreta" });
			user.password = undefined;
			const id: string = user._id.toString();
			const token = authToke(id);
			return res.json({ user, token });
		} catch (error) {
			return res.status(401).json({ error: "Usuário inválido" });
		}
	}
}



export default new authUsersController();