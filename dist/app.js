"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
var routers_1 = require("./routers");
var group_1 = require("./routers/group");
dotenv_1.default.config();
var db = require('./config/db');
var App = /** @class */ (function () {
    function App() {
        this.express = (0, express_1.default)();
        this.middlewares();
        this.database();
        this.main_routes();
        this.system_router();
    }
    App.prototype.middlewares = function () {
        this.express.use(express_1.default.json());
        this.express.use((0, cors_1.default)());
        this.express.use('/files', express_1.default.static(path_1.default.resolve(__dirname, 'tmp', 'uploads')));
        this.express.use(express_1.default.urlencoded({ extended: false }));
    };
    App.prototype.database = function () {
        db(process.env.MONGO_local_KEY);
    };
    App.prototype.system_router = function () {
        this.express.use(routers_1.userRouter);
        this.express.use(routers_1.roleRouter);
        this.express.use(routers_1.classRouter);
        this.express.use(group_1.groupRouter);
    };
    App.prototype.main_routes = function () {
        this.express.get("/", function (req, res) {
            res.send("\n\t\t\t\t <body style=\"display:flex;justify-content: center;  align-items: center;background-color:black;color:black;text-align:center;padding:30px; font-size:40pt;\">\n\t\t\t\t<h2  style=\"color:#008bd0;text-align:center;padding:30px; font-size:40pt;\">Seja bem-vindo ao sistema de pagamentos instituicional Angola.</h2>\n\t\t\t\t\t<p style=\"color:#fff;text-align:center;padding:20px; font-size:20pt;\">A nossa api tem como objectivo ajudar no crescimento do pa\u00EDs com base os pagamentos de prop\u00EDnas e de servi\u00E7os escolares nas universidades, institutos e colegios <a href=\"/doc\">Acessa a nossa documenta\u00E7\u00E3o</a></p>\n\t\t\t\t</body>\n\t\t");
        });
    };
    return App;
}());
exports.default = new App().express;
