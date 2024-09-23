"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Badge_1 = __importDefault(require("./Badge"));
const BadgeBasic = () => {
    return (<Badge_1.default type="basic" content="BasicBadge" color="bg-Primary" textColor="text-white"/>);
};
exports.default = BadgeBasic;
