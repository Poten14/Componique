"use client";

import React, { useState } from "react";

import ImageUpload from "@components/ImageUpload/Imageupload";
import CodeBox from "@components/CodeBox";

const ImageUploadDoc: React.FC = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});
  const [imageData, setImageData] = useState<string | null>(null);

  const handleCopy = (index: number) => {
    setCopied((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
  };

  const onSelectImageHandler = (data: string | null) => {
    setImageData(data);
    console.log("Selected Image data =>", data);
  };

  return (
    <div className="prose max-w-[1000px] p-5 text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">1. ImageUpload</h1>
      <p>
        <code>ImageUpload</code> 컴포넌트는 사용자가 이미지를 업로드하거나
        선택할 수 있는 기능을 제공합니다.
      </p>
      <p>
        다양한 크기, 색상, 모양, 텍스트, 스타일 변형 및 기타 옵션을 통해 이미지
        업로드 컴포넌트를 커스터마이징 할 수 있습니다.
      </p>
      <h2 className="text-[#2D3748]">1.1. Import</h2>
      <CodeBox
        code={`import ImageUpload from '@components/ImageUpload/Imageupload';`}
        copyText={`import ImageUpload from '@components/ImageUpload/Imageupload';`}
        language="tsx"
        index={1}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h2 className="text-[#2D3748]">1.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <ImageUpload />
      </div>
      <CodeBox
        code={`import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <ImageUpload />
  );
}

export default Example;`}
        copyText={`import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <ImageUpload />
  );
}

export default Example;`}
        language="tsx"
        index={2}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h2 className="pt-2 text-[#2D3748]">2. Size</h2>
      <p>
        <code>size</code> prop을 이용하여 ImageUpload 컴포넌트의 크기를 설정할
        수 있습니다.
      </p>
      <p>
        기본 값은 <code>medium</code>이고, 가능한 값은 <code>small</code>,{" "}
        <code>medium</code>, <code>large</code> 입니다.
      </p>
      <div className="space-x-4 space-y-4">
        <ImageUpload size="small" />
        <ImageUpload size="medium" />
        <ImageUpload size="large" />
      </div>
      <CodeBox
        code={`import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload size="small" />
      <ImageUpload size="medium" />
      <ImageUpload size="large" />
    </>
  );
}

export default Example;`}
        copyText={`import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload size="small" />
      <ImageUpload size="medium" />
      <ImageUpload size="large" />
    </>
  );
}

export default Example;`}
        language="tsx"
        index={3}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h2 className="pt-2 text-[#2D3748]">3. Color</h2>
      <p>
        <code>color</code> prop을 이용하여 ImageUpload 컴포넌트의 배경 색상을
        설정할 수 있습니다.
      </p>
      <p>
        기본 값은 <code>basic</code>이고, 가능한 값은 <code>primary</code>,{" "}
        <code>secondary</code>, <code>success</code>, <code>warning</code>,{" "}
        <code>danger</code>, <code>red</code>, <code>orange</code>,{" "}
        <code>yellow</code>, <code>green</code>, <code>blue</code>,{" "}
        <code>purple</code>, <code>pink</code>, <code>basic</code>,{" "}
        <code>white</code>, <code>gray</code>, <code>black</code> 입니다.
      </p>
      <div className="space-x-4 space-y-4">
        <ImageUpload color="primary" />
        <ImageUpload color="secondary" />
        <ImageUpload color="success" />
        <ImageUpload color="warning" />
        <ImageUpload color="danger" />
        <ImageUpload color="red" />
        <ImageUpload color="orange" />
        <ImageUpload color="yellow" />
        <ImageUpload color="green" />
        <ImageUpload color="blue" />
        <ImageUpload color="purple" />
        <ImageUpload color="pink" />
        <ImageUpload color="basic" />
        <ImageUpload color="white" />
        <ImageUpload color="gray" />
        <ImageUpload color="black" />
      </div>
      <CodeBox
        code={`import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
        <ImageUpload color="primary" />
        <ImageUpload color="secondary" />
        <ImageUpload color="success" />
        <ImageUpload color="warning" />
        <ImageUpload color="danger" />
        <ImageUpload color="red" />
        <ImageUpload color="orange" />
        <ImageUpload color="yellow" />
        <ImageUpload color="green" />
        <ImageUpload color="blue" />
        <ImageUpload color="purple" />
        <ImageUpload color="pink" />
        <ImageUpload color="basic" />
        <ImageUpload color="white" />
        <ImageUpload color="gray" />
        <ImageUpload color="black" />
    </>
  );
}

export default Example;`}
        copyText={`import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
        <ImageUpload color="primary" />
        <ImageUpload color="secondary" />
        <ImageUpload color="success" />
        <ImageUpload color="warning" />
        <ImageUpload color="danger" />
        <ImageUpload color="red" />
        <ImageUpload color="orange" />
        <ImageUpload color="yellow" />
        <ImageUpload color="green" />
        <ImageUpload color="blue" />
        <ImageUpload color="purple" />
        <ImageUpload color="pink" />
        <ImageUpload color="basic" />
        <ImageUpload color="white" />
        <ImageUpload color="gray" />
        <ImageUpload color="black" />
    </>
  );
}

export default Example;`}
        language="tsx"
        index={4}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h2 className="pt-2 text-[#2D3748]">4. Shape</h2>
      <p>
        <code>shape</code> prop을 이용하여 ImageUpload 컴포넌트의 모양을 설정할
        수 있습니다.
      </p>
      <p>
        기본 값은 <code>circle</code>이고, 가능한 값은 <code>rectangle</code>,{" "}
        <code>circle</code> 입니다.
      </p>
      <div className="space-x-4 space-y-4">
        <ImageUpload shape="rectangle" />
        <ImageUpload shape="circle" />
      </div>
      <CodeBox
        code={`import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload shape="rectangle" />
      <ImageUpload shape="circle" />
    </>
  );
}

export default Example;`}
        copyText={`import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload shape="rectangle" />
      <ImageUpload shape="circle" />
    </>
  );
}

export default Example;`}
        language="tsx"
        index={5}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h2 className="pt-2 text-[#2D3748]">5. Variant</h2>
      <p>
        <code>variant</code> prop을 이용하여 ImageUpload 컴포넌트의 스타일
        변형을 설정할 수 있습니다.
      </p>
      <p>
        기본 값은 <code>solid</code>이고, 가능한 값은 <code>solid</code>와{" "}
        <code>border</code> 입니다.
      </p>
      <div className="space-x-4 space-y-4">
        <ImageUpload variant="solid" color="primary" />
        <ImageUpload variant="border" color="secondary" />
      </div>
      <CodeBox
        code={`import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload variant="solid" color="primary" />
      <ImageUpload variant="border" color="secondary" />
    </>
  );
}

export default Example;`}
        copyText={`import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload variant="solid" color="primary" />
      <ImageUpload variant="border" color="secondary" />
    </>
  );
}

export default Example;`}
        language="tsx"
        index={6}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h2 className="pt-2 text-[#2D3748]">6. Variant Border의 Color</h2>
      <p>
        <code>variant</code> prop을 이용하여 ImageUpload 컴포넌트의 스타일
        변형을 설정할 수 있습니다.
      </p>
      <p>
        <code>border</code> 스타일은 ImageUpload 컴포넌트의 테두리만 색상이
        적용되고 이미지가 업로드되지 않은 상태에서 테두리 색상이 강조되서
        시각적으로 구분할 수 있습니다.
      </p>
      <div className="space-y-4">
        <ImageUpload color="primary" variant="border" />
        <ImageUpload color="secondary" variant="border" />
        <ImageUpload color="success" variant="border" />
        <ImageUpload color="warning" variant="border" />
        <ImageUpload color="danger" variant="border" />
        <ImageUpload color="red" variant="border" />
        <ImageUpload color="orange" variant="border" />
        <ImageUpload color="yellow" variant="border" />
        <ImageUpload color="green" variant="border" />
        <ImageUpload color="blue" variant="border" />
        <ImageUpload color="purple" variant="border" />
        <ImageUpload color="pink" variant="border" />
        <ImageUpload color="basic" variant="border" />
        <ImageUpload color="white" variant="border" />
        <ImageUpload color="gray" variant="border" />
        <ImageUpload color="black" variant="border" />
      </div>
      <div className="my-7 space-y-4" />
      <CodeBox
        code={`import { ImageUpload } from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
        <ImageUpload color="primary" variant="border" />
        <ImageUpload color="secondary" variant="border" />
        <ImageUpload color="success" variant="border" />
        <ImageUpload color="warning" variant="border" />
        <ImageUpload color="danger" variant="border" />
        <ImageUpload color="red" variant="border" />
        <ImageUpload color="orange" variant="border" />
        <ImageUpload color="yellow" variant="border" />
        <ImageUpload color="green" variant="border" />
        <ImageUpload color="blue" variant="border" />
        <ImageUpload color="purple" variant="border" />
        <ImageUpload color="pink" variant="border" />
        <ImageUpload color="basic" variant="border" />
        <ImageUpload color="white" variant="border" />
        <ImageUpload color="gray" variant="border" />
        <ImageUpload color="black" variant="border" />
    </>
  );
}

export default Example;`}
        copyText={`import { ImageUpload } from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
        <ImageUpload color="primary" variant="border" />
        <ImageUpload color="secondary" variant="border" />
        <ImageUpload color="success" variant="border" />
        <ImageUpload color="warning" variant="border" />
        <ImageUpload color="danger" variant="border" />
        <ImageUpload color="red" variant="border" />
        <ImageUpload color="orange" variant="border" />
        <ImageUpload color="yellow" variant="border" />
        <ImageUpload color="green" variant="border" />
        <ImageUpload color="blue" variant="border" />
        <ImageUpload color="purple" variant="border" />
        <ImageUpload color="pink" variant="border" />
        <ImageUpload color="basic" variant="border" />
        <ImageUpload color="white" variant="border" />
        <ImageUpload color="gray" variant="border" />
        <ImageUpload color="black" variant="border" />
  );
}

export default Example;`}
        language="tsx"
        index={6}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h2 className="pt-2 text-[#2D3748]">7. Text</h2>
      <p>
        <code>text</code> prop을 이용하여 ImageUpload 컴포넌트에 표시되는
        텍스트를 설정할 수 있습니다.
      </p>
      <p>
        기본 값은 <code>+ upload</code> 입니다.
      </p>
      <div className="space-x-4 space-y-4">
        <ImageUpload text="Add Image" />
        <ImageUpload text="Upload Here" />
      </div>
      <CodeBox
        code={`import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload text="Add Image" />
      <ImageUpload text="Upload Here" />
    </>
  );
}

export default Example;`}
        copyText={`import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload text="Add Image" />
      <ImageUpload text="Upload Here" />
    </>
  );
}

export default Example;`}
        language="tsx"
        index={7}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h2 className="pt-2 text-[#2D3748]">8. ClassName</h2>
      <p>
        <code>className</code> prop을 사용하여 <code>ImageUpload</code>{" "}
        컴포넌트의 스타일을 커스터마이징할 수 있습니다.
      </p>
      <div className="space-x-4 space-y-4">
        <ImageUpload className="bg-red-600 text-white" />
      </div>
      <CodeBox
        code={`import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <ImageUpload className="bg-red-600 text-white" />
  );
}

export default Example;`}
        copyText={`import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <ImageUpload className="bg-red-600 text-white" />
  );
}

export default Example;`}
        language="tsx"
        index={8}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h2 className="pt-2 text-[#2D3748]">9. OnImageSelect</h2>
      <p>
        <code>onImageSelect</code> prop은 사용자가 이미지를 선택했을 때 호출되는
        콜백 함수입니다.
      </p>
      <p>
        선택된 이미지의 Base64 데이터를 부모 컴포넌트로 전달하고, 이미지가
        선택되지 않았을 경우 <code>null</code>을 전달합니다.
      </p>
      <p>
        내부적으로 <code>onChangeImageHandler</code> 함수가 사용되고, 이 함수는{" "}
        <code>FileReader</code>를 이용해 이미지를 Base64 형식으로 변환 후,
        변환된 데이터를 <code>previewImage</code> 상태로 설정한 후{" "}
        <code>onImageSelect</code> 콜백으로 전달합니다.
      </p>
      <p>
        예를 들어, 아래와 같은 방식으로 <code>onImageSelect</code>를 구현할 수
        있습니다.
      </p>
      <ImageUpload onImageSelect={onSelectImageHandler} />
      <CodeBox
        code={`"use client";
import ImageUpload from '@components/ImageUpload/Imageupload';
import { useState } from 'react';

function Example() {
  const [imageData, setImageData] = useState<string | null>(null);

  const onSelectImageHandler = (data: string | null) => {
    setImageData(data);
    console.log("Selected Image data =>", data);
  };

  return (
    <ImageUpload onImageSelect={onSelectImageHandler} />
  );
}

export default Example;`}
        copyText={`"use client";
import ImageUpload from '@components/ImageUpload/Imageupload';
import { useState } from 'react';

function Example() {
  const [imageData, setImageData] = useState<string | null>(null);

  const onSelectImageHandler = (data: string | null) => {
    setImageData(data);
    console.log("Selected Image data =>", data);
  };

  return (
    <ImageUpload onImageSelect={onSelectImageHandler} />
  );
}

export default Example;`}
        language="tsx"
        index={9}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h2 className="text-[#2D3748]">10. Props</h2>
      <p>
        <code>ImageUpload</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>shape</code>
            </td>
            <td>ImageUpload 컴포넌트의 모양을 설정합니다.</td>
            <td>
              <code>"rectangle" | "circle"</code>
            </td>
            <td>
              <code>"circle"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>size</code>
            </td>
            <td>ImageUpload 컴포넌트의 크기를 설정합니다.</td>
            <td>
              <code>"small" | "medium" | "large"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>ImageUpload 컴포넌트의 배경 색상을 설정합니다.</td>
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
            <td>ImageUpload 컴포넌트의 스타일 변형을 설정합니다.</td>
            <td>
              <code>"solid" | "border"</code>
            </td>
            <td>
              <code>"solid"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>text</code>
            </td>
            <td>ImageUpload 컴포넌트에 표시할 텍스트를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"+ Upload"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>className</code>
            </td>
            <td>ImageUpload 컴포넌트의 추가적인 커스텀 스타일을 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>""</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onImageSelect</code>
            </td>
            <td>이미지 선택 시 호출되는 콜백 함수를 설정합니다.</td>
            <td>
              <code>(data: string | null) =&gt; void</code>
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

export default ImageUploadDoc;