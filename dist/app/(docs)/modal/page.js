"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const BasicModal_1 = __importDefault(require("@components/Modal/BasicModal"));
const Button_1 = __importDefault(require("@components/Button/Button"));
const FormModal_1 = __importDefault(require("@components/Modal/FormModal"));
const OverlayModal_1 = __importDefault(require("@components/Modal/OverlayModal"));
const ModalDoc = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const [isOpen, setIsOpen] = (0, react_1.useState)(false); //모달
    const [modalSize, setModalSize] = (0, react_1.useState)("medium");
    const [openModalKey, setOpenModalKey] = (0, react_1.useState)(null);
    const [modalSize2, setModalSize2] = (0, react_1.useState)("medium");
    const [openModalKey2, setOpenModalKey2] = (0, react_1.useState)(null);
    const [openModalKey3, setOpenModalKey3] = (0, react_1.useState)(null);
    const [modalSize3, setModalSize3] = (0, react_1.useState)("small");
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    //베이직 모달
    const openModal = (size) => {
        setModalSize(size);
        setIsOpen(true);
    };
    const closeModal = () => setIsOpen(false);
    const sizes = [
        "xs",
        "small",
        "medium",
        "large",
        "xl",
        "full",
    ];
    //폼모달
    const openModal2 = (key, size) => {
        setModalSize2(size);
        setOpenModalKey2(key);
    };
    const closeModal2 = () => setOpenModalKey2(null);
    //오버레이 모달
    const openModal3 = (key, size) => {
        setModalSize3(size);
        setOpenModalKey3(key);
    };
    const closeModal3 = () => setOpenModalKey3(null);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose mb-40 max-w-[850px] text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. Modal" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Modal" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC778\uD130\uD398\uC774\uC2A4\uC640 \uC0C1\uD638\uC791\uC6A9\uD558\uB294 \uB3D9\uC548 \uC911\uC694\uD55C \uC815\uBCF4\uB97C \uD45C\uC2DC\uD558\uAC70\uB098 \uACB0\uC815\uC744 \uC694\uCCAD\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uD06C\uAE30\uC640 \uBC84\uD2BC \uC635\uC158\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: " 1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { BasicModal } from '@componique/react';`, copyText: `import { BasicModal } from '@components/Modal/BasicModal';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC544\uB798\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "Modal" }), " \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => openModal("medium"), className: "rounded-md bg-Basic px-4 py-2 text-white", children: "Open Basic Modal" }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { BasicModal } from '@components/Modal/BasicModal';
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

export default Example;`, copyText: `import { BasicModal } from '@components/Modal/BasicModal';
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
        
        export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.3. Changing the Size of the Modal" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Modal" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD06C\uAE30\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uD06C\uAE30\uB294", " ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "xs" }), ": \uC544\uC8FC \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "small" }), ": \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "medium" }), ": \uC911\uAC04 \uD06C\uAE30 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "large" }), ": \uD070 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "xl" }), ": \uC544\uC8FC \uD070 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "full" }), ": \uC804\uCCB4 \uD654\uBA74 \uD06C\uAE30"] })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-x-2 space-y-4", children: sizes.map((size) => ((0, jsx_runtime_1.jsx)(Button_1.default, { onClick: () => openModal(size), children: `Open ${size} Modal` }, size))) }), (0, jsx_runtime_1.jsxs)(BasicModal_1.default, { open: isOpen, size: modalSize, onClose: closeModal, primaryButton: {
                    text: "Okay",
                    variant: "primary",
                    onClick: closeModal,
                }, secondaryButton: {
                    text: "Close",
                    variant: "secondary",
                    onClick: closeModal,
                }, showCloseIcon: true, children: [(0, jsx_runtime_1.jsxs)("h2", { className: "mb-4 text-lg font-bold", children: ["Modal Size: ", modalSize] }), (0, jsx_runtime_1.jsx)("p", { children: "Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et." })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { BasicModal } from '@components/Modal/BasicModal';
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
        
        export default Example;`, copyText: `import { BasicModal } from '@components/Modal/BasicModal';
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
        
        export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.4. Using Primary and Secondary Buttons" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { BasicModal } from '@components/Modal/BasicModal';
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

export default Example;`, copyText: `import { BasicModal } from '@components/Modal/BasicModal';
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

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.5. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Modal" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "open" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBAA8\uB2EC\uC774 \uC5F4\uB824 \uC788\uB294\uC9C0 \uC5EC\uBD80\uB97C \uC81C\uC5B4\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBAA8\uB2EC\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"xs\" | \"small\" | \"medium\" | \"large\" | \"xl\" | \"full\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onClose" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBAA8\uB2EC\uC774 \uB2EB\uD790 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "() => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "children" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBAA8\uB2EC \uB0B4\uBD80\uC5D0 \uD45C\uC2DC\uD560 \uB0B4\uC6A9\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "React.ReactNode" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "primaryButton" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBAA8\uB2EC \uD558\uB2E8\uC5D0 \uD45C\uC2DC\uB420 primary \uBC84\uD2BC\uC758 \uC124\uC815\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "ButtonProps" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "secondaryButton" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBAA8\uB2EC \uD558\uB2E8\uC5D0 \uD45C\uC2DC\uB420 secondary \uBC84\uD2BC\uC758 \uC124\uC815\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "ButtonProps" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "showCloseIcon" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB2EB\uAE30 \uC544\uC774\uCF58\uC744 \uD45C\uC2DC\uD560\uC9C0 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "true" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.6. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { BasicModal } from '@components/Modal/BasicModal';
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

export default Example;`, copyText: `import { BasicModal } from '@components/Modal/BasicModal';
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

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "2. FormModal" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "FormModal" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790 \uC785\uB825\uC744 \uC218\uC9D1\uD558\uAE30 \uC704\uD55C \uD3FC\uC744 \uD3EC\uD568\uD55C \uBAA8\uB2EC\uC785\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uD06C\uAE30\uC640 \uBC84\uD2BC \uC635\uC158\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: " 2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { FormModal } from '@componique/react';`, copyText: `import { FormModal } from '@components/Modal/FormModal';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.2. Usage" }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC544\uB798\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "FormModal" }), " \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-x-2 space-y-4", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { onClick: () => openModal2(1, "medium"), className: "rounded-md bg-Basic px-4 py-2 text-white", children: "Open Form Modal" }), (0, jsx_runtime_1.jsx)(FormModal_1.default, { open: openModalKey2 === 1, onClose: closeModal2, size: modalSize2, title: "Form Modal", onSubmit: closeModal2, firstNameLabel: "First Name", lastNameLabel: "Last Name" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { FormModal } from '@components/Modal/FormModal';
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
        Open Form Modal
      </Button>

      <FormModal
        open={openModalKey === 1}
        onClose={closeModal}
        size={modalSize}
        title="Form Modal"
        onSubmit={(data) => console.log("Form Submitted", data)}
        firstNameLabel="First Name"
        lastNameLabel="Last Name"
      />
    </>
  );
}

