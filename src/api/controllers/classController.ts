import { Request, Response } from "express";
import { Class } from "../Models/Class";
class classController {
  public async listAllClasses(_req: Request, res: Response): Promise<void> {
    try {
      const classResult = await Class.find({})
      .populate("feeId", "fee")
      .populate("schoolId", "schoolLogo schoolName")

     
       res.status(200).send(classResult);
    } catch (error) {
        res.status(404).json("Nenhuma classe foi encontrada");
    }
  }
  public async listOneClass(req: Request, res: Response): Promise<Response> {
    const { classId } = req.params;
    try {
      const classResult = await Class.findOne({ _id: classId }).populate("schoolId", "schoolLogo schoolName ");
      return res.status(200).send(classResult);
    } catch (error) {
      return res.status(404).json("Nenhum usuário cadastrado");
    }
  }
  public async saveClass(req: Request, res: Response): Promise<Response> {
    try {
      let classResult = await Class.findOne({ className: req.body.className });
      if (classResult) {
        return res
          .status(409)
          .json({
            message: "Classe já existe. Adicione outra que ainda não exista",
          });
      }
      const regClass = await Class.create(req.body);
      return res
        .status(201)
        .json({ message: "Cadastro feito  com sucesso", regClass });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Orrou um error ao cadastrar a classe" });
    }
  }
  public async updateClass(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const { classId } = req.params;
      console.log(classId);

      const classResult = await Class.findByIdAndUpdate(
        { _id: classId },
        { $set: data },
        { new: false }
      );
      return res
        .status(200)
        .json({
          message: "As suas informações foram actualizadas com sucesso",
          classResult,
        });
    } catch (error) {
      return res
        .status(200)
        .json({ message: "Aconteceu um erro ao atualizada", error });
    }
  }
  public async deleteClass(req: Request, res: Response): Promise<Response> {
    try {
      const {classId }= req.params;
      const resultClass = await Class.findByIdAndDelete(classId);

      if (resultClass) {
        return res.status(204).send("Deletado com sucesso");
      }
      return res.status(404).send(resultClass);
    } catch (error) {
      return res.status(404).send(error);
    }
  }
}

export default new classController();
