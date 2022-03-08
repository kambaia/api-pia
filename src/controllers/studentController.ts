import { Request, Response } from 'express'
import { Student } from '../Models/Student'
class studentController {
	public async listAllStudent(_req: Request, res: Response): Promise<void> {
		try {
			const student = await Student.find().populate('userId')
				.populate('univercityId')
				.populate('schoolId', )
			res.status(200).send(student)
		} catch (error) {
			res.status(404).send(error);
		}
	}

	public async listOneStudent(req: Request, res: Response): Promise<void> {
		const { userId } = req.params
		try {
			const users = await Student.findById(userId).populate(
				'roles',
				'_id role type livel',
			)
			if (users) {
				res.status(200).send(users)
			}
			res.status(404).send({ message: "Usuário não encontrado" });

		} catch (error) {
			res.status(404).send(error)
		}
	}
	public async saveStudent(req: Request, res: Response): Promise<void> {
		try {
			const student = await Student.find({
				$or: [
					{ studetPhoneNumber: req.body.studetPhoneNumber },
					{ studentIdentity: req.body.studentIdentity },
					{ studetNumber: req.body.studetNumber },
				],
			});
			console.log(student);
			if (student.length > 0) {
				res
					.status(409)
					.json({ error: 'Esse nome de usuário já existe. Experimente outro' })
			} else {
				const data = await Student.create(req.body)
				res.status(201).json({ success: 'Cadastro feito  com sucesso', data })
			}
		} catch (e) {
			res.status(500).send({ message: e })
		}
	}
	public async updateStudent(req: Request, res: Response): Promise<void> {
		try {
			const data = req.body
			console.log(data);
			const { studentId } = req.params
			const student = await Student.findByIdAndUpdate(
				{ _id: studentId },
				{ $set: data },
				{ new: false },
			)
			res.status(204).json({
				message: 'As suas informações foram actualizadas com sucesso',
				student,
			})
		} catch (error) {
			res
				.status(500)
				.json({ message: 'Aconteceu um erro ao atualizada', error })
		}
	}
	public async deleteStudent(req: Request, res: Response): Promise<Response> {
		try {
			const { studentId } = req.params;
			console.log(studentId)
			const student = await Student.findByIdAndDelete(studentId);
			if (student) {
				return res.status(200).send('Deletado com sucesso');
			}
			return res.status(404).send(student);
		} catch (error) {
			return res.status(404).send(error);
		}
	}
}

export default new studentController()
