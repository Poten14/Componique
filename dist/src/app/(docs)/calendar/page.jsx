"use strict";
"use client";
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
const Calendar_1 = __importDefault(require("@components/Calendar/Calendar"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const CalendarRange_1 = __importDefault(require("@components/Calendar/CalendarRange"));
const CalendarDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return (<div className="prose max-w-[850px] p-5 text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">1. Calendar</h1>
      <p>
        <code>Calendar</code> 컴포넌트는 날짜를 선택할 수 있는 인터랙티브한
        달력을 제공합니다. 사용자가 특정 날짜를 선택할 수 있으며, 선택된 날짜는
        부모 컴포넌트로 전달될 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">1.1. Import</h2>
      <CodeBox_1.default code={`import Calendar from '@components/Calendar';`} copyText={`import Calendar from '@components/Calendar';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div className="my-7">
        <Calendar_1.default />
      </div>
      <CodeBox_1.default code={`import Calendar from '@components/Calendar';

function Example() {
  return <Calendar />;
}

export default Example;`} copyText={`import Calendar from '@components/Calendar';

function Example() {
  return <Calendar />;
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.3. Customizing Calendar</h2>
      <p>
        <code>Calendar</code> 컴포넌트는 다양한 속성을 통해 사용자 정의할 수
        있습니다. 기본 날짜를 설정하거나 날짜 선택 시 호출될 콜백 함수를 전달할
        수 있습니다.
      </p>

      <div className="my-7">
        <Calendar_1.default defaultValue={new Date()} onDateSelect={(date) => console.log(date)}/>
      </div>

      <CodeBox_1.default code={`import Calendar from '@components/Calendar';

function Example() {
  return (
    <Calendar
      defaultValue={new Date()}
      onDateSelect={(date) => console.log(date)}
    />
  );
}

export default Example;`} copyText={`import Calendar from '@components/Calendar';

function Example() {
  return (
    <Calendar
      defaultValue={new Date()}
      onDateSelect={(date) => console.log(date)}
    />
  );
}

export default Example;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.4. Props</h2>
      <p>
        <code>Calendar</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>onDateSelect</code>
            </td>
            <td>사용자가 날짜를 선택할 때 호출되는 콜백 함수입니다.</td>
            <td>
              <code>(date: Date) =&gt; void</code>
            </td>
            <td>
              <code>undefined</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>defaultValue</code>
            </td>
            <td>달력이 로드될 때 기본으로 선택된 날짜입니다.</td>
            <td>
              <code>Date</code>
            </td>
            <td>
              <code>new Date()</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">1.5. Full Example</h2>
      <CodeBox_1.default code={`import Calendar from '@components/Calendar';

function Example() {
  return (
    <div>
      <Calendar
        defaultValue={new Date()}
        onDateSelect={(date) => console.log(date)}
      />
    </div>
  );
}

export default Example;`} copyText={`import Calendar from '@components/Calendar';

function Example() {
  return (
    <div>
      <Calendar
        defaultValue={new Date()}
        onDateSelect={(date) => console.log(date)}
      />
    </div>
  );
}

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>
      <hr />
      <h1 className="text-[#2D3748]">2. CalendarRange</h1>
      <p>
        <code>CalendarRange</code> 컴포넌트는 날짜 범위를 선택할 수 있는 달력을
        제공합니다. 사용자는 시작 날짜와 종료 날짜를 선택할 수 있으며, 선택된
        범위는 부모 컴포넌트로 전달될 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">2.1. Import</h2>
      <CodeBox_1.default code={`import CalendarRange from '@components/CalendarRange';`} copyText={`import CalendarRange from '@components/CalendarRange';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">2.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div className="my-7">
        <CalendarRange_1.default />
      </div>
      <CodeBox_1.default code={`import CalendarRange from '@components/CalendarRange';

function Example() {
  return <CalendarRange />;
}

export default Example;`} copyText={`import CalendarRange from '@components/CalendarRange';

function Example() {
  return <CalendarRange />;
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">2.3. Customizing CalendarRange</h2>
      <p>
        <code>CalendarRange</code> 컴포넌트는 날짜 선택 시 호출될 콜백 함수인{" "}
        <code>onDateSelect</code>를 전달하여 선택된 날짜 범위를 처리할 수
        있습니다.
      </p>

      <div className="my-7">
        <CalendarRange_1.default onDateSelect={(startDate, endDate) => console.log("Selected range:", startDate, "to", endDate)}/>
      </div>

      <CodeBox_1.default code={`import CalendarRange from '@components/CalendarRange';

function Example() {
  return (
    <CalendarRange 
      onDateSelect={(startDate, endDate) => console.log("Selected range:", startDate, "to", endDate)}
    />
  );
}

export default Example;`} copyText={`import CalendarRange from '@components/CalendarRange';

function Example() {
  return (
    <CalendarRange 
      onDateSelect={(startDate, endDate) => console.log("Selected range:", startDate, "to", endDate)}
    />
  );
}

export default Example;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">2.4. Props</h2>
      <p>
        <code>CalendarRange</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>onDateSelect</code>
            </td>
            <td>사용자가 날짜 범위를 선택할 때 호출되는 콜백 함수입니다.</td>
            <td>
              <code>(startDate: Date, endDate: Date) =&gt; void</code>
            </td>
            <td>
              <code>undefined</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">2.5. Full Example</h2>
      <CodeBox_1.default code={`import CalendarRange from '@components/CalendarRange';

function Example() {
  return (
    <div>
      <CalendarRange 
        onDateSelect={(startDate, endDate) => console.log("Selected range:", startDate, "to", endDate)}
      />
    </div>
  );
}

export default Example;`} copyText={`import CalendarRange from '@components/CalendarRange';

function Example() {
  return (
    <div>
      <CalendarRange 
        onDateSelect={(startDate, endDate) => console.log("Selected range:", startDate, "to", endDate)}
      />
    </div>
  );
}

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>
    </div>);
};
exports.default = CalendarDocs;