export default Example;`, copyText: `import { FormModal } from '@components/Modal/FormModal';
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
                Open Form Modal
              </Button>
        
              <FormModal
                open={openModalKey === 1}
                onClose={closeModal}
                size={modalSize}
                title="Form Modal"
                onSubmit={(data) => console.log("Form Submitted", data)}
                firstNameLabel="First Name"
                lastNameLabel="Last Name"
              />
            </>
          );
        }
        
        export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.3. Changing the Size of the FormModal" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "FormModal" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD06C\uAE30\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uD06C\uAE30\uB294", " ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "xs" }), ": \uC544\uC8FC \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "small" }), ": \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "medium" }), ": \uC911\uAC04 \uD06C\uAE30 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "large" }), ": \uD070 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "xl" }), ": \uC544\uC8FC \uD070 \uD06C\uAE30"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-x-2 space-y-4", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { className: "mr-3", onClick: () => openModal2(2, "xs"), children: "Open XS FormModal" }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: () => openModal2(3, "xl"), children: "Open XL FormModal" })] }), (0, jsx_runtime_1.jsx)(FormModal_1.default, { open: openModalKey2 === 2, onClose: closeModal2, size: modalSize2, title: "Form Modal XS", onSubmit: closeModal2, firstNameLabel: "First Name", lastNameLabel: "Last Name" }), (0, jsx_runtime_1.jsx)(FormModal_1.default, { open: openModalKey2 === 3, onClose: closeModal2, size: modalSize2, title: "Form Modal XL", onSubmit: closeModal2, firstNameLabel: "First Name", lastNameLabel: "Last Name" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { FormModal } from '@components/Modal/FormModal';
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

export default Example;`, copyText: `import { FormModal } from '@components/Modal/FormModal';
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

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "FormModal" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "open" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBAA8\uB2EC\uC774 \uC5F4\uB824 \uC788\uB294\uC9C0 \uC5EC\uBD80\uB97C \uC81C\uC5B4\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBAA8\uB2EC\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"xs\" | \"small\" | \"medium\" | \"large\" | \"xl\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"large\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onClose" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBAA8\uB2EC\uC774 \uB2EB\uD790 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "() => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "title" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBAA8\uB2EC \uC0C1\uB2E8\uC758 \uC81C\uBAA9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\"Create your account\"" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onSubmit" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD3FC\uC774 \uC81C\uCD9C\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(data: { firstName: string; lastName: string }) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "firstNameLabel" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCCAB \uBC88\uC9F8 \uC785\uB825 \uD544\uB4DC\uC758 \uB77C\uBCA8 \uD14D\uC2A4\uD2B8\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\"First Name\"" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "lastNameLabel" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB450 \uBC88\uC9F8 \uC785\uB825 \uD544\uB4DC\uC758 \uB77C\uBCA8 \uD14D\uC2A4\uD2B8\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\"Last Name\"" })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { FormModal } from '@components/Modal/FormModal';
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

