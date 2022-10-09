import { Request, Response } from "express";
import {
  IAcademicYear,
} from "../interfaces/InicializeConfigInstitutionInterface";
import { AcademicYear } from "../Models/AcademicYear";
class academicYearController {
  public async listAllAcademicYear(
    _req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const acadmicResult: IAcademicYear[] = await AcademicYear.find(
        {}
      ).populate("schoolId", "schoolLogo schoolName ");
      return res.status(200).send(acadmicResult);
    } catch (error) {
      return res.status(404).json("Nenhum ano letivo foi encontrada");
    }
  }
  public async listOneAcademicYear(
    req: Request,
    res: Response
  ): Promise<Response> {
    const { academicYearId } = req.params;
    try {
      const academicYearResult = await AcademicYear.findOne({
        _id: academicYearId,
      }).populate("schoolId", "schoolLogo schoolName ");
      return res.status(200).send(academicYearResult);
    } catch (error) {
      return res.status(404).json("Nenhuma turma cadastrado");
    }
  }
  public async saveAcademicYear(req: Request, res: Response): Promise<Response> {
    try {

      let academicYearResult = await AcademicYear.findOne({
        description: req.body.description,
      });
      if (academicYearResult) {
        return res.status(409).json({
          message:
            "Este ano letivo já existe. Adicione outro que ainda não exista",
        });
      }
      const saveResult = await AcademicYear.create(req.body);
      return res
        .status(201)
        .json({ message: "Cadastro feito  com sucesso", saveResult });
    } catch (error) {
      console.log(req.body)
      return res
        .status(500)
        .json({ message: "Orrou um error ao cadastrar o ano letivo", error: error});
    }
  }
  public async updateAcademicYear(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const { academicYearId } = req.params;
      const updateResult = await AcademicYear.findByIdAndUpdate(
        { _id: academicYearId },
        { $set: data },
        { new: false }
      );
      return res.status(200).json({
        message: "As suas informações foram actualizadas com sucesso",
        updateResult,
      });
    } catch (error) {
      return res
        .status(200)
        .json({ message: "Aconteceu um erro ao atualizada", error });
    }
  }
  public async deleteAcademicYear(req: Request, res: Response): Promise<Response> {
    try {
      const { academicYearId } = req.params;
      const deleteResult = await AcademicYear.findByIdAndDelete(academicYearId);
      if (deleteResult) {
        return res.status(204).send("Deletado com sucesso");
      } else {
        return res.status(404).send(deleteResult);
      }
    } catch (error) {
      return res.status(404).send(error);
    }
  }
}

export default new academicYearController();
