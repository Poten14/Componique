"use client";

import React, { useEffect, useState } from "react";
import { useProfileStore } from "app/store/useProfileStore";
import Select from "@components/Select/Select";
import Button from "@components/Button/Button";
import BasicModal from "@components/Modal/BasicModal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Icon from "@components/Icon/Icon";

const previewProfileFormCode = (store: any) => {
  return `
  import React from 'react';
  import ImageUpload from '@components/ImageUpload/Imageupload';
  import Input from '@components/Input/Input';
  import Icon from '@components/Icon/Icon';

  const Profile = () => {
    return (
      <div className="grid place-items-center gap-y-6">
        <div className="grid place-items-center gap-y-6 rounded-lg bg-white p-8 shadow-lg dark:bg-[#333742]">
          <ImageUpload
            shape="${store.shape}"
            size="${store.size}"
            color="${store.color}"
            variant="${store.variant}"
            text="${store.text}"
            icon="icon-user"
            iconSize="${store.iconSize}"
            iconColor="${store.iconColor}"
            iconPosition="${store.iconPosition}"
          />
          <p className="text-md w-[120px] rounded-full bg-[#eee] p-1 text-center font-bold dark:bg-Navy">
            ${store.nickname}
          </p>
          <div className="grid w-[400px] justify-items-center gap-y-4 rounded-lg border border-Basic bg-white p-6 dark:bg-[#333742]">
            <div className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2">
              <Icon name="icon-comment" />
              <Input size="small" placeholder="${store.placeholder}" width="100%" />
            </div>
            <div className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2">
              <Icon name="icon-info" />
              <p>${store.job}</p>
            </div>
            <div className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2">
              <Icon name="icon-map" />
              <p>${store.location}</p>
            </div>
            <div className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2">
              <Icon name="icon-mail" />
              <p>${store.email}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Profile;
  `;
};

const ProfileRemote: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const profileStore = useProfileStore();

  useEffect(() => {
    const checkDarkMode = () => {
      const darkMode = document.documentElement.classList.contains("dark");
      setIsDarkMode(darkMode);
    };

    checkDarkMode();
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

  const handleCopy = () => {
    const code = previewProfileFormCode(profileStore);
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const {
    shape,
    size,
    color,
    variant,
    text,
    iconSize,
    iconColor,
    iconPosition,
    nickname,
    placeholder,
    job,
    location,
    email,
    setProfileState,
  } = profileStore;

  const controls = [
    {
      label: "ImageUpload-Shape",
      type: "select",
      value: shape,
      options: ["rectangle", "circle"],
      onChange: (newValue: string) => setProfileState("shape", newValue),
    },
    {
      label: "ImageUpload-Size",
      type: "select",
      value: size,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) => setProfileState("size", newValue),
    },
    {
      label: "ImageUpload-Color",
      type: "select",
      value: color,
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "basic",
        "white",
        "gray",
        "black",
      ],
      onChange: (newValue: string) => setProfileState("color", newValue),
    },
    {
      label: "ImageUpload-Style",
      type: "select",
      value: variant,
      options: ["solid", "border"],
      onChange: (newValue: string) => setProfileState("variant", newValue),
    },
    {
      label: "ImageUpload-Text",
      type: "text",
      value: text,
      onChange: (newValue: string) => setProfileState("text", newValue),
    },
    {
      label: "ImageUpload-Icon Size",
      type: "select",
      value: iconSize,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) => setProfileState("iconSize", newValue),
    },
    {
      label: "ImageUpload-Icon Color",
      type: "text",
      value: iconColor,
      onChange: (newValue: string) => setProfileState("iconColor", newValue),
    },
    {
      label: "ImageUpload-Icon Position",
      type: "select",
      value: iconPosition,
      options: ["left", "right", "top", "bottom"],
      onChange: (newValue: string) => setProfileState("iconPosition", newValue),
    },
    {
      label: "Name",
      type: "text",
      value: nickname,
      onChange: (newValue: string) => setProfileState("nickname", newValue),
    },
    {
      label: "Bio",
      type: "text",
      value: placeholder,
      onChange: (newValue: string) => setProfileState("placeholder", newValue),
    },
    {
      label: "Job",
      type: "text",
      value: job,
      onChange: (newValue: string) => setProfileState("job", newValue),
    },
    {
      label: "Location",
      type: "text",
      value: location,
      onChange: (newValue: string) => setProfileState("location", newValue),
    },
    {
      label: "Email",
      type: "text",
      value: email,
      onChange: (newValue: string) => setProfileState("email", newValue),
    },
  ];
  return (
    <div className="relative shadow-xl">
      <div
        className={`absolute left-0 top-2 z-10 m-auto w-[350px] rounded-t-2xl bg-[#D8EAF8] p-5 dark:bg-[#102B3F]`}
      >
        <div className="flex">
          <h2 className="text-2xl font-bold text-[#ffffff] dark:text-[#dfdfdf]">
            Control Panel
          </h2>

          <Button
            iconPosition="left"
            iconSize="large"
            onClick={() => setIsModalOpen(true)}
            className="ml-20 dark:bg-[#2A6490] dark:focus:bg-[#1D4767]"
          >
            <Icon name="icon-docs" color="white" />
            Code
          </Button>
        </div>
        <input
          type="text"
          className="mt-2 w-full rounded bg-[#BBD9F0] dark:bg-[#2B4456] dark:text-[#ffffff]"
          placeholder="   customizing your template"
          disabled
        />
        <BasicModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          showCloseIcon={true}
          className="custom-modal"
        >
          <SyntaxHighlighter
            language="tsx"
            style={isDarkMode ? vscDarkPlus : undefined}
            customStyle={{
              backgroundColor: isDarkMode ? "#2A2E39" : "#F8F8F8",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              fontSize: "0.7rem",
              maxHeight: "570px",
              overflowY: "auto",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {previewProfileFormCode(profileStore)}
          </SyntaxHighlighter>
          <Button
            onClick={handleCopy}
            icon={copied ? "icon-check" : undefined}
            className="copyButton m-10 dark:bg-[#2A6490]"
            iconColor={copied ? "green" : "white"}
          >
            {copied ? "Copied!" : "Copy Code"}
          </Button>
          <div className="mb-2 text-right">
            <Button
              variant="border"
              onClick={() => setIsModalOpen(false)}
              className="dark:text-gray-300 text-sm text-gray dark:border-gray"
            >
              close
            </Button>
          </div>
        </BasicModal>
      </div>

      <div
        className={`remote-control relative top-26 m-auto mt-10 w-[350px] rounded-xl p-2 shadow-xl ${isDarkMode ? "bg-[#333742] text-[#dfdfdf]" : "bg-white"} max-h-[calc(100vh-220px)] overflow-y-auto`}
      >
        {controls.map((control, index) => (
          <div
            key={index}
            className={`control-item m-3 rounded-lg p-2 shadow-md ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}
          >
            <label
              className={`mb-2 block font-medium ${isDarkMode ? "text-[#dfdfdf]" : "text-Gray"}`}
            >
              {control.label}
            </label>
            {control.type === "select" ? (
              <Select
                option={control.options || []}
                placeholder={control.value}
                onChange={(newValue) => control.onChange(newValue)}
                className="w-full"
              />
            ) : (
              <input
                type="text"
                value={control.value}
                onChange={(e) => control.onChange(e.target.value)}
                className={`w-full rounded-lg border p-2 focus:outline-none focus:ring-1 focus:ring-Basic ${isDarkMode ? "border-gray-500 bg-[#2A2E39] text-[#dfdfdf]" : "border-gray bg-white"}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileRemote;
