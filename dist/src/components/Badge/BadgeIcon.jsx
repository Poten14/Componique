"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Badge_1 = __importDefault(require("./Badge"));
const fa_1 = require("react-icons/fa");
const BadgeIcon = () => {
    return (<Badge_1.default type="icon" content="IconBadge" icon={<fa_1.FaStar />} color="bg-yellow-500" textColor="text-white"/>);
};
exports.default = BadgeIcon;
