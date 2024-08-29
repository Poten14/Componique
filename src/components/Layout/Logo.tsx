"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="ml-4 cursor-pointer"
      onClick={() => {
        router.push("/");
      }}
    >
      <Image
        src="/componique_logo_full.svg"
        alt="logo"
        width={221}
        height={75}
      />
    </div>
  );
};
export default Logo;
