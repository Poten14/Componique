"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
const io5_1 = require("react-icons/io5");
const rx_1 = require("react-icons/rx");
const Icon_1 = __importDefault(require("../Icon/Icon"));
const team = [
    {
        name: "Kim Jun Su",
        github: "https://github.com/kimjusnu",
        blog: "https://dietisdie.tistory.com/",
    },
    {
        name: "Cho Young Rae",
        github: "https://github.com/25rae25",
        blog: "https://velog.io/@niceyoungrae/posts",
    },
    {
        name: "Im Sung Gyung",
        github: "https://github.com/5622lsk",
        blog: "https://velog.io/@5622lsk/posts",
    },
    {
        name: "Lee Da Won",
        github: "https://github.com/allone9425",
        blog: "https://velog.io/@dawnrose",
    },
];
const Footer = () => {
    const TopButton = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (<footer className="mb-4 flex w-full flex-col items-center">
      <div className="flex w-full flex-col items-center text-center">
        {/* 다크 모드에서 텍스트와 테두리 색상을 변경 */}
        <hr className="mb-4 w-3/6 border-t border-[#bcbcbc] dark:border-[#dddddd]"/>

        {/* 다크 모드에서 로고 이미지를 변경 */}
        <image_1.default src="/FooterLogo.svg" alt="FooterLogo" width={300} height={300} className="mb-3 dark:hidden" // 다크 모드에서 숨김
    />
        <image_1.default src="/FooterLogoDark.svg" alt="FooterLogo Dark" width={300} height={300} className="mb-3 hidden dark:block" // 다크 모드에서 보이기
    />

        <div className="flex flex-col items-center justify-center">
          {/* 팀원 소개 */}
          <ul className="mb-4">
            {team.map((member, index) => (<li key={index} className="mb-2 flex items-center justify-center">
                <a className="mr-2 flex items-center text-stone-950 hover:text-slate-700 dark:text-[#DFDFDF]" href={member.github} target="_blank" rel="noopener noreferrer">
                  <Icon_1.default name="icon-github"/>
                  {member.name}
                </a>
                <io5_1.IoEllipsisVerticalOutline className="mx-2 dark:text-white"/>
                <a href={member.blog} target="_blank" rel="noopener noreferrer" className="flex items-center text-stone-950 hover:text-slate-700 dark:text-[#DFDFDF]">
                  <Icon_1.default name="icon-blog"/>
                  Blog
                </a>
              </li>))}
          </ul>

          <a href="https://github.com/Poten14/Componique" className="mb-4 flex items-center text-stone-950 hover:text-slate-700 dark:text-[#DFDFDF]" target="_blank" rel="noopener noreferrer">
            <fa_1.FaGithub className="mr-2"/>
            Project Repository on GitHub
          </a>

          <button onClick={TopButton} className="flex items-center">
            <rx_1.RxDoubleArrowUp className="text-5xl text-[#9AC5E5] dark:text-[#476D89]"/>
          </button>
        </div>

        <p className="mt-4 text-stone-950 dark:text-[#DFDFDF]">
          © 2024 Team POTEN. All rights reserved.
        </p>
      </div>
    </footer>);
};
exports.default = Footer;
