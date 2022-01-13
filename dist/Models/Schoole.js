"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schoolShema = new mongoose_1.Schema({
    schoolPhoto: { type: String, required: true },
    schoolCover: { type: String, required: true },
    schoolName: { type: String, required: true },
    schoolIdentity: { type: String, required: true },
    birthDate: { type: String, required: true },
    studetNumber: { type: Number, required: true },
    shoolRepresentative: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('School', schoolShema);
