"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = (): void => {
      const darkMode = document.documentElement.classList.contains("dark");
      setIsDarkMode(darkMode);
    };

    checkDarkMode();

    // MutationObserver를 사용하여 다크 모드 변경 감지
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // 컴포넌트 언마운트 시 Observer 해제
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative h-screen w-full bg-[url('/404Image.svg')] bg-cover bg-center dark:bg-[url('/404ImageDark.svg')]">
      {/* 이미지에 있는 텍스트 아래에 버튼을 배치 */}
      <div className="absolute bottom-1/3 right-80 flex transform items-center justify-center">
        <Link href={"/"}>
          <button>
            <Image
              src={
                isDarkMode ? "/404Button-Docs-Dark.svg" : "/404Button-Docs.svg"
              }
              alt="DocsButton"
              width={200}
              height={200}
            />
          </button>
        </Link>
        <Link href={"/userpage"}>
          <button className="ml-5">
            <Image
              src={
                isDarkMode ? "/404Button-User-Dark.svg" : "/404Button-User.svg"
              }
              alt="UserButton"
              width={240}
              height={240}
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
