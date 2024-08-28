"use client";

import React, { useState } from "react";
import Button from "@components/Button/Button";
import ToastGroup from "@components/Toast/ToastGroup";
import CodeBox from "@components/CodeBox";
import { useRouter } from "next/navigation";

const ToastGroupDocs: React.FC = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});
  const [isToastGroupOpen, setIsToastGroupOpen] = useState(false);
  const [showToastGroup, setShowToastGroup] = useState(false);
  const [showToastGroup2, setShowToastGroup2] = useState(false);
  const handleCopy = (index: number) => {
    setCopied((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
  };

  const allToastsCloseHandler = () => {
    setShowToastGroup(false);
  };

  const handleClick = () => {
    setIsToastGroupOpen(true); // 클릭 시 ToastGroup을 다시 활성화
  };

  const router = useRouter();

  return (
    <div className="prose max-w-[1000px] p-5 text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">ToastGroup</h1>
      <p>
        <code>ToastGroup</code> 컴포넌트는 여러 개의 Toast를 그룹화하여
        순차적으로 표시하는 기능을 제공합니다. 이 컴포넌트를 사용하면 다양한
        알림 메시지를 시간차로 표시할 수 있습니다.
      </p>
      <h2 className="text-[#2D3748]">Import</h2>
      <CodeBox
        code={`import ToastGroup from "@components/Toast/ToastGroup";`}
        copyText={`import ToastGroup from "@components/Toast/ToastGroup";`}
        language="tsx"
        index={1}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <p>
        아래 예제에서는 다양한 옵션을 가진 여러 개의 Toast가 순차적으로
        표시됩니다.
      </p>
      <Button onClick={handleClick}>Toast Group Open Button</Button>

      {isToastGroupOpen && (
        <ToastGroup
          position="rightTop"
          //모든 Toast가 닫혔을 때 호출되는 함수 전달
          onAllClosed={allToastsCloseHandler}
          toasts={[
            {
              children: "가입이 완료되었습니다.",
              time: "5",
              color: "yellow",
              variant: "border",
              isProgress: true,
            },
            {
              children: "로그인으로 이동합니다.",
              time: "6",
              color: "success",
              size: "large",
              variant: "border",
              path: "/login",
              isProgress: true,
            },
            {
              children: "로그아웃 되었습니다.",
              time: "7",
              color: "blue",
              size: "medium",
              variant: "solid",
            },
            {
              children: "종료 되었습니다.",
              time: "8",
              color: "red",
              size: "small",
              variant: "border",
              isProgress: true,
            },
          ]}
        />
      )}

      <CodeBox
        code={`"use client";
import ToastGroup from "@components/Toast/ToastGroup";
import { useState } from "react";
const ToastGroupExample = () => {
  const [showToastGroup, setShowToastGroup] = useState(true);
  const allToastsCloseHandler = () => {
    setShowToastGroup(false);
  };
  return (
    <>
      <ToastGroup
        position="rightTop"
        onAllClosed={allToastsCloseHandler}
        toasts={[
          {
            children: "가입이 완료되었습니다.",
            time: "5",
            color: "yellow",
            variant: "border",
            isProgress: true,
          },
          {
            children: "로그인으로 이동합니다.",
            time: "6",
            color: "success",
            size: "large",
            variant: "border",
            path: "/login",
            isProgress: true,
          },
          {
            children: "로그아웃 되었습니다.",
            time: "7",
            color: "blue",
            size: "medium",
            variant: "solid",
            isProgress: false,
          },
          {
            children: "종료 되었습니다.",
            time: "8",
            color: "red",
            size: "small",
            isProgress: true,
            variant: "border",
          },
        ]}
      />
    </>
  );
};
export default ToastGroupExample;
`}
        copyText={`"use client";
import ToastGroup from "@components/Toast/ToastGroup";
import { useState } from "react";
const ToastGroupExample = () => {
  const [showToastGroup, setShowToastGroup] = useState(true);
  const allToastsCloseHandler = () => {
    setShowToastGroup(false);
  };
  return (
    <>
      <ToastGroup
        position="rightTop"
        onAllClosed={allToastsCloseHandler}
        toasts={[
          {
            children: "가입이 완료되었습니다.",
            time: "5",
            color: "yellow",
            variant: "border",
            isProgress: true,
          },
          {
            children: "로그인으로 이동합니다.",
            time: "6",
            color: "success",
            size: "large",
            variant: "border",
            path: "/login",
            isProgress: true,
          },
          {
            children: "로그아웃 되었습니다.",
            time: "7",
            color: "blue",
            size: "medium",
            variant: "solid",
            isProgress: false,
          },
          {
            children: "종료 되었습니다.",
            time: "8",
            color: "red",
            size: "small",
            isProgress: true,
            variant: "border",
          },
        ]}
      />
    </>
  );
};
export default ToastGroupExample;
`}
        language="tsx"
        index={2}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h1 className="text-[#2D3748]">Position</h1>
      <p>
        <code>position</code> prop을 이용하여 Toast Group의 위치를 설정할 수
        있습니다.
      </p>
      <p>Toast Group에 한해서 개별 Toast의 위치는 따로 설정하실수 없습니다.</p>
      <p>
        기본 값은 <code>leftBottom</code> 이고, 가능한 값은 <code>leftTop</code>
        , <code>leftBottom</code>, <code>rightTop</code>,{" "}
        <code>rightBottom</code>, <code>centerTop</code>,{" "}
        <code>centerBottom</code>, <code>left</code>, <code>center</code>,{" "}
        <code>right</code> 입니다.
      </p>

      <h1>Toast Docs</h1>
      <p>
        Toast 컴포넌트에 대한 자세한 설명은 아래의 버튼을 클릭하면 이동합니다.
      </p>
      <Button
        onClick={() => {
          router.push("/toast");
        }}
      >
        Toast Docs로 이동
      </Button>
      <h1 className="text-[#2D3748]">Props</h1>
      <p>
        <code>ToastGroup</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>toasts</code>
            </td>
            <td>표시할 Toast들의 배열입니다.</td>
            <td>
              <code>ToastConfig[]</code>
            </td>
            <td>
              <code>[]</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>position</code>
            </td>
            <td>ToastGroup의 위치를 설정합니다.</td>
            <td>
              <code>
                "leftTop" | "leftBottom" | "rightTop" | "rightBottom" |
                "centerTop" | "centerBottom" | "left" | "right" | "center"
              </code>
            </td>
            <td>
              <code>"leftBottom"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onAllClosed</code>
            </td>
            <td>모든 Toast가 닫혔을 때 호출되는 콜백 함수입니다.</td>
            <td>
              <code>() =&gt; void</code>
            </td>
            <td>
              <code>undefined</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ToastGroupDocs;
