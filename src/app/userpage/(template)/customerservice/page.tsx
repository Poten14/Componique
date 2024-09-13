// /userpage/(template)/customerservice/page.tsx
"use client";
import React from "react";
import CustomerServiceForm from "./components/customerserviceform";
import CustomerServiceRemote from "app/userpage/Remote/RemoteCustomerService";

const CustomerServicePage: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="mt-10 w-full p-6 pb-24">
        <CustomerServiceForm />
      </div>
      <div className="fixed right-4 top-14">
        <CustomerServiceRemote />
      </div>
    </div>
  );
};

export default CustomerServicePage;
