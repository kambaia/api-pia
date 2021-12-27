"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupRouter = void 0;
var express_1 = require("express");
var GroupController_1 = __importDefault(require("../controllers/GroupController"));
exports.groupRouter = (0, express_1.Router)();
exports.groupRouter.get('/api/group', GroupController_1.default.listAll);
exports.groupRouter.post('/api/group', GroupController_1.default.save);
