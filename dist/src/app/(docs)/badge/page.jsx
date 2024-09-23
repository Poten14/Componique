"use client";
import React, { useState } from "react";
import CodeBox from "@components/CodeBox";
import BadgeBasic from "@components/Badge/BadgeBasic";
import BadgeCounter from "@components/Badge/BadgeCounter";
import BadgeDot from "@components/Badge/BadgeDot";
import BadgeIcon from "@components/Badge/BadgeIcon";
const BadgeDocs = () => {
    const [copied, setCopied] = useState({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return (<div className="prose max-w-[1000px] space-y-7 p-5 text-[#6D6D6D] dark:text-[#dfdfdf]">
      <div className="dark:text-white">
        <h1 className="text-[#2D3748] dark:text-white">1. Badge</h1>
        <p>
          <code>Badge</code> 컴포넌트는 다양한 상태나 정보를 시각적으로 표시하는 UI 요소입니다. 여러 유형의 배지를 지원하며, 다크 모드에도 대응합니다.
        </p>
    <br />
        <h1 className="text-[#2D3748] dark:text-white">1.1. Import</h1>
        <CodeBox code={`import Badge from '@components/Badge/Badge';`} copyText={`import Badge from '@components/Badge/Badge';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>
    <br />
        <h1 className="text-[#2D3748] dark:text-white">1.2. Usage</h1>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="my-7">
          <BadgeBasic />
        </div>
        <CodeBox code={`
import Badge from './Badge';

const BadgeBasic = () => {
  return (
    <Badge type="basic" content="BasicBadge" color="bg-blue-500" textColor="text-white" />
  );
};

export default BadgeBasic;
`} copyText={`
import Badge from './Badge';

const BadgeBasic = () => {
  return (
    <Badge type="basic" content="BasicBadge" color="bg-blue-500" textColor="text-white" />
  );
};

export default BadgeBasic;
`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>
    <hr />
        {/* BadgeCounter Section */}
        <h1 className="text-[#2D3748] dark:text-white">2. BadgeCounter</h1>
        <p>
          <code>BadgeCounter</code>는 숫자를 강조하여 알림 수나 메시지 수를 표시합니다.
        </p>
        <div className="my-7">
          <BadgeCounter />
        </div>
        <CodeBox code={`
import Badge from './Badge';

const BadgeCounter = () => {
  return (
    <Badge type="counter" content="+5" color="bg-red-500" textColor="text-white" />
  );
};

export default BadgeCounter;
`} copyText={`
import Badge from './Badge';

const BadgeCounter = () => {
  return (
    <Badge type="counter" content="+5" color="bg-red-500" textColor="text-white" />
  );
};

export default BadgeCounter;
`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>
    <hr />

        {/* BadgeDot Section */}
        <h1 className="text-[#2D3748] dark:text-white">3. BadgeDot</h1>
        <p>
          <code>BadgeDot</code>는 작은 점 형태로 알림이나 상태를 간단하게 표시합니다.
        </p>
        <div className="my-7">
          <BadgeDot />
        </div>
        <CodeBox code={`
import Badge from './Badge';

const BadgeDot = () => (
  <Badge type="dot" color="bg-red-500" />
);

export default BadgeDot;
`} copyText={`
import Badge from './Badge';

const BadgeDot = () => (
  <Badge type="dot" color="bg-red-500" />
);

export default BadgeDot;
`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>
    <hr />

        {/* BadgeIcon Section */}
        <h1 className="text-[#2D3748] dark:text-white">4. BadgeIcon</h1>
        <p>
          <code>BadgeIcon</code>는 텍스트와 아이콘을 함께 표시하여 더 직관적인 정보를 제공합니다.
        </p>
        <div className="my-7">
          <BadgeIcon />
        </div>
        <CodeBox code={`
import Badge from './Badge';
import { FaStar } from 'react-icons/fa';

const BadgeIcon = () => {
  return (
    <Badge type="icon" content="IconBadge" icon={<FaStar />} color="bg-yellow-500" textColor="text-white" />
  );
};

export default BadgeIcon;
`} copyText={`
import Badge from './Badge';
import { FaStar } from 'react-icons/fa';

const BadgeIcon = () => {
  return (
    <Badge type="icon" content="IconBadge" icon={<FaStar />} color="bg-yellow-500" textColor="text-white" />
  );
};

export default BadgeIcon;
`} language="tsx" index={5} copied={copied} handleCopy={handleCopy}/>
    <hr />

        <h1 className="text-[#2D3748] dark:text-white">5. Dark Mode Support</h1>
        <p>
          <code>Badge</code> 컴포넌트는 다크 모드를 지원합니다. 다크 모드에서 배경색과 테두리 색상이 자동으로 변경되어 어두운 배경에서도 잘 보입니다.
        </p>
        <div className="my-7">
          <BadgeBasic />
        </div>
        <CodeBox code={`
import Badge from './Badge';

const BadgeBasic = () => {
  return (
    <Badge type="basic" content="BasicBadge" color="bg-blue-500" textColor="text-white" />
  );
};

export default BadgeBasic;
`} copyText={`
import Badge from './Badge';

const BadgeBasic = () => {
  return (
    <Badge type="basic" content="BasicBadge" color="bg-blue-500" textColor="text-white" />
  );
};

export default BadgeBasic;
`} language="tsx" index={6} copied={copied} handleCopy={handleCopy}/>
      </div>
    </div>);
};
export default BadgeDocs;
