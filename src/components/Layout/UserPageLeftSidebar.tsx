"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
type templateListType = {
  title: string;
  path: string;
  image: string;
  imageDark: string;
  component: string[];
  description: string;
};
const UserPageLeftSidebar = () => {
  const router = useRouter();
  const [hoverNumber, setHoverNumber] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const templateList: templateListType[] = [
    {
      title: "SNS",
      path: "/sns",
      image: "/userSns.svg",
      imageDark: "/userSnsDark.svg",
      component: ["Button"],
      description: "SNS에 대한 설명을 적는 곳입니다.",
    },
    {
      title: "Profile",
      path: "/profile",
      image: "/userProfile.svg",
      imageDark: "/userProfileDark.svg",
      component: ["Input", "Select", "Image Upload"],
      description: "사용자의 프로필을 볼수 있는 폼입니다.",
    },
    {
      title: "Survey",
      path: "/survey",
      image: "/userSurvey.svg",
      imageDark: "/userSurveyDark.svg",
      component: ["Checkbox", "Button"],
      description: "설문조사의 내용을 입력할수 있는 페이지입니다.",
    },
    {
      title: "ColorPicker",
      path: "/colorpicker",
      image: "/userColorpicker.svg",
      imageDark: "/userColorpickerDark.svg",
      component: ["Color Picker", "Button"],
      description:
        "사용자가 원하는 색상을 선택하거나 만들어서 배경에 적용해볼 수 있는 페이지 입니다. ",
    },
    {
      title: "Shopping",
      path: "/shopping",
      image: "/userShopping.svg",
      imageDark: "/userShoppingDark.svg",
      component: ["Select", "Navbar", "Card", "Pagination"],
      description:
        "상품 목록, 선택 옵션, 결제 버튼 등으로 구성된 쇼핑 페이지입니다.",
    },

    {
      title: "Login",
      path: "/login",
      image: "/userLogin.svg",
      imageDark: "/userLoginDark.svg",
      component: ["Button", "input"],
      description: "로그인 폼의 기본 구조와 디자인을 제공하는 UI 폼입니다.",
    },

    {
      title: "TodoList",
      path: "/todolist",
      image: "/userTodolist.svg",
      imageDark: "/userTodolistDark.svg",
      component: ["Button"],
      description: "할일목록을 추가 및 삭제를 할수있는 폼입니다",
    },
    {
      title: "CustomerService",
      path: "/customerservice",
      image: "/userCustomerservice.svg",
      imageDark: "/userCustomerserviceDark.svg",
      component: ["Input", "Textarea", "Button", "Dropdown", "Image Upload"],
      description: "간단한 연락처 또는 문의를 받을 수 있는 폼입니다.",
    },
  ];

  return (
    <>
      <div className="flex h-full flex-wrap justify-center overflow-y-auto rounded-2xl">
        <ul className="mt-10 flex w-full flex-wrap justify-evenly">
          {templateList.map((item, index) => (
            <li
              key={index}
              className="mb-5 cursor-pointer rounded-lg"
              onMouseEnter={() => setHoverNumber(templateList.indexOf(item))}
              onMouseLeave={() => setHoverNumber(null)}
              onClick={() => router.push(`/userpage${item.path}`)}
            >
              <div className="flex items-center">
                <p className="mr-2 h-2 w-2 rounded-full bg-Basic"></p>
                <p className="z-5 text-xl">{item.title}</p>
              </div>
              <Image
                src={isDarkMode ? item.imageDark : item.image}
                alt={item.title}
                width={200}
                height={270}
                className="rounded-xl border border-Basic dark:border-[#2A6490]"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default UserPageLeftSidebar;
