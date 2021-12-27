import { Request, Response } from 'express'
import {IFee } from '../interfaces/InicializeConfigInstitutionInterface';
import Fee from '../Models/Fee';
class FeeController {
	public async listAll(req: Request, res: Response): Promise<Response> {
		try {
			const feeResult: IFee[] = await Fee.find();
			return res.status(200).send(feeResult);
		} catch (error) {
			return res.status(404).json("Nenhum tipo de propina foi encontrada");
		}
	}
	public async listOne(req: Request, res: Response): Promise<Response> {
		const { feeId } = req.params;
		try {
			const feeResult = await Fee.find({_id: feeId});
			return res.status(200).send(feeResult);
		} catch (error) {
			return res.status(404).json("Nenhuma turma cadastrado");
		}

	}
	public async save(req: Request, res: Response): Promise<Response> {
		try {
			const feeResult = await Fee.create(req.body);
			return res.status(200).json({ message: "Cadastro feito  com sucesso", feeResult });
		} catch (error) {
			return res.status(500).json({ message: "Orrou um error ao cadastrar a turma" });
		}
	}
	public async update(req: Request, res: Response): Promise<Response> {
		try {
			const data = req.body;

			const { feeId } = req.params;
			const feeResult = await Fee.updateOne({_id: feeId}, {$set: data}, {new:false});
			console.log(feeResult);
			return res.status(200).json({ message: "As suas informações foram actualizadas com sucesso", feeResult });
		} catch (error) {
			return res.status(200).json({ message: "Aconteceu um erro ao atualizada", error });
		}
	}
	public async delete(req: Request, res: Response): Promise<Response> {
		try {
			const id = req.params.id;
			const feeResult = await Fee.findByIdAndDelete(id);
		
			if (feeResult) {
				return res.status(204).send("Deletado com sucesso")
			}
			return res.status(404).send(feeResult);
		} catch (error) {
			return res.status(404).send(error);
		}

	}

}

export default new FeeController();