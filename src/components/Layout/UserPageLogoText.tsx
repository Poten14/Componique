"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const UserPageLogoText = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const checkDarkMode = () => {
      const darkMode = document.documentElement.classList.contains("dark");
      setIsDarkMode(darkMode);
    };

    checkDarkMode(); // 초기 다크 모드 상태 체크
    window.addEventListener("storage", checkDarkMode);

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("storage", checkDarkMode);
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <Image
        src={isDarkMode ? "/ComponiqueDark.svg" : "/Componique.svg"}
        alt="로고 텍스트"
        width={350}
        className="fixed left-1/2 top-5 z-[999] -translate-x-1/2 cursor-pointer"
        height={54}
        onClick={() => {
          router.push("/userpage");
        }}
      />
    </>
  );
};
export default UserPageLogoText;
