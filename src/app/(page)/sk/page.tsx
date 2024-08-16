"use client";

import Input1 from "@components/Input/Input1";
import SearchInput from "@components/Input/SearchInput";
import SearchInput2 from "@components/Input/SearchInput2";
import SearchInput3 from "@components/Input/SearchInput3";
import BasicSpinner from "@components/Spinner/BasicSpinner";
import SquareSpinner from "@components/Spinner/SquareSpinner";
import BarsSpinner from "@components/Spinner/BarsSpinner";
import Button from "@components/Button/Button";
import { useState } from "react";
import FullScreenSpinner from "@components/Spinner/ FullScreenSpinner";
import PacManSpinner from "@components/Spinner/PacManSpinner";
import BasicModal from "@components/Modal/BasicModal";
import { ExtraSize } from "types/type";

const sk = () => {
  const [spinning, setSpinning] = useState(false); //fullscreen
  const [isOpen, setIsOpen] = useState(false); //모달
  const [modalSize, setModalSize] = useState<ExtraSize | "full">("medium");

  const showLoader = () => {
    setSpinning(true);

    setTimeout(() => {
      setSpinning(false);
    }, 3000); // 3초 동안 스피너를 표시한 후 숨김
  };
  const openModal = (size: ExtraSize | "full") => {
    setModalSize(size);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const sizes: (ExtraSize | "full")[] = [
    "xs",
    "small",
    "medium",
    "large",
    "xl",
    "full",
  ];

  return (
    <>
      {/* BasicInput */}
      <div className="m-4 space-y-8">
        <Input1 size="xs" placeholder="extra small size" />
        <Input1 size="small" placeholder="small size" />
        <Input1 size="medium" placeholder="medium size" />
        <Input1 size="large" placeholder="large size" />
        <Input1 size="xl" placeholder="Extra large size" />
        <Input1 size="medium" variant="filled" placeholder="Filled input" />
        <Input1 size="medium" variant="outlined" placeholder="Outlined input" />
      </div>
      <div className="m-4 space-y-8">
        <SearchInput
          placeholder="Search..."
          activeColor="bg-Basic"
          inactiveColor="bg-gray-300"
          width="w-96"
        />
      </div>

      {/* SearchInput */}
      <div className="m-4 space-y-8">
        <SearchInput2 size="small" placeholder="Search..." />
        <SearchInput2 size="medium" placeholder="Search..." />
        <SearchInput2 size="large" placeholder="Search..." />
      </div>
      <div className="ml-4 space-y-7">
        <SearchInput3 size="small" color="Basic" buttonText="Search" />
        <SearchInput3 size="small" color="Danger" buttonText="Search" />
        <SearchInput3 size="medium" color="Primary" buttonText="Search" />
        <SearchInput3 size="medium" color="Secondary" buttonText="Search" />
        <SearchInput3 size="large" color="Success" buttonText="Search" />
        <SearchInput3 size="large" color="Warning" buttonText="Search" />
      </div>

      {/* Basic Spinner */}

      <div className="ml-4 space-x-3 space-y-7">
        <BasicSpinner size="xs" color="Basic" speed="slow" />
        <BasicSpinner size="small" color="Danger" speed="slow" />
        <BasicSpinner size="medium" color="Primary" speed="medium" />
        <BasicSpinner size="medium" color="Secondary" speed="medium" />
        <BasicSpinner size="large" color="gray" speed="medium" />
        <BasicSpinner size="large" color="Warning" speed="fast" />
        <BasicSpinner size="xl" color="Success" speed="fast" />
      </div>
      <div className="ml-4 mt-4 space-x-3 space-y-6">
        <SquareSpinner size="xs" color="Success" speed="slow" />
        <SquareSpinner size="small" color="Danger" speed="slow" />
        <SquareSpinner size="medium" color="Primary" speed="medium" />
        <SquareSpinner size="medium" color="Secondary" speed="medium" />
        <SquareSpinner size="large" color="gray" speed="medium" />
        <SquareSpinner size="large" color="Warning" speed="fast" />
        <SquareSpinner size="xl" color="Basic" speed="fast" />
      </div>
      <div className="ml-4 mt-4 space-x-3 space-y-6">
        <BarsSpinner size="xs" color="Success" />
        <BarsSpinner size="small" color="Primary" />
        <BarsSpinner size="medium" color="gray" />
        <BarsSpinner size="large" color="Secondary" />
        <BarsSpinner size="xl" color="Basic" />
      </div>
      <div className="ml-4 mt-4 space-x-3 space-y-6">
        <PacManSpinner size="small" color="Warning" speed="slow" />
        <PacManSpinner size="medium" color="gray" speed="medium" />
        <PacManSpinner size="large" color="Basic" speed="fast" />
      </div>

      {/* FullScreenSpinner */}
      <div className="m-4 ml-4 space-x-3 space-y-6">
        {/* <Button onClick={showLoader} variant="border">
          Show Bars spinner
        </Button>
        <FullScreenSpinner spinning={spinning} shape="Bars" /> */}
        {/* <Button onClick={showLoader} variant="solid">
          Show Square spinner
        </Button>
        <FullScreenSpinner spinning={spinning} shape="Square" /> */}

        <Button onClick={showLoader} variant="flat">
          Show Basic spinner
        </Button>
        <FullScreenSpinner spinning={spinning} shape="Basic" />
      </div>

      {/* Modal */}
      <div className="ml-4 mt-4 space-x-3 space-y-6">
        <h1 className="mb-4 text-2xl font-bold">Modal Size Example</h1>
        <div className="space-x-4">
          {sizes.map((size) => (
            <Button key={size} onClick={() => openModal(size)}>
              {`Open ${size} Modal`}
            </Button>
          ))}
        </div>

        <BasicModal
          open={isOpen}
          size={modalSize}
          onClose={closeModal}
          primaryButton={{
            text: "Okay",
            variant: "primary",
            onClick: closeModal,
          }}
          secondaryButton={{
            text: "Close",
            variant: "secondary",
            onClick: closeModal,
          }}
        >
          <h2 className="mb-4 text-lg font-bold">Modal Size: {modalSize}</h2>
          <p>
            Magna exercitation reprehenderit magna aute tempor cupidatat
            consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
            incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
            enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur
            esse laborum eiusmod pariatur proident Lorem eiusmod et.
          </p>
        </BasicModal>
      </div>
    </>
  );
};
export default sk;
