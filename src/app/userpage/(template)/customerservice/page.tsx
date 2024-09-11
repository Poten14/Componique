// /userpage/(template)/customerservice/page.tsx
"use client";
import React from "react";
import CustomerServiceForm from "./components/customerserviceform";
import CustomerServiceRemote from "app/userpage/Remote/RemoteCustomerService";

const CustomerServicePage: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="w-full p-6 pb-24">
        {/* pb-24는 고객센터 폼 기준 폼의 아래 여백을 위해 표시한 것이므로 그외 작업시 생략 혹은 수정해도 됨 */}
        <h1 className="mb-10 ml-[70px] pb-4 text-2xl font-bold">
          고객센터 페이지
        </h1>
        <CustomerServiceForm />
      </div>
      <div className="fixed right-4 top-14">
        <CustomerServiceRemote />
      </div>
    </div>
  );
};

export default CustomerServicePage;
// 힘들다.
