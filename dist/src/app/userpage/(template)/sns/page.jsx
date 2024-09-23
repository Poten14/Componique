"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sns_1 = __importDefault(require("./components/Sns"));
const RemoteSns_1 = __importDefault(require("app/userpage/Remote/RemoteSns"));
const page = () => {
    return (<div className="flex justify-between">
      <div className="mt-10 w-full p-6 pb-24">
        <Sns_1.default />
      </div>
      <div className="fixed right-4 top-14">
        <RemoteSns_1.default />
      </div>
    </div>);
};
exports.default = page;
