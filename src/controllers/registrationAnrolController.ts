import { Request, Response } from 'express'
import { StudentEnrollment } from '../Models/RegistrationAnrol'
class RegistrationAnrolController {
	public async listAllSudentEnrollment(_req: Request, res: Response): Promise<void> {
		try {
			const Enrollmen = await StudentEnrollment.find({})
			.populate("studentId", "studentName studentIdentity firstName lastName studetNumber address")
			.populate("groupId", "goup mix min classId schoolId course")
			.populate("academicYearId", "startYear endYear description -_id");
			res.status(200).send(Enrollmen)
		} catch (error) {
			res.status(404).send(error);
		}
	}

	public async listOneSudentEnrollment(req: Request, res: Response): Promise<void> {
		const { enrollmenId } = req.params
		try {
			const enrollmens = await StudentEnrollment.findById(enrollmenId)
			.populate("studentId", "studentName studentIdentity firstName lastName studetNumber address")
			.populate("groupId", "goup mix min classId schoolId course")
			.populate("academicYearId", "startYear endYear description -_id");
			if (enrollmens) {
				res.status(200).send(enrollmens)
			}
			res.status(404).send({ message: "Usuário não encontrado" });
		} catch (error) {
			res.status(404).send(error)
		}
	}
	public async saveSudentEnrollment(req: Request, res: Response): Promise<void> {
		try {
			const enrollmens = await StudentEnrollment.find({
				$or: [
					{ studetPhoneNumber: req.body.studetPhoneNumber },
					{ studentIdentity: req.body.studentIdentity },
					{ studetNumber: req.body.studetNumber },
				],
			});
			if (enrollmens.length > 0) {
				res
					.status(409)
					.json({ error: 'O estudante já existe. Experimente outro' })
			} else {
				const data = await StudentEnrollment.create(req.body)
				res.status(201).json({ success: 'Cadastro feito  com sucesso', data })
			}
		} catch (e) {
			res.status(500).send({ message: e })
		}
	}
	public async updateSudentEnrollment(req: Request, res: Response): Promise<void> {
		try {
			const data = req.body
			const { enrollmenId } = req.params;
			console.log(enrollmenId);
			const enrollmen = await StudentEnrollment.findByIdAndUpdate(
				{ _id: enrollmenId },
				{ $set: data },
				{ new: false },
			)
			res.status(204).json({
				message: 'As suas informações foram actualizadas com sucesso',
				enrollmen,
			})
		} catch (error) {
			res
				.status(500)
				.json({ message: 'Aconteceu um erro ao atualizada', error })
		}
	}
	public async deleteSudentEnrollment(req: Request, res: Response): Promise<Response> {
		try {
			const { enrollmenId } = req.params;
			const enrollmen = await StudentEnrollment.findByIdAndDelete(enrollmenId);
			if (enrollmen) {
				return res.status(200).send('Deletado com sucesso');
			}
			return res.status(404).send(enrollmen);
		} catch (error) {
			return res.status(404).send(error);
		}
	}
}

export default new RegistrationAnrolController()
