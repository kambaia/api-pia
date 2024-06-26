import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import api from './api';
import connectDB from "./db/db";

dotenv.config();

class App {
  public express: express.Application;
  public constructor() {
    this.express = express();
    this.middlewares();
    this.database();
    this.main_routes();
    this.system_router();
  }
  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(
      "/files",
      express.static(path.resolve(__dirname, "tmp", "uploads"))
    );
    this.express.use(express.urlencoded({ extended: false }));
  }
  private database(): void {
    connectDB(process.env.MONGO_SERVER_KEY!);
  }
  private system_router(): void {
    this.express.use('/api/v1', api);
  }

  private main_routes(): void {
    this.express.get("/", (_req, res) => {
      res.send(`
				 <body style="display:flex;justify-content: center;  align-items: center;background-color:black;color:black;text-align:center;padding:30px; font-size:40pt;">
				<h2 style="color:#008bd0;text-align:center;padding:30px; font-size:40pt;">Seja bem-vindo ao sistema de pagamentos instituicional Angola.</h2>
					<p style="color:#fff;text-align:center;padding:20px; font-size:20pt;">A nossa api tem como objectivo ajudar no crescimento do país com base os pagamentos de propínas e de serviços escolares nas universidades, institutos e colegios <a href="/doc">Acessa a nossa documentação</a></p>
				</body>
		`);
    });
  }
}

export default new App().express;
