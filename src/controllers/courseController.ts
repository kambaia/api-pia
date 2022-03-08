import { Request, Response } from "express";
import { IGroup } from "../interfaces/InicializeConfigInstitutionInterface";
import Class from "../Models/Class";
import Course from "../Models/Course";
class CourseController {
  public async listAllCourse(_req:Request, res: Response): Promise<Response> {
    try {
      const courseResult: IGroup[] = await Course.find({}).populate(
        "schoolId",
        "schoolLogo schoolName "
      );
      return res.status(200).send(courseResult);
    } catch (error) {
      return res.status(404).json("Nenhuma classe foi encontrada");
    }
  }
  public async listOneCourse(req: Request, res: Response): Promise<Response> {
    const { courseId } = req.params;
    try {
      const courseResult = await Class.find({ _id: courseId }).populate("schoolId", "schoolLogo schoolName ");
      return res.status(200).send(courseResult);
    } catch (error) {
      return res.status(404).json("Nenhuma turma cadastrado");
    }
  }
  public async saveCourse(req: Request, res: Response): Promise<Response> {
    try {
      let courseResult = await Course.find({ course: req.body.course });
      if (courseResult.length > 0) {
        return res.status(409).json({
          message: "Curso já existe. Adicione outro que ainda não exista",
        });
      }
      const regCourse = await Course.create(req.body);
      return res
        .status(201)
        .json({ message: "Cadastro feito  com sucesso", regCourse });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Orrou um error ao cadastrar a curso" });
    }
  }
  public async updateCourso(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
	  const {courseId} = req.params;
      const courseResult = await Course.findByIdAndUpdate(
        { _id: courseId },
        { $set: data },
        { new: false }
      );
      return res.status(200).json({
        message: "As suas informações foram actualizadas com sucesso",
        courseResult,
      });
    } catch (error) {
      return res
        .status(200)
        .json({ message: "Aconteceu um erro ao atualizada", error });
    }
  }
  public async deleteCourse(req: Request, res: Response): Promise<Response> {
    try {
      const {courseId} = req.params;
      const courseResult = await Course.findByIdAndDelete(courseId);
      if (courseResult) {
        return res.status(204).send("Deletado com sucesso");
      }
      return res.status(404).send(courseResult);
    } catch (error) {
      return res.status(404).send({message: "Aconteceu um erro ao atualizada", error});
    }
  }
}

export default new CourseController();
