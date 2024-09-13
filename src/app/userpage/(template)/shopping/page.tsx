"use client";

import React from "react";
import ShoppingForm from "../shopping/components/ShoppingForm";
import RemoteShopping from "app/userpage/Remote/RemoteShopping";

const ShoppingPage = () => {
  return (
    <div className="flex justify-between">
      <div className="ml-[230px] mt-10 w-[calc(100%-580px)] p-6 pb-24">
        <ShoppingForm />
      </div>
      <div className="fixed right-4 top-14">
        <RemoteShopping />
      </div>
    </div>
  );
};

export default ShoppingPage;
