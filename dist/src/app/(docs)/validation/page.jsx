"use client";
import React, { useState } from "react";
import CodeBox from "@components/CodeBox";
import ValidationEmail from "@components/Validation/ValidationEmail";
import ValidationID from "@components/Validation/ValidationID";
import ValidationPW from "@components/Validation/ValidationPW";
import ValidationPWConfirm from "@components/Validation/ValidationPWConfirm";
import ValidationPhone from "@components/Validation/ValidationPhone";
const ValidationComponent = () => {
    const [copied, setCopied] = useState({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return (<div className="prose max-w-[850px] p-5 text-[#6D6D6D] dark:text-[#bdbdbd]">
      {/* ValidationEmail */}
      <div>
        <h1 className="text-[#2D3748] dark:text-white">1. ValidationEmail</h1>
        <p>
          <code>ValidationEmail</code> 컴포넌트는 사용자가 입력한 이메일이
          유효한 형식인지 검사하는 기능을 제공합니다. 유효하지 않은 형식일 경우
          오류 메시지를 화면에 표시합니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">1.1. Import</h2>
        <CodeBox code={`import ValidationEmail from '@components/Validation/ValidationEmail';`} copyText={`import ValidationEmail from '@components/Validation/ValidationEmail';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">1.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="m-7 flex gap-4">
          <ValidationEmail />
        </div>
        <br />

        <CodeBox code={`import ValidationEmail from '@components/Validation/ValidationEmail';

function Example() {
  return (
    <ValidationEmail />
  );
}

export default Example;`} copyText={`import ValidationEmail from '@components/Validation/ValidationEmail';

function Example() {
  return (
    <ValidationEmail />
  );
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">1.3. Props</h2>
        <p>
          <code>ValidationEmail</code> 컴포넌트는 Prop을 받지 않습니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">
          1.4. 유효성 검사 함수 설명
        </h2>
        <CodeBox code={`const validateEmail = (Email: string) => {
  const emailType = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/; // 이메일 형식 정규식
  return emailType.test(Email);
};`} copyText={`const validateEmail = (Email: string) => {
  const emailType = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/; // 이메일 형식 정규식
  return emailType.test(Email);
};`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

        <p>
          이 함수는 이메일이 유효한 형식인지 확인합니다. 정규 표현식은 다음과
          같습니다:
        </p>
        <ul>
          <li>
            <code>^[^\\s@]+</code>: 이메일의 시작은 공백이나 '@'이 아닌 문자로
            시작해야 합니다.
          </li>
          <li>
            <code>@</code>: '@' 문자가 있어야 합니다.
          </li>
          <li>
            <code>[^\\s@]+</code>: '@' 이후에는 공백이나 '@'이 아닌 문자가
            있어야 합니다.
          </li>
          <li>
            <code>\\.</code>: '.' 문자가 있어야 합니다.
          </li>
          <li>
            <code>[^\\s@]+$</code>: '.' 뒤에는 공백이나 '@'이 아닌 문자로 끝나야
            합니다.
          </li>
        </ul>

        <h2 className="text-[#2D3748] dark:text-white">1.5. Full Example</h2>
        <CodeBox code={`
// ValidationEmail.tsx
"use client";
import { useState } from "react";

const ValidationEmail = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const ValidateEmail = (Email: string) => {
    const emailType = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/; // 이메일 형식 정규식
    return emailType.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setError(ValidateEmail(value) ? "" : "유효하지 않은 이메일 형식입니다.");
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="이메일을 입력하세요."
        className="text-black border-2 border-black dark:border-[#cdcdcd] dark:text-black"
      />
      {error && (
        <p className="relative z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
export default ValidationEmail;`} copyText={`
// ValidationEmail.tsx
"use client";
import { useState } from "react";

const ValidationEmail = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const ValidateEmail = (Email: string) => {
    const emailType = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/; // 이메일 형식 정규식
    return emailType.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setError(ValidateEmail(value) ? "" : "유효하지 않은 이메일 형식입니다.");
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="이메일을 입력하세요."
        className="text-black border-2 border-black dark:border-[#cdcdcd] dark:text-black"
      />
      {error && (
        <p className="relative z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
export default ValidationEmail;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>
      </div>

      <hr />
      {/* ValidationID */}
      <div>
        <h1 className="text-[#2D3748] dark:text-white">2. ValidationID</h1>
        <p>
          <code>ValidationID</code> 컴포넌트는 사용자가 입력한 ID가 4~12자의
          알파벳 및 숫자로 구성되어 있는지 검사하는 기능을 제공합니다. 유효하지
          않은 형식일 경우 오류 메시지를 화면에 표시합니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">2.1. Import</h2>
        <CodeBox code={`import ValidationID from '@components/Validation/ValidationID';`} copyText={`import ValidationID from '@components/Validation/ValidationID';`} language="tsx" index={5} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">2.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="m-7 flex gap-4">
          <ValidationID />
        </div>
        <br />

        <CodeBox code={`import ValidationID from '@components/Validation/ValidationID';

function Example() {
  return (
    <ValidationID />
  );
}

export default Example;`} copyText={`import ValidationID from '@components/Validation/ValidationID';

function Example() {
  return (
    <ValidationID />
  );
}

export default Example;`} language="tsx" index={6} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">2.3. Props</h2>
        <p>
          <code>ValidationID</code> 컴포넌트는 Prop을 받지 않습니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">
          2.4. 유효성 검사 함수 설명
        </h2>
        <CodeBox code={`const validateID = (ID: string) => {
  const IDType = /^[a-zA-Z0-9]{4,12}$/; // ID 형식 정규식
  return IDType.test(ID);
};`} copyText={`const validateID = (ID: string) => {
  const IDType = /^[a-zA-Z0-9]{4,12}$/; // ID 형식 정규식
  return IDType.test(ID);
};`} language="tsx" index={7} copied={copied} handleCopy={handleCopy}/>

        <p>
          이 함수는 ID가 유효한 형식인지 확인합니다. 정규 표현식은 다음과
          같습니다:
        </p>
        <ul>
          <li>
            <code>^[a-zA-Z0-9]{4 / 12}$</code>: ID가 4자 이상 12자 이하의 알파벳
            대소문자와 숫자로만 구성되어야 합니다.
          </li>
        </ul>

        <h2 className="text-[#2D3748] dark:text-white">2.5. Full Example</h2>
        <CodeBox code={`
// ValidationID.tsx
"use client";
import { useState } from "react";

const ValidationID = () => {
  const [ID, setID] = useState("");
  const [error, setError] = useState("");

  const validateID = (ID: string) => {
    const IDType = /^[a-zA-Z0-9]{4,12}$/;
    return IDType.test(ID);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setID(value);
    setError(validateID(value) ? "" : "4~12자, 문자, 숫자만 입력가능합니다.");
  };

  return (
    <div>
      <input
        type="text"
        value={ID}
        onChange={handleChange}
        placeholder="아이디를 입력해 주세요."
        className="border-2 border-black text-black dark:border-[#cdcdcd] dark:text-black"
      />
      {error && (
        <p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
export default ValidationID;`} copyText={`
// ValidationID.tsx
"use client";
import { useState } from "react";

const ValidationID = () => {
  const [ID, setID] = useState("");
  const [error, setError] = useState("");

  const validateID = (ID: string) => {
    const IDType = /^[a-zA-Z0-9]{4,12}$/;
    return IDType.test(ID);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setID(value);
    setError(validateID(value) ? "" : "4~12자, 문자, 숫자만 입력가능합니다.");
  };

  return (
    <div>
      <input
        type="text"
        value={ID}
        onChange={handleChange}
        placeholder="아이디를 입력해 주세요."
        className="border-2 border-black text-black dark:border-[#cdcdcd] dark:text-black"
      />
      {error && (
        <p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
export default ValidationID;`} language="tsx" index={8} copied={copied} handleCopy={handleCopy}/>
      </div>

      <hr />
      {/* ValidationPW */}
      <div>
        <h1 className="text-[#2D3748] dark:text-white">3. ValidationPW</h1>
        <p>
          <code>ValidationPW</code> 컴포넌트는 사용자가 입력한 비밀번호가 강력한
          보안 요구 사항을 충족하는지 검사합니다. 유효하지 않을 경우 오류
          메시지를 화면에 표시합니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">3.1. Import</h2>
        <CodeBox code={`import ValidationPW from '@components/Validation/ValidationPW';`} copyText={`import ValidationPW from '@components/Validation/ValidationPW';`} language="tsx" index={9} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">3.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="m-7 flex gap-4">
          <ValidationPW />
        </div>
        <br />

        <CodeBox code={`import ValidationPW from '@components/Validation/ValidationPW';

function Example() {
  return (
    <ValidationPW />
  );
}

export default Example;`} copyText={`import ValidationPW from '@components/Validation/ValidationPW';

function Example() {
  return (
    <ValidationPW />
  );
}

export default Example;`} language="tsx" index={10} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">3.3. Props</h2>
        <p>
          <code>ValidationPW</code> 컴포넌트는 Prop을 받지 않습니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">
          3.4. 유효성 검사 함수 설명
        </h2>
        <CodeBox code={`const validatePW = (PW: string) => {
  const PWType = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/; // 비밀번호 형식 정규식
  return PWType.test(PW);
};`} copyText={`const validatePW = (PW: string) => {
  const PWType = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/; // 비밀번호 형식 정규식
  return PWType.test(PW);
};`} language="tsx" index={11} copied={copied} handleCopy={handleCopy}/>

        <p>
          이 함수는 비밀번호가 강력한 보안 요구 사항을 충족하는지 확인합니다.
          정규 표현식은 다음과 같습니다:
        </p>
        <ul>
          <li>
            <code>(?=.*\\d)</code>: 최소 한 개의 숫자가 포함되어야 합니다.
          </li>
          <li>
            <code>(?=.*[a-z])</code>: 최소 한 개의 소문자가 포함되어야 합니다.
          </li>
          <li>
            <code>(?=.*[A-Z])</code>: 최소 한 개의 대문자가 포함되어야 합니다.
          </li>
          <li>
            <code>(?=.*[@#$%^&+=])</code>: 최소 한 개의 특수 문자가 포함되어야
            합니다.
          </li>
          <li>
            <code>.{8}</code>: 모든 문자가 최소 8자 이상이어야 합니다.
          </li>
        </ul>

        <h2 className="text-[#2D3748] dark:text-white">3.5. Full Example</h2>
        <CodeBox code={`
// ValidationPW.tsx
"use client";
import { useState } from "react";

const ValidationPW = () => {
  const [PW, setPW] = useState("");
  const [error, setError] = useState("");

  const validatePW = (PW: string) => {
    const PWType = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    return PWType.test(PW);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPW(value);
    setError(
      validatePW(value)
        ? ""
        : "대소문자, 숫자, 특수 문자가 포함된 최소 8자 이상",
    );
  };

  return (
    <div>
      <input
        type="password"
        value={PW}
        onChange={handleChange}
        placeholder="비밀번호를 입력하세요."
        className="text-black border-2 border-black dark:border-[#cdcdcd] dark:text-black"
      />
      {error && (
        <p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
export default ValidationPW;`} copyText={`
// ValidationPW.tsx
"use client";
import { useState } from "react";

const ValidationPW = () => {
  const [PW, setPW] = useState("");
  const [error, setError] = useState("");

  const validatePW = (PW: string) => {
    const PWType = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    return PWType.test(PW);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPW(value);
    setError(
      validatePW(value)
        ? ""
        : "대소문자, 숫자, 특수 문자가 포함된 최소 8자 이상",
    );
  };

  return (
    <div>
      <input
        type="password"
        value={PW}
        onChange={handleChange}
        placeholder="비밀번호를 입력하세요."
        className="text-black border-2 border-black dark:border-[#cdcdcd] dark:text-black"
      />
      {error && (
        <p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
export default ValidationPW;`} language="tsx" index={12} copied={copied} handleCopy={handleCopy}/>
      </div>

      <hr />
      {/* ValidationPWConfirm */}
      <div>
        <h1 className="text-[#2D3748] dark:text-white">
          4. ValidationPWConfirm
        </h1>
        <p>
          <code>ValidationPWConfirm</code> 컴포넌트는 사용자가 두 번 입력한
          비밀번호가 일치하는지 검사합니다. 유효하지 않을 경우 오류 메시지를
          화면에 표시합니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">4.1. Import</h2>
        <CodeBox code={`import ValidationPWConfirm from '@components/Validation/ValidationPWConfirm';`} copyText={`import ValidationPWConfirm from '@components/Validation/ValidationPWConfirm';`} language="tsx" index={13} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">4.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="m-7 flex gap-4">
          <ValidationPWConfirm />
        </div>
        <br />

        <CodeBox code={`import ValidationPWConfirm from '@components/Validation/ValidationPWConfirm';

function Example() {
  return (
    <ValidationPWConfirm />
  );
}

export default Example;`} copyText={`import ValidationPWConfirm from '@components/Validation/ValidationPWConfirm';

function Example() {
  return (
    <ValidationPWConfirm />
  );
}

export default Example;`} language="tsx" index={14} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">4.3. Props</h2>
        <p>
          <code>ValidationPWConfirm</code> 컴포넌트는 Prop을 받지 않습니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">
          4.4. 유효성 검사 함수 설명
        </h2>
        <CodeBox code={`const validatePWConfirm = (pw: string, confirmPW: string) => {
  return pw === confirmPW; // 비밀번호 일치 확인
};`} copyText={`const validatePWConfirm = (pw: string, confirmPW: string) => {
  return pw === confirmPW; // 비밀번호 일치 확인
};`} language="tsx" index={15} copied={copied} handleCopy={handleCopy}/>

        <p>이 함수는 두 개의 비밀번호가 일치하는지 확인합니다.</p>

        <h2 className="text-[#2D3748] dark:text-white">4.5. Full Example</h2>
        <CodeBox code={`
// ValidationPWConfirm.tsx
"use client";
import { useState } from "react";

const ValidationPWConfirm = () => {
  const [PW, setPW] = useState("");
  const [error, setError] = useState("");
  const [confirmPW, setConfirmPW] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const validatePW = (PW: string) => {
    const PWType = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    return PWType.test(PW);
  };

  const handleChangePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPW(value);
    setError(
      validatePW(value)
        ? ""
        : "대소문자, 숫자, 특수 문자가 포함된 최소 8자 이상",
    );
    setConfirmError("");
  };

  const handleChangeConfirmPW = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPW(value);
    setConfirmError(value === PW ? "" : "비밀번호가 일치하지 않습니다.");
  };

  return (
    <div>
      <div>
        <input
          type="password"
          value={PW}
          onChange={handleChangePW}
          placeholder="비밀번호를 입력하세요."
          className="border-2 border-black text-black dark:border-[#cdcdcd] dark:text-white"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
      <div>
        <input
          type="password"
          value={confirmPW}
          onChange={handleChangeConfirmPW}
          placeholder="비밀번호를 다시 입력하세요."
          className="mt-2 border-2 border-black text-black dark:border-[#cdcdcd] dark:text-black"
        />
        {confirmError && (
          <p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
            {confirmError}
          </p>
        )}
      </div>
    </div>
  );
};
export default ValidationPWConfirm;`} copyText={`
// ValidationPWConfirm.tsx
"use client";
import { useState } from "react";

const ValidationPWConfirm = () => {
  const [PW, setPW] = useState("");
  const [error, setError] = useState("");
  const [confirmPW, setConfirmPW] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const validatePW = (PW: string) => {
    const PWType = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    return PWType.test(PW);
  };

  const handleChangePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPW(value);
    setError(
      validatePW(value)
        ? ""
        : "대소문자, 숫자, 특수 문자가 포함된 최소 8자 이상",
    );
    setConfirmError("");
  };

  const handleChangeConfirmPW = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPW(value);
    setConfirmError(value === PW ? "" : "비밀번호가 일치하지 않습니다.");
  };

  return (
    <div>
      <div>
        <input
          type="password"
          value={PW}
          onChange={handleChangePW}
          placeholder="비밀번호를 입력하세요."
          className="border-2 border-black text-black dark:border-[#cdcdcd] dark:text-white"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
      <div>
        <input
          type="password"
          value={confirmPW}
          onChange={handleChangeConfirmPW}
          placeholder="비밀번호를 다시 입력하세요."
          className="mt-2 border-2 border-black text-black dark:border-[#cdcdcd] dark:text-black"
        />
        {confirmError && (
          <p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
            {confirmError}
          </p>
        )}
      </div>
    </div>
  );
};
export default ValidationPWConfirm;`} language="tsx" index={16} copied={copied} handleCopy={handleCopy}/>
      </div>

      <hr />
      {/* ValidationPhone */}
      <div>
        <h1 className="text-[#2D3748] dark:text-white">5. ValidationPhone</h1>
        <p>
          <code>ValidationPhone</code> 컴포넌트는 사용자가 입력한 핸드폰 번호가
          유효한지 검사합니다. 유효하지 않을 경우 오류 메시지를 화면에
          표시합니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">5.1. Import</h2>
        <CodeBox code={`import ValidationPhone from '@components/Validation/ValidationPhone';`} copyText={`import ValidationPhone from '@components/Validation/ValidationPhone';`} language="tsx" index={17} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">5.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="m-7 flex gap-4">
          <ValidationPhone />
        </div>
        <br />

        <CodeBox code={`import ValidationPhone from '@components/Validation/ValidationPhone';

function Example() {
  return (
    <ValidationPhone />
  );
}

export default Example;`} copyText={`import ValidationPhone from '@components/Validation/ValidationPhone';

function Example() {
  return (
    <ValidationPhone />
  );
}

export default Example;`} language="tsx" index={18} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">5.3. Props</h2>
        <p>
          <code>ValidationPhone</code> 컴포넌트는 Prop을 받지 않습니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">
          5.4. 유효성 검사 함수 설명
        </h2>
        <CodeBox code={`const validatePhone = (phone: string) => {
  const phoneType = /^\\d{10,11}$/; // 핸드폰 번호 형식 정규식
  return phoneType.test(phone);
};`} copyText={`const validatePhone = (phone: string) => {
  const phoneType = /^\\d{10,11}$/; // 핸드폰 번호 형식 정규식
  return phoneType.test(phone);
};`} language="tsx" index={19} copied={copied} handleCopy={handleCopy}/>

        <p>
          이 함수는 핸드폰 번호가 유효한지 확인합니다. 정규 표현식은 다음과
          같습니다:
        </p>
        <ul>
          <li>
            <code>^\\d{10 / 11}$</code>: 번호가 10자리 또는 11자리 숫자여야
            합니다.
          </li>
        </ul>

        <h2 className="text-[#2D3748] dark:text-white">5.5. Full Example</h2>
        <CodeBox code={`
// ValidationPhone.tsx
"use client";
import { useState } from "react";

const ValidationPhone = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const validatePhone = (phone: string) => {
    const phoneType = /^\\d{10,11}$/;
    return phoneType.test(phone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    setError(validatePhone(value) ? "" : "-없이 번호만 입력해주세요.");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="핸드폰 번호를 입력해주세요."
        className="text-black border-2 border-black dark:border-[#cdcdcd] dark:text-black"
        onChange={handleChange}
        value={phone}
      />
      {error && (
        <p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
export default ValidationPhone;`} copyText={`
// ValidationPhone.tsx
"use client";
import { useState } from "react";

const ValidationPhone = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const validatePhone = (phone: string) => {
    const phoneType = /^\\d{10,11}$/;
    return phoneType.test(phone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    setError(validatePhone(value) ? "" : "-없이 번호만 입력해주세요.");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="핸드폰 번호를 입력해주세요."
        className="text-black border-2 border-black dark:border-[#cdcdcd] dark:text-black"
        onChange={handleChange}
        value={phone}
      />
      {error && (
        <p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
export default ValidationPhone;`} language="tsx" index={20} copied={copied} handleCopy={handleCopy}/>
      </div>
    </div>);
};
export default ValidationComponent;
