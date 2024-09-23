"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ShoppingForm_1 = __importDefault(require("../shopping/components/ShoppingForm"));
const RemoteShopping_1 = __importDefault(require("app/userpage/Remote/RemoteShopping"));
const ShoppingPage = () => {
    return (<div className="flex justify-between">
      <div className="mt-10 w-full p-6 pb-24 xl:ml-[230px] xl:w-[calc(100%-580px)]">
        <ShoppingForm_1.default />
      </div>
      <div className="fixed right-4 top-14">
        <RemoteShopping_1.default />
      </div>
    </div>);
};
exports.default = ShoppingPage;
