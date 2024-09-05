"use client";

import Autocomplete from "@components/Autocomplete";
import Image from "next/image";
import { useState, useEffect } from "react";
import Content from "@components/Content/page";
import SideBar from "@components/Layout/SideBar";

const options = [
  { label: "Form", value: "Button" },
  { label: "Form", value: "Input" },
  { label: "Form", value: "Autocomplete" },
  { label: "Form", value: "ColorPicker" },
  { label: "Form", value: "Radio Button" },
  { label: "Form", value: "DropDown" },
  { label: "Form", value: "Switch" },
  { label: "Form", value: "CheckBox" },
  { label: "Form", value: "Textarea" },
  { label: "Form", value: "Select" },
  { label: "Data display", value: "Card" },
  { label: "Data display", value: "Carousel" },
  { label: "Data display", value: "Calendar" },
  { label: "Data display", value: "Avatar" },
  { label: "Data display", value: "Icon" },
  { label: "Data display", value: "ProgressBar" },
  { label: "Data display", value: "ImageUpload" },
  { label: "Data display", value: "Infinite Scroll" },
  { label: "Feedback", value: "Spinner" },
  { label: "Feedback", value: "Toast(alert)" },
  { label: "Feedback", value: "Skeleton" },
  { label: "Feedback", value: "Modal" },
  { label: "Navigation", value: "Pagination" },
  { label: "Navigation", value: "Drawer" },
  { label: "Navigation", value: "Navbar" },
];

const Page = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedSearches = sessionStorage.getItem("recentSearches");
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  // 메인 페이지가 렌더링될 때 배경 이미지 클래스를 추가하고, 페이지를 떠날 때 클래스를 제거합니다.
  useEffect(() => {
    document.body.classList.add("main-page");

    return () => {
      document.body.classList.remove("main-page");
    };
  }, []);

  useEffect(() => {
    // 다크 모드 상태를 확인하고 설정
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // 초기 다크 모드 상태 확인
    checkDarkMode();

    // 다크 모드 변경을 감지하는 Observer 설정
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // 컴포넌트가 언마운트될 때 Observer를 정리
    return () => observer.disconnect();
  }, []);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    const updatedSearches = Array.from(new Set([option, ...recentSearches])); // 중복 제거 후 최근 검색어 목록 업데이트
    const limitedSearches = updatedSearches.slice(0, 5); // 최근 5개만 유지
    setRecentSearches(limitedSearches);
    sessionStorage.setItem("recentSearches", JSON.stringify(limitedSearches));
  };

  // 다크 모드에 따라 로고 이미지 소스 결정
  const logoSrc = isDarkMode ? "/ComponiqueDark.svg" : "/Componique.svg";

  return (
    <div>
      <section className="fixed z-0 mt-[16px] hidden h-[calc(100%-120px)] w-[250px] bg-white dark:bg-Dark xl:block">
        <SideBar />
      </section>
      <div className="main-wrapper xl:ml-[300px]">
        <div className="mt-16 flex flex-col items-center justify-center">
          <div className="mb-8 w-full max-w-[440px]">
            <Image src={logoSrc} alt="logo" width={440} height={72} />
          </div>
          <div className="w-full max-w-[740px] dark:text-white">
            <Autocomplete
              options={options}
              placeholder="Search for a Component..."
              onSelect={handleSelect}
            />
          </div>
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search, index) => (
                <span
                  key={index}
                  className="rounded-full border border-Basic px-3 py-1 text-Basic dark:border-Navy dark:text-Navy"
                >
                  {search}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Content />
      </div>
    </div>
  );
};

export default Page;
