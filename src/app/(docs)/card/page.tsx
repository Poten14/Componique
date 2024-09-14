"use client";

import React, { useState } from "react";
import CodeBox from "@components/CodeBox";
import BadgeBasic from "@components/Badge/BadgeBasic";
import BadgeCounter from "@components/Badge/BadgeCounter";
import BadgeDot from "@components/Badge/BadgeDot";
import BadgeIcon from "@components/Badge/BadgeIcon";

const BadgeDocs: React.FC = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});

  const handleCopy = (index: number) => {
    setCopied((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
  };

  return (
<<<<<<< HEAD
    <div className="prose max-w-[1000px] p-5 text-[#6D6D6D] dark:text-[#bdbdbd]">
      {/* BadgeBasic Section */}
=======
    <div className="prose max-w-[850px] p-5 text-[#6D6D6D] dark:text-[#bdbdbd]">
      {/* Card1 */}
>>>>>>> eb4f680303e3bfaf60295ed10126f4c479135c5c
      <div>
        <h1 className="text-[#2D3748] dark:text-white">1. BadgeBasic</h1>
        <p>
          <code>BadgeBasic</code> 컴포넌트는 기본 텍스트 배지를 제공하며, 텍스트와 색상을 커스터마이징할 수 있습니다.
        </p>
        <h2 className="text-[#2D3748] dark:text-white">1.1. Import</h2>
        <CodeBox
          code={`import BadgeBasic from '@components/Badge/BadgeBasic';`}
          copyText={`import BadgeBasic from '@components/Badge/BadgeBasic';`}
          language="tsx"
          index={1}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">1.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <BadgeBasic />
        </div>
        <CodeBox
          code={`import Badge from './Badge';

const BadgeBasic = () => {
  return (
    <Badge type="basic" content="BasicBadge" color="bg-blue-500" textColor="text-white" />
  );
};

export default BadgeBasic;`}
          copyText={`import Badge from './Badge';

const BadgeBasic = () => {
  return (
    <Badge type="basic" content="BasicBadge" color="bg-blue-500" textColor="text-white" />
  );
};

export default BadgeBasic;`}
          language="tsx"
          index={2}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">1.3. Props</h2>
        <p>
          <code>BadgeBasic</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
                <code>content</code>
              </td>
              <td>배지에 표시할 텍스트입니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>""</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>color</code>
              </td>
              <td>배지의 배경 색상을 지정합니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>"bg-blue-500"</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>textColor</code>
              </td>
              <td>배지의 텍스트 색상을 지정합니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>"text-white"</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748] dark:text-white">1.4. Full Example</h2>
        <CodeBox
          code={`import Badge from './Badge';

function FullExample() {
  return (
    <div>
      <Badge type="basic" content="New" color="bg-green-500" textColor="text-white" />
      <Badge type="basic" content="Sale" color="bg-red-500" textColor="text-white" />
      <Badge type="basic" content="Hot" color="bg-yellow-500" textColor="text-black" />
    </div>
  );
}

export default FullExample;`}
          copyText={`import Badge from './Badge';

function FullExample() {
  return (
    <div>
      <Badge type="basic" content="New" color="bg-green-500" textColor="text-white" />
      <Badge type="basic" content="Sale" color="bg-red-500" textColor="text-white" />
      <Badge type="basic" content="Hot" color="bg-yellow-500" textColor="text-black" />
    </div>
  );
}

export default FullExample;`}
          language="tsx"
          index={3}
          copied={copied}
          handleCopy={handleCopy}
        />
      </div>

      {/* BadgeCounter Section */}
      <div>
        <h1 className="text-[#2D3748] dark:text-white">2. BadgeCounter</h1>
        <p>
          <code>BadgeCounter</code> 컴포넌트는 숫자를 강조하여 알림 수나 메시지 수를 표시할 때 유용합니다.
        </p>
        <h2 className="text-[#2D3748] dark:text-white">2.1. Import</h2>
        <CodeBox
          code={`import BadgeCounter from '@components/Badge/BadgeCounter';`}
          copyText={`import BadgeCounter from '@components/Badge/BadgeCounter';`}
          language="tsx"
          index={4}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">2.2. Usage</h2>
        <p>카운터 배지의 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <BadgeCounter />
        </div>
        <CodeBox
          code={`import Badge from './Badge';

const BadgeCounter = () => {
  return (
    <Badge type="counter" content="+5" color="bg-red-500" textColor="text-white" />
  );
};

export default BadgeCounter;`}
          copyText={`import Badge from './Badge';

const BadgeCounter = () => {
  return (
    <Badge type="counter" content="+5" color="bg-red-500" textColor="text-white" />
  );
};

export default BadgeCounter;`}
          language="tsx"
          index={5}
          copied={copied}
          handleCopy={handleCopy}
        />
      </div>

      {/* BadgeDot Section */}
      <div>
        <h1 className="text-[#2D3748] dark:text-white">3. BadgeDot</h1>
        <p>
          <code>BadgeDot</code> 컴포넌트는 작은 점 형태로 알림이나 상태를 간단하게 표시할 때 사용됩니다.
        </p>
        <h2 className="text-[#2D3748] dark:text-white">3.1. Import</h2>
        <CodeBox
          code={`import BadgeDot from '@components/Badge/BadgeDot';`}
          copyText={`import BadgeDot from '@components/Badge/BadgeDot';`}
          language="tsx"
          index={6}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">3.2. Usage</h2>
        <p>점 배지의 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <BadgeDot />
        </div>
        <CodeBox
          code={`import Badge from './Badge';

const BadgeDot = () => (
  <Badge type="dot" color="bg-red-500" />
);

export default BadgeDot;`}
          copyText={`import Badge from './Badge';

const BadgeDot = () => (
  <Badge type="dot" color="bg-red-500" />
);

export default BadgeDot;`}
          language="tsx"
          index={7}
          copied={copied}
          handleCopy={handleCopy}
        />
      </div>

      {/* BadgeIcon Section */}
      <div>
        <h1 className="text-[#2D3748] dark:text-white">4. BadgeIcon</h1>
        <p>
          <code>BadgeIcon</code> 컴포넌트는 텍스트와 아이콘을 함께 표시하여 정보를 직관적으로 제공합니다.
        </p>
        <h2 className="text-[#2D3748] dark:text-white">4.1. Import</h2>
        <CodeBox
          code={`import BadgeIcon from '@components/Badge/BadgeIcon';`}
          copyText={`import BadgeIcon from '@components/Badge/BadgeIcon';`}
          language="tsx"
          index={8}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">4.2. Usage</h2>
        <p>아이콘 배지의 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <BadgeIcon />
        </div>
        <CodeBox
          code={`import Badge from './Badge';
import { FaStar } from 'react-icons/fa';

const BadgeIcon = () => {
  return (
    <Badge type="icon" content="IconBadge" icon={<FaStar />} color="bg-yellow-500" textColor="text-white" />
  );
};

export default BadgeIcon;`}
          copyText={`import Badge from './Badge';
import { FaStar } from 'react-icons/fa';

const BadgeIcon = () => {
  return (
    <Badge type="icon" content="IconBadge" icon={<FaStar />} color="bg-yellow-500" textColor="text-white" />
  );
};

export default BadgeIcon;`}
          language="tsx"
          index={9}
          copied={copied}
          handleCopy={handleCopy}
        />
      </div>
    </div>
  );
};

export default BadgeDocs;
