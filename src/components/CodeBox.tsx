import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "./Button/Button";
import {
  vscDarkPlus,
  vs,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";
interface CodeBoxProps {
  code: string;
  copyText: string;
  language: string;
  index: number;
  copied: { [key: number]: boolean };
  handleCopy: (index: number) => void;
}

const CodeBox: React.FC<CodeBoxProps> = ({
  code,
  copyText,
  language,
  index,
  copied,
  handleCopy,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // 다크 모드 상태 추가

  useEffect(() => {
    // 다크 모드 상태 체크 함수
    const checkDarkMode = () => {
      const darkMode = document.documentElement.classList.contains("dark");
      setIsDarkMode(darkMode);
    };

    checkDarkMode(); // 초기 다크 모드 상태 체크
    window.addEventListener("storage", checkDarkMode);

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("storage", checkDarkMode);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      <CopyToClipboard text={copyText} onCopy={() => handleCopy(index)}>
        <Button
          icon={copied[index] ? "icon-check" : undefined}
          className="copyButton dark:bg-[#2A6490]"
          iconColor={copied[index] ? "green" : "white"}
        >
          {copied[index] ? "Copied!" : "Copy"}
        </Button>
      </CopyToClipboard>
      <SyntaxHighlighter
        language={language}
        style={isDarkMode ? vscDarkPlus : undefined}
        customStyle={
          isDarkMode
            ? { backgroundColor: "#2A2E39" }
            : {
                backgroundColor: "#F8F8F8",
                padding: "1rem",
                borderRadius: "0.5rem",
              }
        }
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBox;
