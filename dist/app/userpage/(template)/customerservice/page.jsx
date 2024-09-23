"use strict";
// /userpage/(template)/customerservice/page.tsx
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const customerserviceform_1 = __importDefault(require("./components/customerserviceform"));
const RemoteCustomerService_1 = __importDefault(require("app/userpage/Remote/RemoteCustomerService"));
const CustomerServicePage = () => {
    return (<div className="flex justify-between">
      <div className="mt-10 w-full p-6 pb-24">
        <customerserviceform_1.default />
      </div>
      <div className="fixed right-4 top-14">
        <RemoteCustomerService_1.default />
      </div>
    </div>);
};
exports.default = CustomerServicePage;
