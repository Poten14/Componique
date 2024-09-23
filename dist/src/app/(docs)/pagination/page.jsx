"use client";
import React, { useState } from "react";
import CodeBox from "@components/CodeBox";
import Pagination from "@components/Pagination/Pagination";
const PaginationDoc = () => {
    const [copied, setCopied] = useState({});
    const [currentPage, setCurrentPage] = useState(3);
    const totalPages = 10;
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (<div className="prose mb-40 max-w-[850px] text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">1. Pagination</h1>
      <p>
        <code>Pagination</code> 컴포넌트는 페이지 번호를 표시하고 페이지 이동을
        가능하게 해주는 컴포넌트입니다. 다양한 스타일, 색상, 모양 등을
        커스터마이즈할 수 있습니다.
      </p>

      <CodeBox code={`import { Pagination } from '@componique/react';`} copyText={`import { Pagination } from '@components/Pagination';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.2. Usage</h2>
      <p>
        아래는 <code>Pagination</code> 컴포넌트의 기본 사용 예제입니다:
      </p>
      <div className="my-7 space-x-3 space-y-4">
        <Pagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange}/>
      </div>
      <CodeBox code={`import { Pagination } from '@components/Pagination';

function Example() {
  const [currentPage, setCurrentPage] = useState(3);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  return (
    <Pagination
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
  />
  );
}

export default Example;`} copyText={`import { Pagination } from '@components/Pagination';

        function Example() {
          const [currentPage, setCurrentPage] = useState(3);
        
          const handlePageChange = (page: number) => {
            setCurrentPage(page);
          };
          
          return (
            <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
          />
          );
        }
        
        export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">
        1.3. Changing the Variant of the Pagination
      </h2>
      <p>
        <code>Pagination</code> 컴포넌트는 다양한 모양으로 제공됩니다. 기본
        모양은 <code>circle</code>입니다:
      </p>
      <ul>
        <li>
          <code>circle</code>: 원형 버튼
        </li>
        <li>
          <code>square</code>: 사각형 버튼
        </li>
      </ul>
      <div className="my-7 space-y-4">
        <Pagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange}/>
        <Pagination variant="square" currentPage={currentPage} totalPages={10} onPageChange={handlePageChange}/>
      </div>
      <CodeBox code={`import { Pagination } from '@componique/react';

function Example() {
  const [currentPage, setCurrentPage] = useState(3);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  return (
  <>
    <Pagination
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
    />
    <Pagination
    variant="square"
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
    />
  </>
  );
}

export default Example;`} copyText={`import { Pagination } from '@componique/react';

        function Example() {
          const [currentPage, setCurrentPage] = useState(3);
        
          const handlePageChange = (page: number) => {
            setCurrentPage(page);
          };
          
          return (
          <>
            <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
            />
            <Pagination
            variant="square"
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
            />
          </>
          );
        }
        
        export default Example;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">
        1.4. Changing the Style of the Pagination
      </h2>
      <p>
        <code>Pagination</code> 컴포넌트는 다양한 스타일 타입으로 제공됩니다.
        기본 스타일 타입은 <code>filled</code>입니다:
      </p>
      <ul>
        <li>
          <code>filled</code>: 버튼의 배경색이 채워진 스타일
        </li>
        <li>
          <code>outlined</code>: 버튼의 외곽선만 있는 스타일
        </li>
        <li>
          <code>outlined-focused</code>: 포커스된 외곽선 스타일
        </li>
        <li>
          <code>filled-outlined</code>: 채워진 외곽선 스타일
        </li>
      </ul>
      <div className="my-7 space-y-4">
        <Pagination currentPage={currentPage} totalPages={10} styleType="outlined" onPageChange={handlePageChange}/>
        <Pagination currentPage={currentPage} totalPages={10} styleType="outlined-focused" onPageChange={handlePageChange}/>
        <Pagination currentPage={currentPage} totalPages={10} styleType="filled-outlined" onPageChange={handlePageChange}/>
      </div>
      <CodeBox code={`import { Pagination } from '@componique/react';

function Example() {
  const [currentPage, setCurrentPage] = useState(3);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  return (
  <>
    <Pagination
    styleType = "filled"
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
    />
    <Pagination
    styleType = "outlined"
    variant="square"
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
    />
    <Pagination
    styleType = "outlined-focused"
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
    />
    <Pagination
    styleType = "filled-outlined"
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
      />
  </>
  );
}
        
export default Example;`} copyText={`import { Pagination } from '@componique/react';

function Example() {
  const [currentPage, setCurrentPage] = useState(3);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  return (
  <>
    <Pagination
    styleType = "filled"
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
    />
    <Pagination
    styleType = "outlined"
    variant="square"
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
    />
    <Pagination
    styleType = "outlined-focused"
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
    />
    <Pagination
    styleType = "filled-outlined"
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
    />
  </>
  );
}

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">
        1.5. Changing the Color of the Pagination
      </h2>
      <p>
        <code>Pagination</code> 컴포넌트는 다양한 색상으로 제공됩니다. 기본
        색상은 <code className="bg-Basic text-white">Basic</code>입니다:
      </p>
      <ul>
        <li>
          <code className="bg-Basic text-white">Basic</code>: 기본 색상
        </li>
        <li>
          <code className="bg-Primary text-white">Primary</code>: 주요 색상
        </li>
        <li>
          <code className="bg-gray text-white">gray</code>: 회색
        </li>
        <li>
          <code className="bg-Secondary text-white">Secondary</code>: 보조 색상
        </li>
        <li>
          <code className="bg-Success text-white">Success</code>: 성공 색상
        </li>
        <li>
          <code className="bg-Warning text-white">Warning</code>: 경고 색상
        </li>
        <li>
          <code className="bg-Danger text-white">Danger</code>: 위험 색상
        </li>
        <li>
          <code className="bg-white text-Gray">White</code>: 흰색
        </li>
      </ul>
      <div className="my-7 space-y-4">
        <Pagination styleType="filled" currentPage={currentPage} totalPages={10} color="Basic" onPageChange={handlePageChange}/>
        <Pagination styleType="filled" currentPage={currentPage} totalPages={10} color="Primary" onPageChange={handlePageChange}/>
        <Pagination styleType="filled" currentPage={currentPage} totalPages={10} color="gray" onPageChange={handlePageChange}/>
        <Pagination styleType="filled" currentPage={currentPage} totalPages={10} color="Secondary" onPageChange={handlePageChange}/>
        <Pagination styleType="filled" currentPage={currentPage} totalPages={10} color="Success" onPageChange={handlePageChange}/>
        <Pagination styleType="filled" currentPage={currentPage} totalPages={10} color="Warning" onPageChange={handlePageChange}/>
        <Pagination styleType="filled" currentPage={currentPage} totalPages={10} color="Danger" onPageChange={handlePageChange}/>
        <Pagination styleType="filled" currentPage={currentPage} totalPages={10} color="White" onPageChange={handlePageChange}/>
      </div>
      <CodeBox code={`import { Pagination } from '@componique/react';

function Example() {
  const [currentPage, setCurrentPage] = useState(3);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Pagination
      styleType="filled"
      currentPage={currentPage}
      totalPages={10}
      color="Basic"
      onPageChange={handlePageChange}
      />
      <Pagination
      styleType="filled"
      currentPage={currentPage}
      totalPages={10}
      color="Primary"
      onPageChange={handlePageChange}
      />
      <Pagination
      styleType="filled"
      currentPage={currentPage}
      totalPages={10}
      color="gray"
      onPageChange={handlePageChange}
      />
      <Pagination
      styleType="filled"
      currentPage={currentPage}
      totalPages={10}
      color="Secondary"
      onPageChange={handlePageChange}
      />
      <Pagination
      styleType="filled"
      currentPage={currentPage}
      totalPages={10}
      color="Success"
      onPageChange={handlePageChange}
      />
      <Pagination
      styleType="filled"
      currentPage={currentPage}
      totalPages={10}
      color="Warning"
      onPageChange={handlePageChange}
      />
      <Pagination
      styleType="filled"
      currentPage={currentPage}
      totalPages={10}
      color="Danger"
      onPageChange={handlePageChange}
      />
      <Pagination
      styleType="filled"
      currentPage={currentPage}
      totalPages={10}
      color="White"
      onPageChange={handlePageChange}
      />
    </>
  );
}

export default Example;`} copyText={`import { Pagination } from '@componique/react';

        function Example() {
          const [currentPage, setCurrentPage] = useState(3);
        
          const handlePageChange = (page: number) => {
            setCurrentPage(page);
          };
          
          return (
          <>
            <Pagination
            styleType = "filled"
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
            />
            <Pagination
            styleType = "outlined"
            variant="square"
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
            />
            <Pagination
            styleType = "outlined-focused"
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
            />
            <Pagination
            styleType = "filled-outlined"
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
              />
          </>
          );
        }
                
        export default Example;`} language="tsx" index={5} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.6. Props</h2>
      <p>
        <code>Pagination</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>currentPage</code>
            </td>
            <td>현재 페이지를 설정합니다.</td>
            <td>
              <code>number</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>totalPages</code>
            </td>
            <td>전체 페이지 수를 설정합니다.</td>
            <td>
              <code>number</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>variant</code>
            </td>
            <td>페이지 버튼의 모양을 설정합니다.</td>
            <td>
              <code>"circle" | "square"</code>
            </td>
            <td>
              <code>"circle"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>styleType</code>
            </td>
            <td>페이지 버튼의 스타일 타입을 설정합니다.</td>
            <td>
              <code>
                "filled" | "outlined" | "outlined-focused" | "filled-outlined"
              </code>
            </td>
            <td>
              <code>"filled"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>페이지 버튼의 색상을 설정합니다.</td>
            <td>
              <code>
                "Basic" | "Primary" | "gray" | "Secondary" | "Success" |
                "Warning" | "Danger" | "White"
              </code>
            </td>
            <td>
              <code>"Primary"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onPageChange</code>
            </td>
            <td>페이지 변경 시 호출되는 함수입니다.</td>
            <td>
              <code>(page: number) =&gt; void</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>showFirstLastButtons</code>
            </td>
            <td>
              첫 페이지와 마지막 페이지로 이동하는 버튼을 표시할지 여부를
              설정합니다.
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>false</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>boundaryRange</code>
            </td>
            <td>첫/마지막 페이지 근처에 표시할 페이지 수를 설정합니다.</td>
            <td>
              <code>number</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>siblingRange</code>
            </td>
            <td>현재 페이지를 중심으로 표시할 페이지 수를 설정합니다.</td>
            <td>
              <code>number</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>disabled</code>
            </td>
            <td>페이지네이션 전체를 비활성화할지 여부를 설정합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>false</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">1.7. Full Example</h2>
      <CodeBox code={`import { Pagination } from '@componique/react';

        function Example() {
          const [currentPage, setCurrentPage] = useState(3);
        
          const handlePageChange = (page: number) => {
            setCurrentPage(page);
          };
          
          return (
          <>
            <Pagination
            variant="outlined-focused"
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
            styleType="filled"
            color="Success"
            showFirstLastButtons={true}
            />
          </>
          );
        }
        
        export default Example;`} copyText={`import { Pagination } from '@componique/react';

        function Example() {
          const [currentPage, setCurrentPage] = useState(3);
        
          const handlePageChange = (page: number) => {
            setCurrentPage(page);
          };
          
          return (
          <>
            <Pagination
            variant="outlined-focused"
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
            styleType="filled"
            color="Success"
            showFirstLastButtons={true}
            />
          </>
          );
        }
        
        export default Example;`} language="tsx" index={6} copied={copied} handleCopy={handleCopy}/>
    </div>);
};
export default PaginationDoc;
