import { Request, Response } from 'express'
import { IClass } from '../interfaces/InicializeConfigInstitutionInterface';
import Class from '../Models/Class';
import User from '../Models/User';
class classController {
	public async listAllClasses(res: Response): Promise<Response> {
		try {
			const classResult: IClass[] = await Class.find();
			return res.status(200).send(classResult);
		} catch (error) {
			return res.status(404).json("Nenhuma classe foi encontrada");
		}
	}
	public async listClass(req: Request, res: Response): Promise<Response> {
		const { classId } = req.params;
		try {
			const classResult = await Class.find({_id: classId});
			return res.status(200).send(classResult);
		} catch (error) {
			return res.status(404).json("Nenhum usuário cadastrado");
		}

	}
	public async save(req: Request, res: Response): Promise<Response> {
		try {
			const classResult = await Class.create(req.body);
			return res.status(200).json({ message: "Cadastro feito  com sucesso", classResult });
		} catch (error) {
			return res.status(500).json({ message: "Orrou um error ao cadastrar a classe" });
		}
	}
	public async update(req: Request, res: Response): Promise<Response> {
		try {
			const data = req.body;

			const { classId } = req.params;
			console.log(classId);

			const classResult = await Class.updateOne({_id: classId}, {$set: data}, {new:false});
			console.log(classResult);
			return res.status(200).json({ message: "As suas informações foram actualizadas com sucesso", classResult });
		} catch (error) {
			return res.status(200).json({ message: "Aconteceu um erro ao atualizada", error });
		}
	}
	public async delete(req: Request, res: Response): Promise<Response> {
		try {
			const id = req.params.id;
			const resultClass = await User.findByIdAndDelete(id);
		
			if (resultClass) {
				return res.status(204).send("Deletado com sucesso")
			}
			return res.status(404).send(resultClass);
		} catch (error) {
			return res.status(404).send(error);
		}

	}

}


export default new classController();