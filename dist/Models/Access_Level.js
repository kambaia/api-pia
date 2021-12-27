"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Access_LevelSchema = new mongoose_1.Schema({
    livel: {
        type: Number,
        default: 0
    },
    role: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
}, { timestamps: true });
// Export the model and return your IUser interface
exports.default = (0, mongoose_1.model)('Roles', Access_LevelSchema);