export default Example;`, copyText: `import { FormModal } from '@components/Modal/FormModal';
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

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "3. OverlayModal" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "OverlayModal" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uD398\uC774\uC9C0 \uAD6C\uC870\uC640 \uB3C5\uB9BD\uC801\uC73C\uB85C \uAD00\uB9AC\uB418\uB294 \uC624\uBC84\uB808\uC774 \uBAA8\uB2EC\uC785\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uD06C\uAE30\uC640 \uBC84\uD2BC \uC635\uC158\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: " 3.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { OverlayModal } from '@componique/react';`, copyText: `import { OverlayModal } from '@components/Modal/OverlayModal';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.2. Usage" }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC544\uB798\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "OverlayModal" }), " \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-x-2 space-y-4", children: (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: () => openModal3(1, "small"), className: "mr-3 rounded-md bg-Basic px-4 py-2 text-white", children: "Open Overlay Modal" }) }), (0, jsx_runtime_1.jsx)(OverlayModal_1.default, { isOpen: openModalKey3 === 1, onClose: closeModal3, title: "Overlay Modal", closeButtonText: "Close", showCloseIcon: true, children: (0, jsx_runtime_1.jsx)("p", { children: "This is basic overlay modal content." }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { OverlayModal } from '@components/Modal/OverlayModal';
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

export default Example;`, copyText: `import { OverlayModal } from '@components/Modal/OverlayModal';
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
        
        export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.3. Changing the Size of the OverlayModal" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "OverlayModal" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD06C\uAE30\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uD06C\uAE30\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "small" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "xs" }), ": \uC544\uC8FC \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "small" }), ": \uC791\uC740 \uD06C\uAE30 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "medium" }), ": \uC911\uAC04 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "large" }), ": \uD070 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "xl" }), ": \uC544\uC8FC \uD070 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "full" }), ": \uC804\uCCB4 \uD654\uBA74 \uD06C\uAE30"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-x-2 space-y-4", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { onClick: () => openModal3(2, "xs"), children: "Open XS OverlayModal" }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: () => openModal3(3, "xl"), className: "ml-3", children: "Open XL OverlayModal" })] }), (0, jsx_runtime_1.jsx)(OverlayModal_1.default, { isOpen: openModalKey3 === 2, onClose: closeModal3, size: "xs", title: "XS Overlay Modal", closeButtonText: "Close", showCloseIcon: true, children: (0, jsx_runtime_1.jsx)("p", { children: "Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Magna" }) }), (0, jsx_runtime_1.jsx)(OverlayModal_1.default, { isOpen: openModalKey3 === 3, onClose: closeModal3, size: "xl", title: "XL Overlay Modal", closeButtonText: "Close", showCloseIcon: true, children: (0, jsx_runtime_1.jsx)("p", { children: "Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Magna" }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { OverlayModal } from '@components/Modal/OverlayModal';
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

export default Example;`, copyText: `import { OverlayModal } from '@components/Modal/OverlayModal';
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
        
        export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "OverlayModal" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "isOpen" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBAA8\uB2EC\uC774 \uC5F4\uB824 \uC788\uB294\uC9C0 \uC5EC\uBD80\uB97C \uC81C\uC5B4\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onClose" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBAA8\uB2EC\uC774 \uB2EB\uD790 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "() => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "children" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBAA8\uB2EC \uB0B4\uBD80\uC5D0 \uD45C\uC2DC\uD560 \uB0B4\uC6A9\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "ReactNode" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "title" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBAA8\uB2EC \uC0C1\uB2E8\uC758 \uC81C\uBAA9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBAA8\uB2EC\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"xs\" | \"small\" | \"medium\" | \"large\" | \"xl\" | \"full\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "closeOnOverlayClick" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC624\uBC84\uB808\uC774 \uD074\uB9AD \uC2DC \uBAA8\uB2EC\uC744 \uB2EB\uC744\uC9C0 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "true" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "closeButtonText" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB2EB\uAE30 \uBC84\uD2BC\uC758 \uD14D\uC2A4\uD2B8\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Close\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "className" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCD94\uAC00\uC801\uC778 CSS \uD074\uB798\uC2A4\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "showCloseIcon" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB2EB\uAE30 \uC544\uC774\uCF58\uC744 \uD45C\uC2DC\uD560\uC9C0 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "true" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { OverlayModal } from '@components/Modal/OverlayModal';
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

export default Example;`, copyText: `import { OverlayModal } from '@components/Modal/OverlayModal';
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

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy })] }));
};
exports.default = ModalDoc;
