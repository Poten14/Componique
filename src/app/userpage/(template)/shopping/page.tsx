"use client";

import React from "react";
import ShoppingForm from "../shopping/components/ShoppingForm";
import RemoteShopping from "app/userpage/Remote/RemoteShopping";

const ShoppingPage = () => {
  return (
    <div className="flex justify-between">
      <div className="w-full p-6 pb-24">
        <ShoppingForm />
      </div>
      <div className="mt-8 flex justify-center">
        <RemoteShopping />
      </div>
    </div>
  );
};

export default ShoppingPage;
