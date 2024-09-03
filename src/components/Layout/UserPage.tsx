"use client";
import Button from "@components/Button/Button";
import { useRouter } from "next/navigation";

const UserPage = () => {
  const router = useRouter();

  return (
    <>
      <Button
        className="mr-4 w-[145px] text-[#555555] dark:text-white"
        radius="full"
        iconColor="#555555"
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
