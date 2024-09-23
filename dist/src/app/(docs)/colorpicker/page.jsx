"use client";
import React, { useState } from "react";
import CodeBox from "@components/CodeBox";
import ColorPickerUI from "@components/ColorPicker/ColorPickerUI";
import GradientPicker from "@components/ColorPicker/GradientPicker";
import TwoPicker from "@components/ColorPicker/TwoPicker";
import ColorPicker from "@components/ColorPicker/ColorPicker";
const ColorPickerDoc = () => {
    const [copied, setCopied] = useState({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return (<div className="prose max-w-[850px] p-5 text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">1. ColorPicker - 기본</h1>
      <p>
        <code>ColorPicker</code> 컴포넌트는 사용자가 색상을 선택하고 복사할 수
        있도록 설계되었습니다.{" "}
      </p>
      <p>
        미리 구성된 색상 팔레트를 사용하고싶다면 아래와 같이 사용하면 됩니다.
      </p>
      <h2 className="text-[#2D3748]">1.1. Import</h2>

      <CodeBox code={`import ColorPicker from "@components/ColorPicker/ColorPicker";`} copyText={`import ColorPicker from "@components/ColorPicker/ColorPicker";`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <ColorPicker />
      </div>
      <div className="my-7 space-y-4"/>
      <CodeBox code={`import ColorPicker from "@components/ColorPicker/ColorPicker";

function Example() {
  return (
      <ColorPicker />
  );
}

export default Example;`} copyText={`import ColorPicker from "@components/ColorPicker/ColorPicker";

function Example() {
  return (
      <ColorPicker />
  );
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>
      <hr />
      <h1 className="text-[#2D3748]">2. ColorPickerUI - 커스터마이징</h1>
      <p>
        <code>ColorPickerUI</code> 컴포넌트는 사용자가 원하는 색상을 팔레트에
        담은 후, 색상을 선택하고 복사할 수 있도록 설계되었습니다.
      </p>
      <h2 className="text-[#2D3748]">2.1. Import</h2>

      <CodeBox code={`import ColorPickerUI from '@components/ColorPicker/ColorPickerUI';`} copyText={`import ColorPickerUI from '@components/ColorPicker/ColorPickerUI';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">2.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <ColorPickerUI colors={["#ff0000", "#00ff00", "#0000ff"]}/>
      </div>
      <div className="my-7 space-y-4"/>
      <CodeBox code={`import ColorPickerUI from '@components/ColorPicker/ColorPickerUI';

function Example() {
  return (
    <ColorPickerUI colors={["#ff0000", "#00ff00", "#0000ff"]} />
  );
}

export default Example;`} copyText={`import ColorPickerUI from '@components/ColorPicker/ColorPickerUI';

function Example() {
  return (
    <ColorPickerUI colors={["#ff0000", "#00ff00", "#0000ff"]} />
  );
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>
      <h2 className="pt-2 text-[#2D3748]">2.3. Props</h2>
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
              <code>colors</code>
            </td>
            <td>
              사용 가능한 색상 목록입니다. 지정하지 않고 싶다면 위의
              colorpicker를 사용해야합니다.
            </td>
            <td>
              <code>string[]</code>
            </td>
            <td>필수</td>
          </tr>
          <tr>
            <td>
              <code>selectColor</code>
            </td>
            <td>색상이 선택되었을 때 호출되는 콜백 함수입니다.</td>
            <td>
              <code>(color: string) =&gt; void</code>
            </td>
            <td>None</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <h1 className="text-[#2D3748]">3. GradientPicker</h1>
      <p>
        <code>GradientPicker</code> 컴포넌트는 그라데이션 색상을 선택하고
        미리보기를 제공하며, 이를 복사할 수 있습니다.
      </p>
      <h2 className="text-[#2D3748]">3.1. Import</h2>
      <div className="my-7 space-y-4"/>
      <CodeBox code={`import GradientPicker from '@components/ColorPicker/GradientPicker';`} copyText={`import GradientPicker from '@components/ColorPicker/GradientPicker';`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">3.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <GradientPicker />
      </div>
      <div className="my-7 space-y-4"/>
      <CodeBox code={`import GradientPicker from '@components/ColorPicker/GradientPicker';

function Example() {
  return (
    <GradientPicker />
  );
}

export default Example;`} copyText={`import GradientPicker from '@components/ColorPicker/GradientPicker';

function Example() {
  return (
    <GradientPicker />
  );
}

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>
      <h2 className="pt-2 text-[#2D3748]">3.3. Props</h2>
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
              <code>colors</code>
            </td>
            <td>그라데이션의 시작과 끝 색상을 설정합니다.</td>
            <td>
              <code>{`{ startColor: string; endColor: string; }`}</code>
            </td>
            <td>{`{ startColor: "#ffffff", endColor: "#000000" }`}</td>
          </tr>
          <tr>
            <td>
              <code>position</code>
            </td>
            <td>그라데이션의 방향을 설정합니다.</td>
            <td>
              <code>to right</code>,<code>to left</code>,<code>to bottom</code>,
              <code>to top</code>,<code>to bottom right</code>,
              <code>to bottom left</code>,<code>to top right</code>,
              <code>to top left</code>
            </td>
            <td>
              <code>"to right"</code>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <h1 className="text-[#2D3748]">4. TwoPicker</h1>
      <p>
        <code>TwoPicker</code> 컴포넌트는 사용자가 ColorPicker와 GradientPicker
        중 하나를 선택하여 사용할 수 있게 합니다.
      </p>
      <h2 className="text-[#2D3748]">4.1. Import</h2>
      <CodeBox code={`import TwoPicker from '@components/ColorPicker/TwoPicker';`} copyText={`import TwoPicker from '@components/ColorPicker/TwoPicker';`} language="tsx" index={5} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">4.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <TwoPicker />
      </div>
      <div className="my-7 space-y-4"/>
      <CodeBox code={`import TwoPicker from '@components/ColorPicker/TwoPicker';

function Example() {
  return (
    <TwoPicker />
  );
}

export default Example;`} copyText={`import TwoPicker from '@components/ColorPicker/TwoPicker';

function Example() {
  return (
    <TwoPicker />
  );
}

export default Example;`} language="tsx" index={6} copied={copied} handleCopy={handleCopy}/>
      <h2 className="pt-2 text-[#2D3748]">4.3. Props</h2>
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
              <code>activePicker</code>
            </td>
            <td>
              현재 활성화된 픽커를 설정합니다. "Color" 또는 "Gradient" 값을
              가집니다.
            </td>
            <td>
              <code>"Color" | "Gradient"</code>
            </td>
            <td>
              <code>"Color"</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>);
};
export default ColorPickerDoc;
