"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Class_1 = __importDefault(require("../Models/Class"));
var User_1 = __importDefault(require("../Models/User"));
var classController = /** @class */ (function () {
    function classController() {
    }
    classController.prototype.listAllClasses = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var classResult, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Class_1.default.find()];
                    case 1:
                        classResult = _a.sent();
                        return [2 /*return*/, res.status(200).send(classResult)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(404).json("Nenhuma classe foi encontrada")];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    classController.prototype.listClass = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var classId, classResult, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        classId = req.params.classId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Class_1.default.find({ _id: classId })];
                    case 2:
                        classResult = _a.sent();
                        return [2 /*return*/, res.status(200).send(classResult)];
                    case 3:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(404).json("Nenhum usuário cadastrado")];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    classController.prototype.save = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var classResult, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Class_1.default.create(req.body)];
                    case 1:
                        classResult = _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "Cadastro feito  com sucesso", classResult: classResult })];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ message: "Orrou um error ao cadastrar a classe" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    classController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, classId, classResult, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = req.body;
                        classId = req.params.classId;
                        console.log(classId);
                        return [4 /*yield*/, Class_1.default.updateOne({ _id: classId }, { $set: data }, { new: false })];
                    case 1:
                        classResult = _a.sent();
                        console.log(classResult);
                        return [2 /*return*/, res.status(200).json({ message: "As suas informações foram actualizadas com sucesso", classResult: classResult })];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "Aconteceu um erro ao atualizada", error: error_4 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    classController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, resultClass, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, User_1.default.findByIdAndDelete(id)];
                    case 1:
                        resultClass = _a.sent();
                        if (resultClass) {
                            return [2 /*return*/, res.status(204).send("Deletado com sucesso")];
                        }
                        return [2 /*return*/, res.status(404).send(resultClass)];
                    case 2:
                        error_5 = _a.sent();
                        return [2 /*return*/, res.status(404).send(error_5)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return classController;
}());
exports.default = new classController();
