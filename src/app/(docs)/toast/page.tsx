"use client";

import React, { useState } from "react";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import CodeBox from "@components/CodeBox";
import { useRouter } from "next/navigation";
const ToastDocs: React.FC = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [isPositionToastOpen, setIsPositionToastOpen] = useState(false);
  const [isColorToastOpen, setIsColorToastOpen] = useState(false);
  const [isVariantToastOpen, setIsVariantToastOpen] = useState(false);
  const [isProgressToastOpen, setIsProgressToastOpen] = useState(false);
  const [isTimeToastOpen, setIsTimeToastOpen] = useState(false);
  const [isClassNameToastOpen, setIsClassNameToastOpen] = useState(false);
  const [isTimeProgressToastOpen, setIsTimeProgressToastOpen] = useState(false);
  const [isCloseButtonToastOpen, setIsCloseButtonToastOpen] = useState(false);

  const handleCopy = (index: number) => {
    setCopied((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
  };

  /* const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };*/

  const onclickToastHandler =
    (setOpen: React.Dispatch<React.SetStateAction<boolean>>, open: boolean) =>
    () => {
      setOpen(open);
    };

  const router = useRouter();

  return (
    <div className="prose max-w-[1000px] p-5 text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">1. Toast</h1>
      <p>
        <code>Toast</code> 컴포넌트는 사용자에게 알림 메시지를 표시할 때
        사용됩니다. 다양한 위치, 크기, 색상, 변형 스타일을 지원하고 진행 바와
        닫기 버튼을 포함할 수 있습니다.
      </p>
      <h2 className="text-[#2D3748]">1.1. Import</h2>
      <CodeBox
        code={`import Toast from "@components/Toast/Toast";`}
        copyText={`import Toast from "@components/Toast/Toast";`}
        language="tsx"
        index={1}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">1.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <p>아래 예제에서는 버튼을 클릭하면 Toast가 렌더링됩니다.</p>
      <Button onClick={onclickToastHandler(setIsToastOpen, true)}>
        Toast Open Button
      </Button>

      {isToastOpen && (
        <Toast
          isOpen={isToastOpen}
          onClose={onclickToastHandler(setIsToastOpen, false)}
        >
          Toast 알림입니다.
        </Toast>
      )}
      <CodeBox
        code={`"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
      >
        Toast 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`}
        copyText={`"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
      >
        Toast 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`}
        language="tsx"
        index={2}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h1 className="pt-10 text-[#2D3748]">2. Position</h1>
      <p>
        <code>position</code> prop을 이용하여 Toast의 위치를 설정할 수 있습니다.
      </p>
      <p>
        기본 값은 <code>leftBottom</code> 이고, 가능한 값은 <code>leftTop</code>
        , <code>leftBottom</code>, <code>rightTop</code>,{" "}
        <code>rightBottom</code>, <code>centerTop</code>,{" "}
        <code>centerBottom</code>, <code>left</code>, <code>center</code>,{" "}
        <code>right</code> 입니다.
      </p>

      <Button
        variant="border"
        color="primary"
        onClick={onclickToastHandler(setIsPositionToastOpen, true)}
      >
        Position Toast Button
      </Button>

      {isPositionToastOpen && (
        <Toast
          isOpen={isPositionToastOpen}
          onClose={onclickToastHandler(setIsPositionToastOpen, false)}
          position="rightBottom"
        >
          오른쪽 하단에 표시됩니다.
        </Toast>
      )}

      <CodeBox
        code={`"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        position="rightBottom"
      >
        오른쪽 하단에 표시됩니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`}
        copyText={`"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        position="rightBottom"
      >
        오른쪽 하단에 표시됩니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`}
        language="tsx"
        index={3}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">Color</h2>
      <p>
        <code>color</code> prop을 이용하여 Toast의 배경 색상을 설정할 수
        있습니다.
      </p>
      <p>
        기본 값은 <code>basic</code> 이고, 가능한 값은 <code>primary</code>,{" "}
        <code>secondary</code>, <code>success</code>, <code>warning</code>,{" "}
        <code>danger</code>, <code>red</code>, <code>orange</code>,{" "}
        <code>yellow</code>, <code>green</code>, <code>blue</code>,{" "}
        <code>purple</code>, <code>pink</code>, <code>basic</code>,{" "}
        <code>white</code>, <code>gray</code>, <code>black</code> 입니다.
      </p>
      <Button
        variant="border"
        color="orange"
        onClick={onclickToastHandler(setIsColorToastOpen, true)}
      >
        Color Toast Button
      </Button>
      {isColorToastOpen && (
        <Toast
          isOpen={isColorToastOpen}
          onClose={onclickToastHandler(setIsColorToastOpen, false)}
          color="orange"
        >
          오렌지색 알림입니다.
        </Toast>
      )}

      <CodeBox
        code={`"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        color="orange"
      >
        오렌지색 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`}
        copyText={`"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        color="orange"
      >
        오렌지색 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`}
        language="tsx"
        index={4}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h1 className="pt-10 text-[#2D3748]">3. Variant</h1>
      <p>
        <code>variant</code> prop을 이용하여 Toast의 스타일 변형을 설정할 수
        있습니다.
      </p>
      <p>
        기본 값은 <code>solid</code> 이고, 가능한 값은 <code>solid</code>,{" "}
        <code>border</code> 입니다.
      </p>

      <Button
        variant="border"
        onClick={onclickToastHandler(setIsVariantToastOpen, true)}
      >
        Variant Toast Button
      </Button>

      {isVariantToastOpen && (
        <Toast
          isOpen={isVariantToastOpen}
          onClose={onclickToastHandler(setIsVariantToastOpen, false)}
          variant="border"
        >
          border 스타일의 알림입니다.
        </Toast>
      )}

      <CodeBox
        code={`"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        variant="border"
      >
        border 스타일의 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`}
        copyText={`"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        variant="border"
      >
        border 스타일의 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`}
        language="tsx"
        index={5}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h1 className="pt-10 text-[#2D3748]">4. Time</h1>
      <p>
        <code>time</code> prop을 이용하여 Toast가 자동으로 닫히기 전까지의
        시간을 설정할 수 있습니다. 시간은 초 단위로 설정합니다.
      </p>
      <Button
        variant="border"
        color="success"
        onClick={onclickToastHandler(setIsTimeToastOpen, true)}
      >
        Time Toast Button
      </Button>

      {isTimeToastOpen && (
        <Toast
          isOpen={isTimeToastOpen}
          onClose={onclickToastHandler(setIsTimeToastOpen, false)}
          time="5"
        >
          5초 후에 자동으로 닫힙니다.
        </Toast>
      )}

      <CodeBox
        code={`"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        time="5"
      >
        5초 후에 자동으로 닫힙니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`}
        copyText={`"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        time="5"
      >
        5초 후에 자동으로 닫힙니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`}
        language="tsx"
        index={6}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h1 className="pt-10 text-[#2D3748]">5. isClose</h1>
      <p>
        <code>isClose</code> prop을 사용하여 Toast에 닫기 버튼을 표시할지 여부를
        설정할 수 있습니다. 기본 값은 <code>false</code>이고 <code>true</code>로
        설정하면 Toast에 닫기 버튼이 표시되지 않습니다.
      </p>
      <p>
        닫기 버튼에 대해 true로 설정하고, 위의 Time을 별도로 지정해주지 않으면
        닫을수 없으니 꼭 Time을 추가하시길 권장합니다.
      </p>

      <Button
        variant="border"
        color="secondary"
        onClick={onclickToastHandler(setIsCloseButtonToastOpen, true)}
      >
        Close Button Toast Button
      </Button>

      {isCloseButtonToastOpen && (
        <Toast
          isOpen={isCloseButtonToastOpen}
          time="5"
          onClose={onclickToastHandler(setIsCloseButtonToastOpen, false)}
          isClose={true}
          color="secondary"
        >
          닫기 버튼이 없는 알림입니다.
        </Toast>
      )}

      <CodeBox
        code={`"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        isClose={true}
        time="5"
        color="secondary"
      >
        닫기 버튼이 없는 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`}
        copyText={`"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        isClose={true}
        time="5"
        color="secondary"
      >
        닫기 버튼이 없는 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`}
        language="tsx"
        index={7}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h1 className="pt-10 text-[#2D3748]">6. Progress</h1>
      <p>
        <code>isProgress</code> prop을 이용하여 Toast에 진행 바를 표시할 수
        있습니다.
      </p>
      <p>
        Progress 바는 시간이 지남에 따라 비워집니다. 기본 값은 false이고 false일
        경우 사라지고 true일 경우 Progress 바가 활성화됩니다.
      </p>
      <p>
        Time이 지정되지 않으면 Progress 바가 회색이 되고 닫기 버튼을 클릭하지
        않는 한 닫히지 않습니다.{" "}
      </p>

      <Button
        variant="border"
        color="danger"
        onClick={onclickToastHandler(setIsProgressToastOpen, true)}
      >
        Progress Toast Button
      </Button>

      {isProgressToastOpen && (
        <Toast
          isOpen={isProgressToastOpen}
          onClose={onclickToastHandler(setIsProgressToastOpen, false)}
          isProgress={true}
        >
          진행 바가 포함된 알림입니다.
        </Toast>
      )}

      <CodeBox
        code={`"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        isProgress={true}
      >
        진행 바가 포함된 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`}
        copyText={`"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        isProgress={true}
      >
        진행 바가 포함된 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`}
        language="tsx"
        index={8}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h1 className="pt-10 text-[#2D3748]">7. Progress + Time</h1>
      <p>
        <code>isProgress</code> prop과 <code>Time</code> prop을 이용하여 사용자
        경험을 향상시키는 Toast를 만들수 있습니다.
      </p>

      <Button
        variant="border"
        color="secondary"
        onClick={onclickToastHandler(setIsTimeProgressToastOpen, true)}
      >
        Time + Progress Toast Button
      </Button>

      {isTimeProgressToastOpen && (
        <Toast
          isOpen={isTimeProgressToastOpen}
          onClose={onclickToastHandler(setIsTimeProgressToastOpen, false)}
          isProgress={true}
          color="secondary"
          time="5"
          variant="border"
        >
          진행 바가 포함된 5초후에 사라지는 border 스타일의 Secondary 컬러의
          알림입니다.
        </Toast>
      )}

      <CodeBox
        code={`"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        isProgress={true}
        time="5"
        variant="border"
        color="secondary"
        >
          진행 바가 포함된 5초후에 사라지는 border 스타일의 Secondary 컬러의 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`}
        copyText={`"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        isProgress={true}
        variant="border"
        color="secondary"
      time="5"
        >
          진행 바가 포함된 5초후에 사라지는 border 스타일의 Secondary 컬러의 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`}
        language="tsx"
        index={9}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h1 className="pt-10 text-[#2D3748]">8. ClassName</h1>
      <p>
        <code>className</code> prop을 이용하여 Toast에 커스텀 스타일을 적용할 수
        있습니다.
      </p>

      <Button
        variant="border"
        color="secondary"
        onClick={onclickToastHandler(setIsClassNameToastOpen, true)}
      >
        ClassName Toast Button
      </Button>

      {isClassNameToastOpen && (
        <Toast
          isOpen={isClassNameToastOpen}
          onClose={onclickToastHandler(setIsClassNameToastOpen, false)}
          className="rounded-lg bg-indigo-500 p-5 text-white"
        >
          커스텀 스타일이 적용된 알림입니다.
        </Toast>
      )}

      <CodeBox
        code={`"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        className="bg-indigo-500 text-white p-5 rounded-lg"
      >
        커스텀 스타일이 적용된 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`}
        copyText={`"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        className="bg-indigo-500 text-white p-5 rounded-lg"
      >
        커스텀 스타일이 적용된 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`}
        language="tsx"
        index={10}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h1 className="pt-10">9. Toast Group Docs</h1>
      <p>
        하나의 Toast가 아닌 여러개의 Toast가 필요하다면 ToastGroup 컴포넌트가
        있습니다. 아래의 버튼을 클릭하면 이동합니다.
      </p>
      <Button
        onClick={() => {
          router.push("/toastgroup");
        }}
      >
        Toast Docs로 이동
      </Button>

      <h1 className="pt-10 text-[#2D3748]">10. Props</h1>
      <p>
        <code>Toast</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>size</code>
            </td>
            <td>Toast의 크기를 설정합니다.</td>
            <td>
              <code>"small" | "medium" | "large"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>isOpen</code>
            </td>
            <td>Toast의 열림 상태를 설정합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>true</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>position</code>
            </td>
            <td>Toast의 위치를 설정합니다.</td>
            <td>
              <code>
                "leftTop" | "leftBottom" | "rightTop" | "rightBottom" |
                "centerTop" | "centerBottom" | "left" | "center" | "right"
              </code>
            </td>
            <td>
              <code>"leftBottom"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>Toast의 배경 색상을 설정합니다.</td>
            <td>
              <code>
                "primary" | "secondary" | "success" | "warning" | "danger" |
                "red" | "orange" | "yellow" | "green" | "blue" | "purple" |
                "pink" | "basic" | "white" | "gray" | "black"
              </code>
            </td>
            <td>
              <code>"basic"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>variant</code>
            </td>
            <td>Toast의 스타일 변형을 설정합니다.</td>
            <td>
              <code>"solid" | "border"</code>
            </td>
            <td>
              <code>"solid"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>isProgress</code>
            </td>
            <td>Toast에 진행 바를 표시할지 여부를 설정합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>false</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>text</code>
            </td>
            <td>Toast 내 텍스트의 정렬을 설정합니다.</td>
            <td>
              <code>"left" | "center" | "right"</code>
            </td>
            <td>
              <code>"left"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>time</code>
            </td>
            <td>Toast가 자동으로 닫히기 전까지의 시간을 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>undefined</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onClose</code>
            </td>
            <td>Toast가 닫힐 때 호출되는 핸들러입니다.</td>
            <td>
              <code>() =&gt; void</code>
            </td>
            <td>
              <code>undefined</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>className</code>
            </td>
            <td>Toast의 추가적인 커스텀 스타일을 적용할 때 사용합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>""</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ToastDocs;
