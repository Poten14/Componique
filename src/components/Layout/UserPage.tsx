"use client";
import Button from "@components/Button/Button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
const UserPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      {pathname.startsWith("/userpage") ? (
        <Button
          className="mr-4 w-[145px] text-[#555555] dark:bg-[#333742] dark:text-white"
          radius="full"
          iconColor="#fff"
          icon="icon-user"
          onClick={() => {
            router.push("/");
          }}
        >
          Docs Page
        </Button>
      ) : (
        <Button
          className="mr-4 w-[145px] text-[#555555] dark:bg-[#333742] dark:text-white"
          radius="full"
          iconColor="#fff"
          icon="icon-user"
          onClick={() => {
            router.push("/userpage");
          }}
        >
          User Page
        </Button>
      )}
    </>
  );
};

export default UserPage;
