"use client";

import React, { useState } from "react";
import CodeBox from "@components/CodeBox";
import BasicModal from "@components/Modal/BasicModal";
import { ExtraSize } from "types/type";
import Button from "@components/Button/Button";
import FormModal from "@components/Modal/FormModal";
import OverlayModal from "@components/Modal/OverlayModal";

const ModalDoc: React.FC = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});
  const [isOpen, setIsOpen] = useState(false); //모달
  const [modalSize, setModalSize] = useState<ExtraSize | "full">("medium");
  const [openModalKey, setOpenModalKey] = useState<number | null>(null);
  const [modalSize2, setModalSize2] = useState<ExtraSize>("medium");
  const [openModalKey2, setOpenModalKey2] = useState<number | null>(null);
  const [openModalKey3, setOpenModalKey3] = useState<number | null>(null);
  const [modalSize3, setModalSize3] = useState<ExtraSize>("small");

  const handleCopy = (index: number) => {
    setCopied((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
  };

  //베이직 모달
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

  //폼모달
  const openModal2 = (key: number, size: ExtraSize) => {
    setModalSize2(size);
    setOpenModalKey2(key);
  };

  const closeModal2 = () => setOpenModalKey2(null);

  //오버레이 모달
  const openModal3 = (key: number, size: ExtraSize) => {
    setModalSize3(size);
    setOpenModalKey3(key);
  };

  const closeModal3 = () => setOpenModalKey3(null);

  return (
    <div className="prose mb-40 max-w-[1000px] text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">1. Modal</h1>
      <p>
        <code>Modal</code> 컴포넌트는 사용자가 인터페이스와 상호작용하는 동안
        중요한 정보를 표시하거나 결정을 요청하는 데 사용됩니다. 다양한 크기와
        버튼 옵션을 지원합니다.
      </p>
      <h2 className="text-[#2D3748]"> 1.1. Import</h2>
      <CodeBox
        code={`import { BasicModal } from '@componique/react';`}
        copyText={`import { BasicModal } from '@components/Modal/BasicModal';`}
        language="tsx"
        index={1}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">1.2. Usage</h2>
      <p>
        아래는 <code>Modal</code> 컴포넌트의 기본 사용 예제입니다:
      </p>
      <button
        onClick={() => openModal("medium")}
        className="rounded-md bg-Basic px-4 py-2 text-white"
      >
        Open Basic Modal
      </button>
      <BasicModal open={isOpen} onClose={closeModal} showCloseIcon={true}>
        <p>This is a basic modal content.</p>
      </BasicModal>

      <CodeBox
        code={`import { BasicModal } from '@components/Modal/BasicModal';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>  
        <button onClick={handleOpen} className="bg-Basic text-white px-4 py-2 rounded-md ">
            Open Basic Modal
        </button>
        <BasicModal open={isOpen} onClose={handleClose} showCloseIcon={true}>
          <p>This is a basic modal content.</p>
        </BasicModal>
    </>

  );
}

export default Example;`}
        copyText={`import { BasicModal } from '@components/Modal/BasicModal';
        import { useState } from 'react';
        
        function Example() {
          const [isOpen, setIsOpen] = useState(false);
        
          const handleOpen = () => setIsOpen(true);
          const handleClose = () => setIsOpen(false);
        
          return (
            <>  
                <button onClick={handleOpen} className="bg-Basic text-white px-4 py-2 rounded-md ">
                    Open Basic Modal
                </button>
                <BasicModal open={isOpen} onClose={handleClose} showCloseIcon={true}>
                  <p>This is a basic modal content.</p>
                </BasicModal>
            </>
        
          );
        }
        
        export default Example;`}
        language="tsx"
        index={2}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">1.3. Changing the Size of the Modal</h2>
      <p>
        <code>Modal</code> 컴포넌트는 다양한 크기로 제공됩니다. 기본 크기는{" "}
        <code>medium</code>입니다:
      </p>
      <ul>
        <li>
          <code>xs</code>: 아주 작은 크기
        </li>
        <li>
          <code>small</code>: 작은 크기
        </li>
        <li>
          <code>medium</code>: 중간 크기 (기본값)
        </li>
        <li>
          <code>large</code>: 큰 크기
        </li>
        <li>
          <code>xl</code>: 아주 큰 크기
        </li>
        <li>
          <code>full</code>: 전체 화면 크기
        </li>
      </ul>
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
        showCloseIcon={true}
      >
        <h2 className="mb-4 text-lg font-bold">Modal Size: {modalSize}</h2>
        <p>
          Magna exercitation reprehenderit magna aute tempor cupidatat consequat
          elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum
          quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do
          dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum
          eiusmod pariatur proident Lorem eiusmod et.
        </p>
      </BasicModal>
      <CodeBox
        code={`import { BasicModal } from '@components/Modal/BasicModal';
        import { useState } from 'react';
        
        function Example() {
          const [isOpen, setIsOpen] = useState(false);
        
          const handleOpen = () => setIsOpen(true);
          const handleClose = () => setIsOpen(false);
        
          return (
            <>
              <button onClick={handleOpen} className="bg-Basic text-white px-4 py-2 rounded-md ">Open xs Modal</button>
              <BasicModal size="xs" open={isOpen} onClose={handleClose} showCloseIcon={true}           
              
              primaryButton={{
                text: "Okay",
                variant: "primary",
                onClick: closeModal,
              }}
              secondaryButton={{
                text: "Close",
                variant: "secondary",
                onClick: closeModal,
              }}>
                <h2 className="mb-4 text-lg font-bold">Modal Size: xs</h2>
                <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat
                consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
                enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur
                esse laborum eiusmod pariatur proident Lorem eiusmod et.
              </p>
              </BasicModal>
        
              <button onClick={handleOpen} className="bg-Basic text-white px-4 py-2 rounded-md">Open small Modal</button>
              <BasicModal size="small" open={isOpen} onClose={handleClose} showCloseIcon={true}
                primaryButton={{
                text: "Okay",
                variant: "primary",
                onClick: closeModal,
              }}
              secondaryButton={{
                text: "Close",
                variant: "secondary",
                onClick: closeModal,
              }}>
                <h2 className="mb-4 text-lg font-bold">Modal Size: small</h2>
                <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat
                consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
                enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur
                esse laborum eiusmod pariatur proident Lorem eiusmod et.
                </p>
              </BasicModal>
        
              <button onClick={handleOpen} className="bg-Basic text-white px-4 py-2 rounded-md">Open medium Modal</button>
              <BasicModal size="medium" open={isOpen} onClose={handleClose} showCloseIcon={true}
              
                primaryButton={{
                text: "Okay",
                variant: "primary",
                onClick: closeModal,
              }}
              secondaryButton={{
                text: "Close",
                variant: "secondary",
                onClick: closeModal,
              }}>
              <h2 className="mb-4 text-lg font-bold">Modal Size: medium</h2>
              <p>
              Magna exercitation reprehenderit magna aute tempor cupidatat
              consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
              incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
              enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur
              esse laborum eiusmod pariatur proident Lorem eiusmod et.
              </p>
              </BasicModal>
        
              <button onClick={handleOpen} className="bg-Basic text-white px-4 py-2 rounded-md">Open large Modal</button>
              <BasicModal size="large" open={isOpen} onClose={handleClose} showCloseIcon={true}
              
                primaryButton={{
                text: "Okay",
                variant: "primary",
                onClick: closeModal,
              }}
              secondaryButton={{
                text: "Close",
                variant: "secondary",
                onClick: closeModal,
              }}>
                <h2 className="mb-4 text-lg font-bold">Modal Size: large</h2>
                <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat
                consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
                enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur
                esse laborum eiusmod pariatur proident Lorem eiusmod et.
                </p>
              </BasicModal>
        
              <button onClick={handleOpen} className="bg-Basic text-white px-4 py-2 rounded-md">Open xl Modal</button>
              <BasicModal size="xl" open={isOpen} onClose={handleClose} showCloseIcon={true}
              
                primaryButton={{
                text: "Okay",
                variant: "primary",
                onClick: closeModal,
              }}
              secondaryButton={{
                text: "Close",
                variant: "secondary",
                onClick: closeModal,
              }}>
              <h2 className="mb-4 text-lg font-bold">Modal Size: xl</h2>
              <p>
              Magna exercitation reprehenderit magna aute tempor cupidatat
              consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
              incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
              enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur
              esse laborum eiusmod pariatur proident Lorem eiusmod et.
              </p>
              </BasicModal>
        
              <button onClick={handleOpen} className="bg-Basic text-white px-4 py-2 rounded-md">Open full Modal</button>
              <BasicModal size="full" open={isOpen} onClose={handleClose} showCloseIcon={true}
              
                primaryButton={{
                text: "Okay",
                variant: "primary",
                onClick: closeModal,
              }}
              secondaryButton={{
                text: "Close",
                variant: "secondary",
                onClick: closeModal,
              }}>
                <h2 className="mb-4 text-lg font-bold">Modal Size: full</h2>
                <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat
                consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
                enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur
                esse laborum eiusmod pariatur proident Lorem eiusmod et.
                </p>
              </BasicModal>
            </>
          );
        }
        
        export default Example;`}
        copyText={`import { BasicModal } from '@components/Modal/BasicModal';
        import { useState } from 'react';
        
        function Example() {
          const [isOpen, setIsOpen] = useState(false);
        
          const handleOpen = () => setIsOpen(true);
          const handleClose = () => setIsOpen(false);
        
          return (
            <>
              <button onClick={handleOpen} className="bg-Basic text-white px-4 py-2 rounded-md ">Open xs Modal</button>
              <BasicModal size="xs" open={isOpen} onClose={handleClose} showCloseIcon={true}           primaryButton={{
                text: "Okay",
                variant: "primary",
                onClick: closeModal,
              }}
              secondaryButton={{
                text: "Close",
                variant: "secondary",
                onClick: closeModal,
              }}>
                <p>This is a basic modal content.</p>
              </BasicModal>
        
              <button onClick={handleOpen} className="bg-Basic text-white px-4 py-2 rounded-md">Open xs Modal</button>
              <BasicModal size="small" open={isOpen} onClose={handleClose} showCloseIcon={true}           primaryButton={{
                text: "Okay",
                variant: "primary",
                onClick: closeModal,
              }}
              secondaryButton={{
                text: "Close",
                variant: "secondary",
                onClick: closeModal,
              }}>
                <p>This is a basic modal content.</p>
              </BasicModal>
        
              <button onClick={handleOpen} className="bg-Basic text-white px-4 py-2 rounded-md">Open xs Modal</button>
              <BasicModal size="medium" open={isOpen} onClose={handleClose} showCloseIcon={true}           primaryButton={{
                text: "Okay",
                variant: "primary",
                onClick: closeModal,
              }}
              secondaryButton={{
                text: "Close",
                variant: "secondary",
                onClick: closeModal,
              }}>
                <p>This is a basic modal content.</p>
              </BasicModal>
        
              <button onClick={handleOpen} className="bg-Basic text-white px-4 py-2 rounded-md">Open xs Modal</button>
              <BasicModal size="large" open={isOpen} onClose={handleClose} showCloseIcon={true}           primaryButton={{
                text: "Okay",
                variant: "primary",
                onClick: closeModal,
              }}
              secondaryButton={{
                text: "Close",
                variant: "secondary",
                onClick: closeModal,
              }}>
                <p>This is a basic modal content.</p>
              </BasicModal>
        
              <button onClick={handleOpen} className="bg-Basic text-white px-4 py-2 rounded-md">Open xs Modal</button>
              <BasicModal size="xl" open={isOpen} onClose={handleClose} showCloseIcon={true}           primaryButton={{
                text: "Okay",
                variant: "primary",
                onClick: closeModal,
              }}
              secondaryButton={{
                text: "Close",
                variant: "secondary",
                onClick: closeModal,
              }}>
                <p>This is a basic modal content.</p>
              </BasicModal>
        
              <button onClick={handleOpen} className="bg-Basic text-white px-4 py-2 rounded-md">Open xs Modal</button>
              <BasicModal size="full" open={isOpen} onClose={handleClose} showCloseIcon={true}           primaryButton={{
                text: "Okay",
                variant: "primary",
                onClick: closeModal,
              }}
              secondaryButton={{
                text: "Close",
                variant: "secondary",
                onClick: closeModal,
              }}>
                <p>This is a basic modal content.</p>
              </BasicModal>
            </>
          );
        }
        
        export default Example;`}
        language="tsx"
        index={3}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">
        1.4. Using Primary and Secondary Buttons
      </h2>
      {/* <Button
        onClick={() => openModal("large")}
        className="rounded-md bg-Primary px-4 py-2 text-white"
      >
        Open Modal with Buttons
      </Button>
      <BasicModal
        open={isOpen}
        onClose={closeModal}
        primaryButton={{
          text: "primary",
          variant: "primary",
          onClick: closeModal,
        }}
        secondaryButton={{
          text: "secondary",
          variant: "secondary",
          onClick: closeModal,
        }}
      >
        <p>모달 컴포넌트는 기본적으로 primary와 secondary 버튼을 지원합니다:</p>
      </BasicModal> */}
      <CodeBox
        code={`import { BasicModal } from '@components/Modal/BasicModal';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button onClick={handleOpen} className="bg-Primary text-white px-4 py-2 rounded-md">Open Modal with Buttons</button>
      <BasicModal
        open={isOpen}
        onClose={handleClose}
        primaryButton={{ text: "primary", variant: "primary", onClick: handleClose }}
        secondaryButton={{ text: "secondary", variant: "secondary", onClick: handleClose }}
      >
        <p>모달 컴포넌트는 기본적으로 primary와 secondary 버튼을 지원합니다:</p>
      </BasicModal>
    </>
  );
}

export default Example;`}
        copyText={`import { BasicModal } from '@components/Modal/BasicModal';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button onClick={handleOpen} className="bg-Primary text-white px-4 py-2 rounded-md">Open Modal with Buttons</button>
      <BasicModal
        open={isOpen}
        onClose={handleClose}
        primaryButton={{ text: "primary", variant: "primary", onClick: handleClose }}
        secondaryButton={{ text: "secondary", variant: "secondary", onClick: handleClose }}
      >
        <p>모달 컴포넌트는 기본적으로 primary와 secondary 버튼을 지원합니다:</p>
      </BasicModal>
    </>
  );
}

export default Example;`}
        language="tsx"
        index={4}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">1.5. Props</h2>
      <p>
        <code>Modal</code> 컴포넌트는 아래와 같은 Props를 가집니다:
      </p>
      <table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>open</code>
            </td>
            <td>모달이 열려 있는지 여부를 제어합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>size</code>
            </td>
            <td>모달의 크기를 설정합니다.</td>
            <td>
              <code>"xs" | "small" | "medium" | "large" | "xl" | "full"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onClose</code>
            </td>
            <td>모달이 닫힐 때 호출되는 함수입니다.</td>
            <td>
              <code>() =&gt; void</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>children</code>
            </td>
            <td>모달 내부에 표시할 내용을 지정합니다.</td>
            <td>
              <code>React.ReactNode</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>primaryButton</code>
            </td>
            <td>모달 하단에 표시될 primary 버튼의 설정입니다.</td>
            <td>
              <code>ButtonProps</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>secondaryButton</code>
            </td>
            <td>모달 하단에 표시될 secondary 버튼의 설정입니다.</td>
            <td>
              <code>ButtonProps</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>showCloseIcon</code>
            </td>
            <td>닫기 아이콘을 표시할지 여부를 설정합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>true</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">1.6. Full Example</h2>
      <CodeBox
        code={`import { BasicModal } from '@components/Modal/BasicModal';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button onClick={handleOpen} className="bg-Primary text-white px-4 py-2 rounded-md">Open Full Example Modal</button>
      <BasicModal
        open={isOpen}
        onClose={handleClose}
        size="large"
        primaryButton={{ text: "Confirm", variant: "primary", onClick: handleClose }}
        secondaryButton={{ text: "Cancel", variant: "secondary", onClick: handleClose }}
        showCloseIcon={true}
      >
        <p>This is a modal with all features enabled.</p>
      </BasicModal>
    </>
  );
}

export default Example;`}
        copyText={`import { BasicModal } from '@components/Modal/BasicModal';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button onClick={handleOpen} className="bg-Primary text-white px-4 py-2 rounded-md">Open Full Example Modal</button>
      <BasicModal
        open={isOpen}
        onClose={handleClose}
        size="large"
        primaryButton={{ text: "Confirm", variant: "primary", onClick: handleClose }}
        secondaryButton={{ text: "Cancel", variant: "secondary", onClick: handleClose }}
        showCloseIcon={true}
      >
        <p>This is a modal with all features enabled.</p>
      </BasicModal>
    </>
  );
}

export default Example;`}
        language="tsx"
        index={5}
        copied={copied}
        handleCopy={handleCopy}
      />
      <hr />
      <h1 className="text-[#2D3748]">2. FormModal</h1>
      <p>
        <code>FormModal</code> 컴포넌트는 사용자 입력을 수집하기 위한 폼을
        포함한 모달입니다. 다양한 크기와 버튼 옵션을 지원합니다.
      </p>
      <h2 className="text-[#2D3748]"> 2.1. Import</h2>
      <CodeBox
        code={`import { FormModal } from '@componique/react';`}
        copyText={`import { FormModal } from '@components/Modal/FormModal';`}
        language="tsx"
        index={1}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">2.2. Usage</h2>
      <p>
        아래는 <code>FormModal</code> 컴포넌트의 기본 사용 예제입니다:
      </p>
      <Button
        onClick={() => openModal2(1, "medium")}
        className="rounded-md bg-Basic px-4 py-2 text-white"
      >
        Open Form Modal 1
      </Button>
      <Button
        onClick={() => openModal2(2, "large")}
        className="rounded-md bg-Basic px-4 py-2 text-white"
      >
        Open Form Modal 2
      </Button>
      <FormModal
        open={openModalKey === 1}
        onClose={closeModal2}
        size={modalSize2}
        title="Form Modal 1"
        onSubmit={closeModal2}
        firstNameLabel="First Name"
        lastNameLabel="Last Name"
      />
      <FormModal
        open={openModalKey === 2}
        onClose={closeModal2}
        size={modalSize2}
        title="Form Modal 2"
        onSubmit={closeModal2}
        firstNameLabel="First Name"
        lastNameLabel="Last Name"
      />

      <CodeBox
        code={`import { FormModal } from '@components/Modal/FormModal';
import { useState } from 'react';
import Button from '@components/Button/Button';

function Example() {
  const [openModalKey, setOpenModalKey] = useState<number | null>(null);
  const [modalSize, setModalSize] = useState<ExtraSize>("medium");

  const openModal = (key: number, size: ExtraSize) => {
    setModalSize(size);
    setOpenModalKey(key);
  };

  const closeModal = () => setOpenModalKey(null);

  return (
    <>
      <Button onClick={() => openModal(1, "medium")}>
        Open Form Modal 1
      </Button>
      <Button onClick={() => openModal(2, "large")}>
        Open Form Modal 2
      </Button>

      <FormModal
        open={openModalKey === 1}
        onClose={closeModal}
        size={modalSize}
        title="Form Modal 1"
        onSubmit={(data) => console.log("Form 1 Submitted", data)}
        firstNameLabel="First Name"
        lastNameLabel="Last Name"
      />

      <FormModal
        open={openModalKey === 2}
        onClose={closeModal}
        size={modalSize}
        title="Form Modal 2"
        onSubmit={(data) => console.log("Form 2 Submitted", data)}
        firstNameLabel="First Name"
        lastNameLabel="Last Name"
      />
    </>
  );
}

export default Example;`}
        copyText={`import { FormModal } from '@components/Modal/FormModal';
import { useState } from 'react';
import Button from '@components/Button/Button';

function Example() {
  const [openModalKey, setOpenModalKey] = useState<number | null>(null);
  const [modalSize, setModalSize] = useState<ExtraSize>("medium");

  const openModal = (key: number, size: ExtraSize) => {
    setModalSize(size);
    setOpenModalKey(key);
  };

  const closeModal = () => setOpenModalKey(null);

  return (
    <>
      <Button onClick={() => openModal(1, "medium")}>
        Open Form Modal 1
      </Button>
      <Button onClick={() => openModal(2, "large")}>
        Open Form Modal 2
      </Button>

      <FormModal
        open={openModalKey === 1}
        onClose={closeModal}
        size={modalSize}
        title="Form Modal 1"
        onSubmit={(data) => console.log("Form 1 Submitted", data)}
        firstNameLabel="First Name"
        lastNameLabel="Last Name"
      />

      <FormModal
        open={openModalKey === 2}
        onClose={closeModal}
        size={modalSize}
        title="Form Modal 2"
        onSubmit={(data) => console.log("Form 2 Submitted", data)}
        firstNameLabel="First Name"
        lastNameLabel="Last Name"
      />
    </>
  );
}

export default Example;`}
        language="tsx"
        index={2}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">
        2.3. Changing the Size of the FormModal
      </h2>
      <p>
        <code>FormModal</code> 컴포넌트는 다양한 크기로 제공됩니다. 기본 크기는{" "}
        <code>medium</code>입니다:
      </p>
      <ul>
        <li>
          <code>xs</code>: 아주 작은 크기
        </li>
        <li>
          <code>small</code>: 작은 크기
        </li>
        <li>
          <code>medium</code>: 중간 크기 (기본값)
        </li>
        <li>
          <code>large</code>: 큰 크기
        </li>
        <li>
          <code>xl</code>: 아주 큰 크기
        </li>
      </ul>
      <Button className="mr-3" onClick={() => openModal2(1, "xs")}>
        Open xs FormModal
      </Button>
      <Button onClick={() => openModal2(2, "xl")}>Open xl FormModal</Button>
      <FormModal
        open={openModalKey2 === 1}
        onClose={closeModal2}
        size={modalSize2}
        title="Form Modal XS"
        onSubmit={closeModal2}
        firstNameLabel="First Name"
        lastNameLabel="Last Name"
      />
      <FormModal
        open={openModalKey2 === 2}
        onClose={closeModal2}
        size={modalSize2}
        title="Form Modal XL"
        onSubmit={closeModal2}
        firstNameLabel="First Name"
        lastNameLabel="Last Name"
      />

      <CodeBox
        code={`import { FormModal } from '@components/Modal/FormModal';
import { useState } from 'react';
import Button from '@components/Button/Button';

function Example() {
  const [openModalKey, setOpenModalKey] = useState<number | null>(null);
  const [modalSize, setModalSize] = useState<ExtraSize>("medium");

  const openModal = (key: number, size: ExtraSize) => {
    setModalSize(size);
    setOpenModalKey(key);
  };

  const closeModal = () => setOpenModalKey(null);

  return (
    <>
      <Button onClick={() => openModal(1, "xs")}>Open xs FormModal</Button>
      <Button onClick={() => openModal(2, "xl")}>Open xl FormModal</Button>

      <FormModal
        open={openModalKey === 1}
        onClose={closeModal}
        size={modalSize}
        title="Form Modal XS"
        onSubmit={(data) => console.log("XS Modal Submitted", data)}
        firstNameLabel="First Name"
        lastNameLabel="Last Name"
      />

      <FormModal
        open={openModalKey === 2}
        onClose={closeModal}
        size={modalSize}
        title="Form Modal XL"
        onSubmit={(data) => console.log("XL Modal Submitted", data)}
        firstNameLabel="First Name"
        lastNameLabel="Last Name"
      />
    </>
  );
}

export default Example;`}
        copyText={`import { FormModal } from '@components/Modal/FormModal';
import { useState } from 'react';
import Button from '@components/Button/Button';

function Example() {
  const [openModalKey, setOpenModalKey] = useState<number | null>(null);
  const [modalSize, setModalSize] = useState<ExtraSize>("medium");

  const openModal = (key: number, size: ExtraSize) => {
    setModalSize(size);
    setOpenModalKey(key);
  };

  const closeModal = () => setOpenModalKey(null);

  return (
    <>
      <Button onClick={() => openModal(1, "xs")}>Open xs FormModal</Button>
      <Button onClick={() => openModal(2, "xl")}>Open xl FormModal</Button>

      <FormModal
        open={openModalKey === 1}
        onClose={closeModal}
        size={modalSize}
        title="Form Modal XS"
        onSubmit={(data) => console.log("XS Modal Submitted", data)}
        firstNameLabel="First Name"
        lastNameLabel="Last Name"
      />

      <FormModal
        open={openModalKey === 2}
        onClose={closeModal}
        size={modalSize}
        title="Form Modal XL"
        onSubmit={(data) => console.log("XL Modal Submitted", data)}
        firstNameLabel="First Name"
        lastNameLabel="Last Name"
      />
    </>
  );
}

export default Example;`}
        language="tsx"
        index={3}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">2.4. Props</h2>
      <p>
        <code>FormModal</code> 컴포넌트는 아래와 같은 Props를 가집니다:
      </p>
      <table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>open</code>
            </td>
            <td>모달이 열려 있는지 여부를 제어합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>size</code>
            </td>
            <td>모달의 크기를 설정합니다.</td>
            <td>
              <code>"xs" | "small" | "medium" | "large" | "xl"</code>
            </td>
            <td>
              <code>"large"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onClose</code>
            </td>
            <td>모달이 닫힐 때 호출되는 함수입니다.</td>
            <td>
              <code>() =&gt; void</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>title</code>
            </td>
            <td>모달 상단의 제목을 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>"Create your account"</td>
          </tr>
          <tr>
            <td>
              <code>onSubmit</code>
            </td>
            <td>폼이 제출될 때 호출되는 함수입니다.</td>
            <td>
              <code>
                (data: &#123; firstName: string; lastName: string &#125;) =&gt;
                void
              </code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>firstNameLabel</code>
            </td>
            <td>첫 번째 입력 필드의 라벨 텍스트를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>"First Name"</td>
          </tr>
          <tr>
            <td>
              <code>lastNameLabel</code>
            </td>
            <td>두 번째 입력 필드의 라벨 텍스트를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>"Last Name"</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">2.5. Full Example</h2>
      <CodeBox
        code={`import { FormModal } from '@components/Modal/FormModal';
import { useState } from 'react';
import Button from '@components/Button/Button';

function Example() {
  const [openModalKey, setOpenModalKey] = useState<number | null>(null);
  const [modalSize, setModalSize] = useState<ExtraSize>("large");

  const openModal = (key: number, size: ExtraSize) => {
    setModalSize(size);
    setOpenModalKey(key);
  };

  const closeModal = () => setOpenModalKey(null);

  return (
    <>
      <Button onClick={() => openModal(1, "medium")}>
        Open Full Example Modal 1
      </Button>
      <Button onClick={() => openModal(2, "large")}>
        Open Full Example Modal 2
      </Button>

      <FormModal
        open={openModalKey === 1}
        onClose={closeModal}
        size={modalSize}
        title="Full Example Modal 1"
        onSubmit={(data) => console.log("Full Example 1 Submitted", data)}
        firstNameLabel="First Name"
        lastNameLabel="Last Name"
      />

      <FormModal
        open={openModalKey === 2}
        onClose={closeModal}
        size={modalSize}
        title="Full Example Modal 2"
        onSubmit={(data) => console.log("Full Example 2 Submitted", data)}
        firstNameLabel="First Name"
        lastNameLabel="Last Name"
      />
    </>
  );
}

export default Example;`}
        copyText={`import { FormModal } from '@components/Modal/FormModal';
import { useState } from 'react';
import Button from '@components/Button/Button';

function Example() {
  const [openModalKey, setOpenModalKey] = useState<number | null>(null);
  const [modalSize, setModalSize] = useState<ExtraSize>("large");

  const openModal = (key: number, size: ExtraSize) => {
    setModalSize(size);
    setOpenModalKey(key);
  };

  const closeModal = () => setOpenModalKey(null);

  return (
    <>
      <Button onClick={() => openModal(1, "medium")}>
        Open Full Example Modal 1
      </Button>
      <Button onClick={() => openModal(2, "large")}>
        Open Full Example Modal 2
      </Button>

      <FormModal
        open={openModalKey === 1}
        onClose={closeModal}
        size={modalSize}
        title="Full Example Modal 1"
        onSubmit={(data) => console.log("Full Example 1 Submitted", data)}
        firstNameLabel="First Name"
        lastNameLabel="Last Name"
      />

      <FormModal
        open={openModalKey === 2}
        onClose={closeModal}
        size={modalSize}
        title="Full Example Modal 2"
        onSubmit={(data) => console.log("Full Example 2 Submitted", data)}
        firstNameLabel="First Name"
        lastNameLabel="Last Name"
      />
    </>
  );
}

export default Example;`}
        language="tsx"
        index={5}
        copied={copied}
        handleCopy={handleCopy}
      />
      <hr />
      <h1 className="text-[#2D3748]">3. OverlayModal</h1>
      <p>
        <code>OverlayModal</code> 컴포넌트는 페이지 구조와 독립적으로 관리되는
        오버레이 모달입니다. 다양한 크기와 버튼 옵션을 지원합니다.
      </p>
      <h2 className="text-[#2D3748]"> 3.1. Import</h2>
      <CodeBox
        code={`import { OverlayModal } from '@componique/react';`}
        copyText={`import { OverlayModal } from '@components/Modal/OverlayModal';`}
        language="tsx"
        index={1}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">3.2. Usage</h2>
      <p>
        아래는 <code>OverlayModal</code> 컴포넌트의 기본 사용 예제입니다:
      </p>
      <Button
        onClick={() => openModal3(1, "small")}
        className="mr-3 rounded-md bg-Basic px-4 py-2 text-white"
      >
        Open Overlay Modal
      </Button>
      <OverlayModal
        isOpen={openModalKey3 === 1}
        onClose={closeModal3}
        title="Overlay Modal"
        closeButtonText="Close"
        showCloseIcon={true}
      >
        <p>This is basic overlay modal content.</p>
      </OverlayModal>

      <CodeBox
        code={`import { OverlayModal } from '@components/Modal/OverlayModal';
import { useState } from 'react';
import Button from '@components/Button/Button';

function Example() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSize, setModalSize] = useState<ExtraSize>("small");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button variant="border" onClick={handleOpenModal}>
      Open overlay Modal
      </Button>

      <OverlayModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Sample Modal"
        closeButtonText="Close"
        showCloseIcon={true}
      >
      <p>This is a overlayModal content.</p>
      </OverlayModal>
    </>
  );
}

export default Example;`}
        copyText={`import { OverlayModal } from '@components/Modal/OverlayModal';
        import { useState } from 'react';
        import Button from '@components/Button/Button';
        
        function Example() {
          const [isModalOpen, setIsModalOpen] = useState(false);
          const [modalSize, setModalSize] = useState<ExtraSize>("small");
        
          const handleOpenModal = () => {
            setIsModalOpen(true);
          };
        
        
          const handleCloseModal = () => {
            setIsModalOpen(false);
          };
        
          return (
            <>
              <Button variant="border" onClick={handleOpenModal}>
              Open overlay Modal
              </Button>
        
              <OverlayModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title="Sample Modal"
                closeButtonText="Close"
                showCloseIcon={true}
              >
              <p>This is a overlayModal content.</p>
              </OverlayModal>
            </>
          );
        }
        
        export default Example;`}
        language="tsx"
        index={2}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">
        3.3. Changing the Size of the OverlayModal
      </h2>
      <p>
        <code>OverlayModal</code> 컴포넌트는 다양한 크기로 제공됩니다. 기본
        크기는 <code>small</code>입니다:
      </p>
      <ul>
        <li>
          <code>xs</code>: 아주 작은 크기
        </li>
        <li>
          <code>small</code>: 작은 크기 (기본값)
        </li>
        <li>
          <code>medium</code>: 중간 크기
        </li>
        <li>
          <code>large</code>: 큰 크기
        </li>
        <li>
          <code>xl</code>: 아주 큰 크기
        </li>
        <li>
          <code>full</code>: 전체 화면 크기
        </li>
      </ul>
      <Button onClick={() => openModal3(2, "xs")}>Open XS OverlayModal</Button>
      <Button onClick={() => openModal3(3, "xl")} className="ml-3">
        Open XL OverlayModal
      </Button>
      <OverlayModal
        isOpen={openModalKey3 === 2}
        onClose={closeModal3}
        size="xs"
        title="XS Overlay Modal"
        closeButtonText="Close"
        showCloseIcon={true}
      >
        <p>
          Magna exercitation reprehenderit magna aute tempor cupidatat consequat
          elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum
          quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do
          dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum
          eiusmod pariatur proident Lorem eiusmod et. Magna exercitation
          reprehenderit magna aute tempor cupidatat consequat elit dolor
          adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
          Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
          eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod
          pariatur proident Lorem eiusmod et. Magna exercitation reprehenderit
          magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit
          dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
          eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit
          incididunt nisi consectetur esse laborum eiusmod pariatur proident
          Lorem eiusmod et. Magna
        </p>
      </OverlayModal>
      <OverlayModal
        isOpen={openModalKey3 === 3}
        onClose={closeModal3}
        size="xl"
        title="XL Overlay Modal"
        closeButtonText="Close"
        showCloseIcon={true}
      >
        <p>
          Magna exercitation reprehenderit magna aute tempor cupidatat consequat
          elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum
          quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do
          dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum
          eiusmod pariatur proident Lorem eiusmod et. Magna exercitation
          reprehenderit magna aute tempor cupidatat consequat elit dolor
          adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
          Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
          eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod
          pariatur proident Lorem eiusmod et. Magna exercitation reprehenderit
          magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit
          dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
          eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit
          incididunt nisi consectetur esse laborum eiusmod pariatur proident
          Lorem eiusmod et. Magna
        </p>
      </OverlayModal>

      <CodeBox
        code={`import { OverlayModal } from '@components/Modal/OverlayModal';
import { useState } from 'react';
import Button from '@components/Button/Button';

function Example() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSize, setModalSize] = useState<ExtraSize>("medium");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button variant="border" onClick={handleOpenModal}>
      Open xl overlay Modal
      </Button>

      <OverlayModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="XL Overlay Modal"
        closeButtonText="Close"
        showCloseIcon={true}
      >
      <p>Magna exercitation reprehenderit magna aute tempor cupidatat consequat
      elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum
      quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do
      dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum
      eiusmod pariatur proident Lorem eiusmod et. Magna exercitation
      reprehenderit magna aute tempor cupidatat consequat elit dolor
      adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
      Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
      eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod
      pariatur proident Lorem eiusmod et. Magna exercitation reprehenderit
      magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit
      dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
      eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit
      incididunt nisi consectetur esse laborum eiusmod pariatur proident
      Lorem eiusmod et. Magna</p>
      </OverlayModal>
    </>
  );
}

export default Example;`}
        copyText={`import { OverlayModal } from '@components/Modal/OverlayModal';
        import { useState } from 'react';
        import Button from '@components/Button/Button';
        
        function Example() {
          const [isModalOpen, setIsModalOpen] = useState(false);
          const [modalSize, setModalSize] = useState<ExtraSize>(medium");
        
          const handleOpenModal = () => {
            setIsModalOpen(true);
          };
        
        
          const handleCloseModal = () => {
            setIsModalOpen(false);
          };
        
          return (
            <>
            <Button variant="border" onClick={handleOpenModal}>
            Open xl overlay Modal
            </Button>
      
            <OverlayModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              title="XL Overlay Modal"
              closeButtonText="Close"
              showCloseIcon={true}
            >
            <p>Magna exercitation reprehenderit magna aute tempor cupidatat consequat
            elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum
            quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do
            dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum
            eiusmod pariatur proident Lorem eiusmod et. Magna exercitation
            reprehenderit magna aute tempor cupidatat consequat elit dolor
            adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
            Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
            eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod
            pariatur proident Lorem eiusmod et. Magna exercitation reprehenderit
            magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit
            dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
            eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit
            incididunt nisi consectetur esse laborum eiusmod pariatur proident
            Lorem eiusmod et. Magna</p>
            </OverlayModal>
          </>
          );
        }
        
        export default Example;`}
        language="tsx"
        index={3}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">3.4. Props</h2>
      <p>
        <code>OverlayModal</code> 컴포넌트는 아래와 같은 Props를 가집니다:
      </p>
      <table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>isOpen</code>
            </td>
            <td>모달이 열려 있는지 여부를 제어합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>onClose</code>
            </td>
            <td>모달이 닫힐 때 호출되는 함수입니다.</td>
            <td>
              <code>() =&gt; void</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>children</code>
            </td>
            <td>모달 내부에 표시할 내용을 지정합니다.</td>
            <td>
              <code>ReactNode</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>title</code>
            </td>
            <td>모달 상단의 제목을 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>size</code>
            </td>
            <td>모달의 크기를 설정합니다.</td>
            <td>
              <code>"xs" | "small" | "medium" | "large" | "xl" | "full"</code>
            </td>
            <td>
              <code>"small"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>closeOnOverlayClick</code>
            </td>
            <td>오버레이 클릭 시 모달을 닫을지 여부를 설정합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>true</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>closeButtonText</code>
            </td>
            <td>닫기 버튼의 텍스트를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"Close"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>className</code>
            </td>
            <td>추가적인 CSS 클래스를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>showCloseIcon</code>
            </td>
            <td>닫기 아이콘을 표시할지 여부를 설정합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>true</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">3.5. Full Example</h2>
      <CodeBox
        code={`import { OverlayModal } from '@components/Modal/OverlayModal';
import { useState } from 'react';
import Button from '@components/Button/Button';

function Example() {
  const [openModalKey, setOpenModalKey] = useState<number | null>(null);
  const [modalSize, setModalSize] = useState<ExtraSize>("small");

  const openModal = (key: number, size: ExtraSize) => {
    setModalSize(size);
    setOpenModalKey(key);
  };

  const closeModal = () => setOpenModalKey(null);

  return (
    <>
      <Button onClick={() => openModal(1, "medium")}>
        Open Full Example Overlay Modal 1
      </Button>
      <Button onClick={() => openModal(2, "large")}>
        Open Full Example Overlay Modal 2
      </Button>

      <OverlayModal
        isOpen={openModalKey === 1}
        onClose={closeModal}
        size={modalSize}
        title="Full Example Overlay Modal 1"
        closeButtonText="Close"
        showCloseIcon={true}
      >
        <p>This is a full example of overlay modal 1.</p>
      </OverlayModal>

      <OverlayModal
        isOpen={openModalKey === 2}
        onClose={closeModal}
        size={modalSize}
        title="Full Example Overlay Modal 2"
        closeButtonText="Close"
        showCloseIcon={true}
      >
        <p>This is a full example of overlay modal 2.</p>
      </OverlayModal>
    </>
  );
}

export default Example;`}
        copyText={`import { OverlayModal } from '@components/Modal/OverlayModal';
import { useState } from 'react';
import Button from '@components/Button/Button';

function Example() {
  const [openModalKey, setOpenModalKey] = useState<number | null>(null);
  const [modalSize, setModalSize] = useState<ExtraSize>("small");

  const openModal = (key: number, size: ExtraSize) => {
    setModalSize(size);
    setOpenModalKey(key);
  };

  const closeModal = () => setOpenModalKey(null);

  return (
    <>
      <Button onClick={() => openModal(1, "medium")}>
        Open Full Example Overlay Modal 1
      </Button>
      <Button onClick={() => openModal(2, "large")}>
        Open Full Example Overlay Modal 2
      </Button>

      <OverlayModal
        isOpen={openModalKey === 1}
        onClose={closeModal}
        size={modalSize}
        title="Full Example Overlay Modal 1"
        closeButtonText="Close"
        showCloseIcon={true}
      >
        <p>This is a full example of overlay modal 1.</p>
      </OverlayModal>

      <OverlayModal
        isOpen={openModalKey === 2}
        onClose={closeModal}
        size={modalSize}
        title="Full Example Overlay Modal 2"
        closeButtonText="Close"
        showCloseIcon={true}
      >
        <p>This is a full example of overlay modal 2.</p>
      </OverlayModal>
    </>
  );
}

export default Example;`}
        language="tsx"
        index={5}
        copied={copied}
        handleCopy={handleCopy}
      />
    </div>
  );
};

export default ModalDoc;
