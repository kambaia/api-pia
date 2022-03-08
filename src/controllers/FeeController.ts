import { Request, Response } from "express";
import { IFee } from "../interfaces/InicializeConfigInstitutionInterface";
import Fee from "../Models/Fee";
class FeeController {
  public async listAllFee(_req: Request, res: Response): Promise<Response> {
    try {
      const feeResult: IFee[] = await Fee.find();
      return res.status(200).send(feeResult);
    } catch (error) {
      return res.status(404).json("Nenhum tipo de propina foi encontrada");
    }
  }
  public async listOneFee(req: Request, res: Response): Promise<Response> {
    const { feeId } = req.params;
    try {
      const feeResult = await Fee.find({ _id: feeId });
      return res.status(200).send(feeResult);
    } catch (error) {
      return res.status(404).json("Nenhuma turma cadastrado");
    }
  }
  public async saveFee(req: Request, res: Response): Promise<Response> {
    try {
      let courseResult = await Fee.find({ fee: req.body.fee });
      if (courseResult.length > 0) {
        return res.status(409).json({
          message:
            "Esté valor de propina já existe. Adicione outro que ainda não exista",
        });
      }
      const feeResult = await Fee.create(req.body);
      return res
        .status(201)
        .json({ message: "Cadastro feito  com sucesso", feeResult });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Orrou um error ao cadastrar a turma" });
    }
  }
  public async updateFee(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const { feeId } = req.params;
      const feeResult = await Fee.findByIdAndUpdate(
        { _id: feeId },
        { $set: data },
        { new: false }
      );
      return res
        .status(200)
        .json({
          message: "As suas informações foram actualizadas com sucesso",
          feeResult,
        });
    } catch (error) {
      return res
        .status(200)
        .json({ message: "Aconteceu um erro ao atualizada", error });
    }
  }
  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { feeId } = req.params;
      const feeResult = await Fee.findByIdAndDelete(feeId);
      if (feeResult) {
        return res.status(204).send("Deletado com sucesso");
      }
      return res.status(404).send(feeResult);
    } catch (error) {
      return res.status(404).send(error);
    }
  }
}

export default new FeeController();
