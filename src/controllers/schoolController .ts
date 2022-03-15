import { Request, Response } from 'express'
import { School } from '../Models/Schoole'
class schoolController {
	public async listAllSchool(_req: Request, res: Response): Promise<void> {
		try {
			const shool = await School.find({}).populate('shoolRepresentative',  "userName email firstName lastName phoneNumber gender active");
			res.status(200).send(shool);
		} catch (error) {
			res.status(404).send(error)
		}
	}
	
	public async listOneSchool(req: Request, res: Response): Promise<void> {
		try {
			const { schoolId } = req.params
			const school = await School.findById(schoolId).populate('shoolRepresentative', "userName email firstName lastName phoneNumber gender active")
			if (school) {
				res.status(200).send(school)
			}else{
				res.status(404).send({ message: "Não foi encontrada nenhuma instituição." });
			}
		} catch (error) {
			res.status(404).send(error)
		}
	}
	
	public async listOneAcesss(req: Request, res: Response): Promise<void> {
		try {
			const { userId } = req.params
			const school = await School.findOne({shoolRepresentative: userId}).populate('shoolRepresentative', "userName email firstName lastName phoneNumber gender active")
			if (school) {
				res.status(200).send(school)
			}else{
				res.status(404).send({ message: "Não foi encontrada nenhuma instituição." });
			}
		} catch (error) {
			res.status(404).send(error)
		}
	}
	public async saveSchool(req: Request, res: Response): Promise<void> {
		try {
			const first = Math.floor(Math.random()*900000) + 100000;
			const send = Math.floor(Math.random()*900000) + 100000;
			let schoolData= req.body;
			schoolData.schoolCode=`2022-${first}.${send}`
			const school = await School.find({
				$or: [{ schoolName: schoolData.schoolName },
				{ schoolIdentity: schoolData.schoolIdentity },
				{ schoolCode: schoolData.schoolCode }
				],
			})
			if (school.length > 0) {
				res
					.status(409)
					.json({ error: 'As informações inseridas não foram cadastrada com sucesso. Porque Já existe uma instituição com as mesmas informaçẽos' })
			} else {
				const data = await School.create(req.body)
				res.status(201).json({ success: 'Cadastro feito  com sucesso', data })
			}
		} catch (e) {
			res.status(500).send({ message: e })
		}
	}
	public async updateSchool(req: Request, res: Response): Promise<void> {
		try {
			const data = req.body
			const { schoolId } = req.params
			const school = await School.findByIdAndUpdate(
				{ _id: schoolId },
				{ $set: data },
				{ new: false },
			)
			res.status(204).json({
				message: 'As suas informações foram actualizadas com sucesso',
				school,
			})
		} catch (error) {
			res
				.status(500)
				.json({ message: 'Aconteceu um erro ao atualizada', error })
		}
	}
	public async deleteSchool(req: Request, res: Response): Promise<Response> {
		try {
			const { schoolId } = req.params;
			const user = await School.findByIdAndDelete(schoolId);
			if (user) {
				return res.status(204).send('Deletado com sucesso')
			}
			return res.status(404).send(user)
		} catch (error) {
			return res.status(404).send(error)
		}
	}
}

export default new schoolController()
