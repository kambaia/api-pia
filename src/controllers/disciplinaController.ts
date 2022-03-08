import { Request, Response } from "express";
import Discipline from "../Models/Discipline";
class DisciplineController {
  public async listAllDiscipline(_req: Request, res: Response): Promise<void> {
    try {
      const disciplineResult = await Discipline.find({}).populate("schoolId", "schoolLogo schoolName ");
       res.status(200).send(disciplineResult);

    } catch (error) {
        res.status(404).json("Nenhuma classe foi encontrada");
    }
  }
  public async listDiscipline(req: Request, res: Response): Promise<Response> {
    const { displinaId } = req.params;
    try {
      const disciplineResult = await Discipline.findOne({ _id: displinaId });
      return res.status(200).send(disciplineResult);
    } catch (error) {
      return res.status(404).json("Nenhum usuário cadastrado");
    }
  }
  public async saveDiscipline(req: Request, res: Response): Promise<Response> {
    try {
      let disciplineResult = await Discipline.find({ discipline: req.body.discipline });
      if (disciplineResult.length > 0) {
        return res
          .status(409)
          .json({
            message: "Está discipline já existe. Adicione outra que ainda não exista",
          });
      }
      const regDiscipline = await Discipline.create(req.body);
      return res
        .status(200)
        .json({ message: "Cadastro feito  com sucesso", regDiscipline });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Orrou um error ao cadastrar a classe" });
    }
  }
  public async updateDiscipline(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      console.log(data)
      const { disciplineId } = req.params;
      console.log(disciplineId);

      const disciplineResult = await Discipline.findByIdAndUpdate(
        { _id: disciplineId },
        { $set: data },
        { new: false }
      );
      return res
        .status(200)
        .json({
          message: "As suas informações foram actualizadas com sucesso",
          disciplineResult,
        });
    } catch (error) {
      return res
        .status(200)
        .json({ message: "Aconteceu um erro ao atualizada", error });
    }
  }
  public async deleteDisciplin(req: Request, res: Response): Promise<Response> {
    try {
      const { disciplineId } = req.params;
      const resultDisciplina = await Discipline.findByIdAndDelete(disciplineId);

      if (resultDisciplina) {
        return res.status(204).send("Deletado com sucesso");
      }
      return res.status(404).send(resultDisciplina);
    } catch (error) {
      return res.status(404).send(error);
    }
  }
}

export default new DisciplineController();
