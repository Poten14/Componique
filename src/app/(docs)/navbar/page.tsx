// "use client";

// import React, { useState } from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import Logo from "../../../../public/images/logo.svg";
// import Navbar from "@components/Navbar/Navbar";

// const NavbarDocs: React.FC = () => {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     setCopied(true);
//     setTimeout(() => setCopied(false), 500); // 0.5초 후에 상태를 초기화
//   };

//   return (
//     <div className="prose p-5 text-[#6D6D6D]">
//       <h1 className="text-[#2D3748]">Navbar</h1>
//       <p>
//         <code>Navbar</code> 컴포넌트는 웹 페이지 상단에 배치되어 네비게이션
//         링크와 로고를 표시하는 기본 UI 요소입니다. 다양한 크기, 색상, 위치
//         옵션을 통해 커스터마이즈 할 수 있습니다.
//       </p>

//       <h2 className="text-[#2D3748]">Import</h2>
//       <div className="relative">
//         <CopyToClipboard
//           text={`import { Navbar } from '@components/Navbar';`}
//           onCopy={handleCopy}
//         >
//           <button className="copyButton">{copied ? "Copied!" : "Copy"}</button>
//         </CopyToClipboard>
//         <SyntaxHighlighter language="tsx">
//           {`import { Navbar } from '@components/Navbar';`}
//         </SyntaxHighlighter>
//       </div>

//       <h2 className="text-[#2D3748]">Usage</h2>
//       <p>기본 사용 예제는 아래와 같습니다:</p>
//       <div style={{ marginBottom: "20px" }}>
//         <Navbar logoSrc={Logo} logoName="Componique" />
//       </div>
//       <div className="relative">
//         <CopyToClipboard
//           text={`import { Navbar } from '@components/Navbar';

// function Example() {
//   return (
//     <Navbar logoSrc={Logo} logoName="MySite" />
//   );
// }

// export default Example;`}
//           onCopy={handleCopy}
//         >
//           <button className="copyButton">{copied ? "Copied!" : "Copy"}</button>
//         </CopyToClipboard>
//         <SyntaxHighlighter language="tsx">
//           {`
// import { Navbar } from '@components/Navbar';

// function Example() {
//   return (
//     <Navbar logoSrc={Logo} logoName="Componique" />
//   );
// }

// export default Example;
// `}
//         </SyntaxHighlighter>
//       </div>

//       <h2 className="text-[#2D3748]">Changing the Size of the Navbar</h2>
//       <p>
//         <code>Navbar</code> 컴포넌트는 다양한 크기로 제공됩니다. 기본 크기는{" "}
//         <code>small</code>입니다:
//       </p>
//       <ul>
//         <li>
//           <code>small</code>: 작은 크기
//         </li>
//         <li>
//           <code>medium</code>: 중간 크기
//         </li>
//         <li>
//           <code>large</code>: 큰 크기
//         </li>
//       </ul>
//       <div className="space-y-4">
//         <Navbar logoSrc={Logo} logoName="Componique" size="small" />
//         <Navbar logoSrc={Logo} logoName="Componique" size="medium" />
//         <Navbar logoSrc={Logo} logoName="Componique" size="large" />
//       </div>
//       <div className="relative">
//         <CopyToClipboard
//           text={`import { Navbar } from '@components/Navbar';

// function Example() {
//   return (
//     <>
//       <Navbar logoSrc={Logo} logoName="Componique" size="small" />
//       <Navbar logoSrc={Logo} logoName="Componique" size="medium" />
//       <Navbar logoSrc={Logo} logoName="Componique" size="large" />
//     </>
//   );
// }
// export default Example;`}
//           onCopy={handleCopy}
//         >
//           <button className="copyButton">{copied ? "Copied!" : "Copy"}</button>
//         </CopyToClipboard>
//         <SyntaxHighlighter language="tsx">
//           {`
// import { Navbar } from '@components/Navbar';

// function Example() {
//   return (
//     <>
//       <Navbar logoSrc={Logo} logoName="Componique" size="small" />
//       <Navbar logoSrc="/logo.png" logoName="Componique" size="medium" />
//       <Navbar logoSrc="/logo.png" logoName="Componique" size="large" />
//     </>
//   );
// }

// export default Example;
// `}
//         </SyntaxHighlighter>
//       </div>

//       <h2 className="text-[#2D3748]">Changing the Hover Color</h2>
//       <p>
//         <code>Navbar</code> 컴포넌트는 링크에 마우스를 올렸을 때 텍스트 색상을
//         변경할 수 있는 기능을 제공합니다:
//       </p>
//       <ul>
//         <li>
//           <code>skyblue</code>: 하늘색
//         </li>
//         <li>
//           <code>blue</code>: 파란색 (기본값)
//         </li>
//         <li>
//           <code>red</code>: 빨간색
//         </li>
//       </ul>
//       <div className="space-y-4">
//         <Navbar logoSrc="/logo.png" logoName="MySite" hoverColor="skyblue" />
//         <Navbar logoSrc="/logo.png" logoName="MySite" hoverColor="blue" />
//         <Navbar logoSrc="/logo.png" logoName="MySite" hoverColor="red" />
//       </div>
//       <div className="relative">
//         <CopyToClipboard
//           text={`import { Navbar } from '@components/Navbar';

