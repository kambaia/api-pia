"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleRouter = void 0;
var express_1 = require("express");
var RolesControllers_1 = __importDefault(require("../controllers/RolesControllers"));
exports.roleRouter = (0, express_1.Router)();
exports.roleRouter.get('/api/roles', RolesControllers_1.default.listRoles);
exports.roleRouter.post('/api/roles', RolesControllers_1.default.saveRoles);
