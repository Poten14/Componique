"use client";
import Button from "@components/Button/Button";
import { useRouter } from "next/navigation";

const UserPage = () => {
  const router = useRouter();

  return (
    <>
      <Button
        className="mr-4 w-[145px] text-[#555555] dark:bg-[#333742] dark:text-white"
        radius="full"
        iconColor="#fff"
        icon="icon-user"
        onClick={() => {
          router.push("/");
        }}
      >
        User Page
      </Button>
    </>
  );
};

export default UserPage;