// function Example() {
//   return (
//     <>
//       <Navbar logoSrc="/logo.png" logoName="MySite" hoverColor="skyblue" />
//       <Navbar logoSrc="/logo.png" logoName="MySite" hoverColor="blue" />
//       <Navbar logoSrc="/logo.png" logoName="MySite" hoverColor="red" />
//     </>
//   );
// }
// export default Example;`}
//           onCopy={handleCopy}
//         >
//           <button className="copyButton">{copied ? "Copied!" : "Copy"}</button>
//         </CopyToClipboard>
//         <SyntaxHighlighter language="tsx">
//           {`
// import { Navbar } from '@components/Navbar';

// function Example() {
//   return (
//     <>
//       <Navbar logoSrc="/logo.png" logoName="MySite" hoverColor="skyblue" />
//       <Navbar logoSrc="/logo.png" logoName="MySite" hoverColor="blue" />
//       <Navbar logoSrc="/logo.png" logoName="MySite" hoverColor="red" />
//     </>
//   );
// }

// export default Example;
// `}
//         </SyntaxHighlighter>
//       </div>

//       <h2 className="text-[#2D3748]">Changing the Position of the Navbar</h2>
//       <p>
//         <code>Navbar</code> 컴포넌트는 화면에서의 위치를 설정할 수 있습니다:
//       </p>
//       <ul>
//         <li>
//           <code>static</code>: 기본 위치 (기본값)
//         </li>
//         <li>
//           <code>sticky</code>: 상단에 고정
//         </li>
//         <li>
//           <code>relative</code>: 부모 요소를 기준으로 상대적 위치
//         </li>
//       </ul>
//       <div className="space-y-4">
//         <Navbar logoSrc="/logo.png" logoName="MySite" position="static" />
//         <Navbar logoSrc="/logo.png" logoName="MySite" position="sticky" />
//         <Navbar logoSrc="/logo.png" logoName="MySite" position="relative" />
//       </div>
//       <div className="relative">
//         <CopyToClipboard
//           text={`import { Navbar } from '@components/Navbar';

// function Example() {
//   return (
//     <>
//       <Navbar logoSrc="/logo.png" logoName="MySite" position="static" />
//       <Navbar logoSrc="/logo.png" logoName="MySite" position="sticky" />
//       <Navbar logoSrc="/logo.png" logoName="MySite" position="relative" />
//     </>
//   );
// }
// export default Example;`}
//           onCopy={handleCopy}
//         >
//           <button className="copyButton">{copied ? "Copied!" : "Copy"}</button>
//         </CopyToClipboard>
//         <SyntaxHighlighter language="tsx">
//           {`
// import { Navbar } from '@components/Navbar';

// function Example() {
//   return (
//     <>
//       <Navbar logoSrc="/logo.png" logoName="MySite" position="static" />
//       <Navbar logoSrc="/logo.png" logoName="MySite" position="sticky" />
//       <Navbar logoSrc="/logo.png" logoName="MySite" position="relative" />
//     </>
//   );
// }

// export default Example;
// `}
//         </SyntaxHighlighter>
//       </div>

//       <h2 className="text-[#2D3748]">Props</h2>
//       <p>
//         <code>Navbar</code> 컴포넌트는 아래와 같은 Props를 가집니다:
//       </p>
//       <table>
//         <thead>
//           <tr>
//             <th>Prop</th>
//             <th>Description</th>
//             <th>Type</th>
//             <th>Default</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <code>size</code>
//             </td>
//             <td>Navbar의 크기를 설정합니다.</td>
//             <td>
//               <code>"small" | "medium" | "large"</code>
//             </td>
//             <td>
//               <code>"small"</code>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <code>hoverColor</code>
//             </td>
//             <td>
//               Navbar의 링크에 마우스를 올렸을 때 텍스트 색상을 설정합니다.
//             </td>
//             <td>
//               <code>"skyblue" | "blue" | "red"</code>
//             </td>
//             <td>
//               <code>"blue"</code>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <code>position</code>
//             </td>
//             <td>Navbar의 위치를 설정합니다.</td>
//             <td>
//               <code>"static" | "sticky" | "relative"</code>
//             </td>
//             <td>
//               <code>"static"</code>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <code>logoSrc</code>
//             </td>
//             <td>로고 이미지의 경로를 설정합니다.</td>
//             <td>
//               <code>string</code>
//             </td>
//             <td>
//               <code>-</code>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <code>logoName</code>
//             </td>
//             <td>로고 옆에 표시될 이름을 설정합니다.</td>
//             <td>
//               <code>string</code>
//             </td>
//             <td>
//               <code>-</code>
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       <h2 className="text-[#2D3748]">Full Example</h2>
//       <div className="relative">
//         <CopyToClipboard
//           text={`import { Navbar } from '@components/Navbar';

// function Example() {
//   return (
//     <div>
//       <Navbar logoSrc="/logo.png" logoName="MySite" />
//       <Navbar logoSrc="/logo.png" logoName="MySite" size="medium" />
//       <Navbar logoSrc="/logo.png" logoName="MySite" hoverColor="red" />
//     </div>
//   );
// }

// export default Example;`}
//           onCopy={handleCopy}
//         >
//           <button className="copyButton">{copied ? "Copied!" : "Copy"}</button>
//         </CopyToClipboard>
//         <SyntaxHighlighter language="tsx">
//           {`
// import { Navbar } from '@components/Navbar';

// function Example() {
//   return (
//     <div>
//       <Navbar logoSrc="/logo.png" logoName="MySite" />
//       <Navbar logoSrc="/logo.png" logoName="MySite" size="medium" />
//       <Navbar logoSrc="/logo.png" logoName="MySite" hoverColor="red" />
//     </div>
//   );
// }

// export default Example;
// `}
//         </SyntaxHighlighter>
//       </div>
//     </div>
//   );
// };

// export default NavbarDocs;
