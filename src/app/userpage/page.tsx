"use client";
import { Masonry } from "masonic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
type templateListType = {
  title: string;
  path: string;
  image: string;
  imageDark: string;
  component: string[];
  description: string;
};

const UserPage = () => {
  const [hoverNumber, setHoverNumber] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

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

  useEffect(() => {
    // 컴포넌트가 마운트되었을 때 클라이언트 사이드에서만 실행
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // 서버에서는 아무 것도 렌더링하지 않음
  }

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
    {
      title: "Booking",
      path: "/booking",
      image: "/userBooking.svg",
      imageDark: "/userBookingDark.svg",
      component: ["Button", "Calendar", "Card", "Input", "Toggle", "Checkbox"],
      description: "예약을 위한 캘린더 기능이 포함된 폼입니다.",
    },
  ];
  const renderCard = ({ data: item }: { data: templateListType }) => (
    <div
      className="mb-12 cursor-pointer rounded-lg"
      onMouseEnter={() => setHoverNumber(templateList.indexOf(item))}
      onMouseLeave={() => setHoverNumber(null)}
      onClick={() => router.push(`/userpage${item.path}`)}
    >
      <Image
        src={isDarkMode ? item.imageDark : item.image}
        alt={item.title}
        width={300}
        height={406}
        className="rounded-xl border border-Basic dark:border-[#2A6490]"
      />
      <div className="relative flex w-full items-center pl-3 pt-1 dark:bg-[#1c2127]">
        <p className="mr-2 h-2 w-2 rounded-full bg-Basic"></p>
        <p className="z-5 text-xl">{item.title}</p>
        <article
          className={`text-md absolute bottom-[33px] left-0 z-0 w-[300px] overflow-hidden rounded-b-xl bg-gradient-to-b from-transparent to-blue-400/60 p-3 transition-transform duration-1000 ease-out dark:from-transparent dark:to-white/60 ${
            hoverNumber === templateList.indexOf(item)
              ? "translate-y-0 opacity-100"
              : "translate-y-[100%] opacity-0"
          }`}
        >
          <p className="dark:text-gray">{item.description}</p>
          <div className="mt-2 flex w-full flex-wrap justify-center text-center">
            {item.component.map((component: any, componentIndex: any) => (
              <p
                key={componentIndex}
                className="m-1 rounded-full border border-Basic p-1 px-2 text-sm font-bold text-white dark:text-Navy"
              >
                {component}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center">
      <div className="w-[1000px]">
        <Masonry
          items={templateList}
          columnGutter={16}
          columnWidth={300}
          render={renderCard}
        />
      </div>
    </div>
  );
};

export default UserPage;
