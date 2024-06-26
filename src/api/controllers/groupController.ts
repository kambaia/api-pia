import { Request, Response } from "express";
import { IGroup } from "../../interfaces/InicializeConfigInstitutionInterface";
import Group from "../Models/Group";
class GroupController {
  public async listAllGroups(_req: Request, res: Response): Promise<Response> {
    try {
      const groupResult: IGroup[] = await Group.find({})
        .populate("schoolId", "schoolLogo schoolName ")
        .populate("classId", "className")
        .populate("feeId", "fee")
        .populate("course", "course")
        .populate("disciplines", "discipline");

      return res.status(200).send(groupResult);
    } catch (error) {
      return res.status(404).json("Nenhuma turma foi encontrada");
    }
  }
  public async listOneGroup(req: Request, res: Response): Promise<Response> {
    const { groupId } = req.params;
	console.log(groupId);
    try {
      const groupResult = await Group.findOne({ _id: groupId }).populate(
        "schoolId",
        "schoolLogo schoolName "
      );
	  console.log(groupResult);
      return res.status(200).send(groupResult);
    } catch (error) {
      return res.status(404).json("Nenhuma turma cadastrado");
    }
  }
  public async saveGroup(req: Request, res: Response): Promise<Response> {
    try {
      let groupResult = await Group.findOne({ goup: req.body.goup });
      if (groupResult) {
        return res.status(409).json({
          message: "Está turma já existe. Adicione outra que ainda não exista",
        });
      }
      const goupResult = await Group.create(req.body);
      return res
        .status(200)
        .json({ message: "Cadastro feito  com sucesso", goupResult });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Orrou um error ao cadastrar a turma" });
    }
  }
  public async updateGroup(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;

      const { groudId } = req.params;
      const groudResult = await Group.findByIdAndUpdate(
        { _id: groudId },
        { $set: data },
        { new: false }
      );
      return res
        .status(200)
        .json({
          message: "As suas informações foram actualizadas com sucesso",
          groudResult,
        });
    } catch (error) {
      return res
        .status(200)
        .json({ message: "Aconteceu um erro ao atualizada", error });
    }
  }
  public async deleteGroup(req: Request, res: Response): Promise<Response> {
    try {
      const { groudId } = req.params;
      const resultGroup = await Group.findByIdAndDelete(groudId);

      if (resultGroup) {
        return res.status(204).send("Deletado com sucesso");
      }
      return res.status(404).send(resultGroup);
    } catch (error) {
      return res.status(404).send(error);
    }
  }
}

export default new GroupController();
