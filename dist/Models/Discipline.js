"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var disciplineSchema = new mongoose_1.Schema({
    discipline: {
        type: String,
        required: true
    },
    sigle: {
        type: String,
    },
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('discipline', disciplineSchema);
