"use client";
import Button from "@components/Button/Button";
import { useRouter } from "next/navigation";
const UserPagePrevButton = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex h-full flex-wrap justify-center overflow-y-auto">
        <Button
          radius="full"
          className="h-[60px] w-[60px] !text-2xl"
          onClick={() => {
            router.push("/userpage");
          }}
        >
          &larr;
        </Button>
      </div>
    </>
  );
};
export default UserPagePrevButton;
