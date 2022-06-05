import { Request, Response } from "express";
import { Employee } from "../Models/Employee";
class employeeController {
  public async listAllEmployee(_req: Request, res: Response): Promise<void> {
    try {
      const employee =  await Employee.find({}).populate(
        "userId",
        "_id email"
      );
      res.status(200).send(employee);
    } catch (error) {
      res.status(404).send(error);
    }
  }
  public async listAllEmployeeSchool(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { schoolId } = req.params;
      const employees = await Employee.find({ schoolId: schoolId }).populate("userId", "email profile");
      res.status(200).send(employees);
    } catch (error) {
      res.status(404).send(error);
    }
  }
  public async listOneEmployee(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params;
      const employee = await Employee.findOne({ userId: userId }).populate(
        "userId",
        "_id email"
      );
      console.log(employee);
      if (employee) {
        res.status(200).send(employee);
      } else {
        res.status(404).send({ message: "Usuário não encontrado" });
      }
    } catch (error) {
      res.status(404).send(error);
    }
  }
  public async saveEmployee(req: Request, res: Response): Promise<void> {
    try {
      const employees = await Employee.find({
        $or: [{ employeeIdentity: req.body.employeeIdentity }],
      });
      if (employees.length > 0) {
        res
          .status(409)
          .json({
            error: "O funcionário a cadastrar já existe. Experimente outro",
          });
      } else {
        const data = await Employee.create(req.body);
        res.status(201).json({ success: "Cadastro feito  com sucesso", data });
      }
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: e });
    }
  }
  public async updateEmployee(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;
      const { employeesId } = req.params;
      const employee = await Employee.findByIdAndUpdate(
        { _id: employeesId },
        { $set: data },
        { new: false }
      );
      res.status(204).json({
        message: "As suas informações foram actualizadas com sucesso",
        employee,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Aconteceu um erro ao atualizada", error });
    }
  }
  public async deleteEmployee(req: Request, res: Response): Promise<Response> {
    try {
      const { employeeId } = req.params;
      const employee = await Employee.findByIdAndDelete(employeeId);
      if (employee) {
        return res.status(200).send("Deletado com sucesso");
      }
      return res.status(404).send(employee);
    } catch (error) {
      return res.status(404).send(error);
    }
  }
}

export default new employeeController();
