import { Request, Response } from 'express'
import {IGroup } from '../interfaces/InicializeConfigInstitutionInterface';
import Class from '../Models/Class';
import Course from '../Models/Course';
class CourseController {
	public async listAll(res: Response): Promise<Response> {
		try {
			const courseResult: IGroup[] = await Course.find();
			return res.status(200).send(courseResult);
		} catch (error) {
			return res.status(404).json("Nenhuma classe foi encontrada");
		}
	}
	public async listOne(req: Request, res: Response): Promise<Response> {
		const { courseId } = req.params;
		try {
			const courseResult = await Class.find({_id: courseId});
			return res.status(200).send(courseResult);
		} catch (error) {
			return res.status(404).json("Nenhuma turma cadastrado");
		}

	}
	public async save(req: Request, res: Response): Promise<Response> {
		try {
			const courseResult = await Course.create(req.body);
			return res.status(200).json({ message: "Cadastro feito  com sucesso", courseResult });
		} catch (error) {
			return res.status(500).json({ message: "Orrou um error ao cadastrar a turma" });
		}
	}
	public async update(req: Request, res: Response): Promise<Response> {
		try {
			const data = req.body;

			const { courseId } = req.params;
			const courseResult = await Course.updateOne({_id: courseId}, {$set: data}, {new:false});
			console.log(courseResult);
			return res.status(200).json({ message: "As suas informações foram actualizadas com sucesso", courseResult });
		} catch (error) {
			return res.status(200).json({ message: "Aconteceu um erro ao atualizada", error });
		}
	}
	public async delete(req: Request, res: Response): Promise<Response> {
		try {
			const id = req.params.id;
			const courseResult = await Course.findByIdAndDelete(id);
		
			if (courseResult) {
				return res.status(204).send("Deletado com sucesso")
			}
			return res.status(404).send(courseResult);
		} catch (error) {
			return res.status(404).send(error);
		}

	}

}

export default new CourseController();