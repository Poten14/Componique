"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { PiGithubLogo } from "react-icons/pi";
import { TbBrandBlogger } from "react-icons/tb";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const team = [
  {
    name: "Kim Jun Su",
    github: "https://github.com/kimjunsu",
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
  // 최상단으로 스크롤하는 함수 정의
  const TopButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mb-4">
      <div className="text-center">
        <hr />
        <p className="mb-3">Built by Team POTEN</p>
        <div className="flex flex-col items-center justify-center">
          {/* 팀원 소개 */}
          <ul className="mb-4">
            {team.map((member, index) => (
              <li key={index} className="mb-2 flex items-center">
                <a
                  className="mr-2 flex items-center"
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiGithubLogo className="mr-1" /> {member.name}
                </a>
                <IoEllipsisVerticalOutline className="mx-2" />
                <a
                  href={member.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <TbBrandBlogger className="mr-1" /> Blog
                </a>
              </li>
            ))}
          </ul>

          {/* 프로젝트 GitHub주소 */}
          <a
            href="https://github.com/Poten14/Componique"
            className="mb-4 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-2" />
            Project Repository on GitHub
          </a>

          {/* TopButton */}
          <button onClick={TopButton} className="flex items-center">
            <FaRegArrowAltCircleUp className="text-3xl" />
          </button>
        </div>

        {/* 저작권 문구 */}
        <p className="mt-4">© 2024 Team POTEN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
