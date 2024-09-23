"use strict";
'use client';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const RatingStar_1 = __importDefault(require("@components/Rating/RatingStar"));
const RatingNumSlider_1 = __importDefault(require("@components/Rating/RatingNumSlider"));
const RatingFeel_1 = __importDefault(require("@components/Rating/RatingFeel"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const RatingDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return (<div className="prose max-w-[850px] space-y-7 p-5 text-[#6D6D6D] dark:text-[#dfdfdf]">
      {/* RatingStar */}
      <div className="dark:text-white">
        <h1 className="text-[#2D3748] dark:text-white">1. RatingStar</h1>
        <p>
          <code>RatingStar</code> 컴포넌트는 별 모양의 평가 UI로, 사용자가
          클릭하여 별점을 매길 수 있습니다. 평가 점수를 변경할 때마다 콜백
          함수로 전달됩니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">1.1. Import</h2>
        <CodeBox_1.default code={`import RatingStar from './components/RatingStar';`} copyText={`import RatingStar from './components/RatingStar';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">1.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="my-7">
          <RatingStar_1.default />
        </div>
        <CodeBox_1.default code={`import RatingStar from './components/RatingStar';

function Example() {
  return <RatingStar />;
}

export default Example;
`} copyText={`import RatingStar from './components/RatingStar';

function Example() {
  return <RatingStar />;
}

export default Example;
`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">1.3. Props</h2>
        <p>
          <code>RatingStar</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
                <code>stars</code>
              </td>
              <td>별의 개수를 지정합니다.</td>
              <td>
                <code>number</code>
              </td>
              <td>
                <code>5</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>onRatingChange</code>
              </td>
              <td>평가 점수가 변경될 때 호출되는 함수입니다.</td>
              <td>
                <code>(rating: number) =&gt; void</code>
              </td>
              <td>
                <code>undefined</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* RatingNumSlider */}
      <div className="dark:text-white">
        <h1 className="text-[#2D3748] dark:text-white">2. RatingNumSlider</h1>
        <p>
          <code>RatingNumSlider</code> 컴포넌트는 슬라이더를 사용하여 사용자가
          점수를 선택할 수 있는 UI 요소입니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">2.1. Import</h2>
        <CodeBox_1.default code={`import RatingNumSlider from './components/RatingNumSlider';`} copyText={`import RatingNumSlider from './components/RatingNumSlider';`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">2.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="my-7">
          <RatingNumSlider_1.default />
        </div>
        <CodeBox_1.default code={`import RatingNumSlider from './components/RatingNumSlider';

function Example() {
  return <RatingNumSlider />;
}

export default Example;
`} copyText={`import RatingNumSlider from './components/RatingNumSlider';

function Example() {
  return <RatingNumSlider />;
}

export default Example;
`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">2.3. Props</h2>
        <p>
          <code>RatingNumSlider</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
                <code>min</code>
              </td>
              <td>슬라이더의 최소값을 설정합니다.</td>
              <td>
                <code>number</code>
              </td>
              <td>
                <code>1</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>max</code>
              </td>
              <td>슬라이더의 최대값을 설정합니다.</td>
              <td>
                <code>number</code>
              </td>
              <td>
                <code>10</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>step</code>
              </td>
              <td>슬라이더의 단계를 설정합니다.</td>
              <td>
                <code>number</code>
              </td>
              <td>
                <code>1</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>onRatingChange</code>
              </td>
              <td>점수가 변경될 때 호출되는 함수입니다.</td>
              <td>
                <code>(rating: number) =&gt; void</code>
              </td>
              <td>
                <code>undefined</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* RatingFeel */}
      <div className="dark:text-white">
        <h1 className="text-[#2D3748] dark:text-white">3. RatingFeel</h1>
        <p>
          <code>RatingFeel</code> 컴포넌트는 다양한 감정을 나타내는 이모지를
          사용하여 감정을 선택할 수 있는 UI 요소입니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">3.1. Import</h2>
        <CodeBox_1.default code={`import RatingFeel from './components/RatingFeel';`} copyText={`import RatingFeel from './components/RatingFeel';`} language="tsx" index={5} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">3.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="my-7">
          <RatingFeel_1.default />
        </div>
        <CodeBox_1.default code={`import RatingFeel from './components/RatingFeel';

function Example() {
  return <RatingFeel />;
}

export default Example;
`} copyText={`import RatingFeel from './components/RatingFeel';

function Example() {
  return <RatingFeel />;
}

export default Example;
`} language="tsx" index={6} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">3.3. Props</h2>
        <p>
          <code>RatingFeel</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
                <code>onRatingChange</code>
              </td>
              <td>감정 점수가 변경될 때 호출되는 함수입니다.</td>
              <td>
                <code>(rating: number) =&gt; void</code>
              </td>
              <td>
                <code>undefined</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>);
};
exports.default = RatingDocs;
