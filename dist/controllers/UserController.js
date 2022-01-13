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
var User_1 = __importDefault(require("../Models/User"));
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.listAllUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var users, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, User_1.default.find().populate('roles', '_id role type livel')];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, res.status(200).send(users)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(404).json("Nenhum usuário cadastrado")];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.listUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, users, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.params.userId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, User_1.default.findById(userId).populate('roles', '_id role type livel')];
                    case 2:
                        users = _a.sent();
                        return [2 /*return*/, res.status(200).send(users)];
                    case 3:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(404).json("Nenhum usuário cadastrado")];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.saveUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, User_1.default.create(req.body)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "Cadastro feito  com sucesso", user: user })];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ message: "Orrou um error ao cadastrar o usuário" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.updateUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, userId, user, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = req.body;
                        userId = req.params.userId;
                        console.log(userId);
                        return [4 /*yield*/, User_1.default.updateOne({ _id: userId }, { $set: data }, { new: false })];
                    case 1:
                        user = _a.sent();
                        console.log(user);
                        return [2 /*return*/, res.status(200).json({ message: "As suas informações foram actualizadas com sucesso", user: user })];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "Aconteceu um erro ao atualizada", error: error_4 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.deleteUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, User_1.default.findByIdAndDelete(id)];
                    case 1:
                        user = _a.sent();
                        console.log(user);
                        if (user) {
                            return [2 /*return*/, res.status(204).send("Deletado com sucesso")];
                        }
                        return [2 /*return*/, res.status(404).send(user)];
                    case 2:
                        error_5 = _a.sent();
                        return [2 /*return*/, res.status(404).send(error_5)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.default = new UserController();
