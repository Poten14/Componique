"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const Logo = () => {
    const router = useRouter();
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };
        checkDarkMode();
        // 다크 모드 변경 감지를 위한 MutationObserver 설정
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        // 컴포넌트가 언마운트될 때 observer 정리
        return () => observer.disconnect();
    }, []);
    // 다크 모드 여부에 따라 로고 이미지 소스를 결정
    const logoSrc = isDarkMode
        ? "/LogoDark.svg" // 다크 모드용 로고
        : "/Logo.svg"; // 라이트 모드용 로고
    return (<div className="ml-4 cursor-pointer" onClick={() => {
            router.push("/");
        }}>
      <Image src={logoSrc} alt="logo" width={206} height={70}/>
    </div>);
};
export default Logo;
