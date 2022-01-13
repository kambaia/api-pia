"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schemaCourse = new mongoose_1.Schema({
    course: {
        type: String,
        required: true
    },
    cigla: {
        type: String,
    },
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('course', schemaCourse);
