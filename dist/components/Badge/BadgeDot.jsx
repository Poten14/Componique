"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Badge_1 = __importDefault(require("../Badge/Badge"));
const BadgeDot = () => <Badge_1.default type="dot" color="bg-red-500"/>;
exports.default = BadgeDot;
