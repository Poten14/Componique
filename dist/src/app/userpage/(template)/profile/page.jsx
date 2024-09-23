"use client";
import React from "react";
import Profile from "./components/Profile";
import ProfileRemote from "app/userpage/Remote/RemoteProfile";
const ProfilePage = () => {
    return (<div className="flex justify-between">
      <div className="mt-10 w-full p-6 pb-24">
        <Profile />
      </div>
      <div className="fixed right-4 top-14">
        <ProfileRemote />
      </div>
    </div>);
};
export default ProfilePage;
