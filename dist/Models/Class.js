"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var classSchema = new mongoose_1.Schema({
    classMeet: { type: String, required: true },
    year: {
        type: String
    },
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('classe', classSchema);
