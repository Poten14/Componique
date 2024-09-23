"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_syntax_highlighter_1 = require("react-syntax-highlighter");
const react_copy_to_clipboard_1 = require("react-copy-to-clipboard");
const Button_1 = __importDefault(require("./Button/Button"));
const prism_1 = require("react-syntax-highlighter/dist/esm/styles/prism");
const react_1 = require("react");
const CodeBox = ({ code, copyText, language, index, copied, handleCopy, }) => {
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false); // 다크 모드 상태 추가
    (0, react_1.useEffect)(() => {
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
    return (<div className="relative">
      <react_copy_to_clipboard_1.CopyToClipboard text={copyText} onCopy={() => handleCopy(index)}>
        <Button_1.default icon={copied[index] ? "icon-check" : undefined} className="copyButton dark:bg-[#2A6490]" iconColor={copied[index] ? "green" : "white"}>
          {copied[index] ? "Copied!" : "Copy"}
        </Button_1.default>
      </react_copy_to_clipboard_1.CopyToClipboard>
      <react_syntax_highlighter_1.Prism language={language} style={isDarkMode ? prism_1.vscDarkPlus : undefined} customStyle={isDarkMode
            ? { backgroundColor: "#2A2E39" }
            : {
                backgroundColor: "#F8F8F8",
                padding: "1rem",
                borderRadius: "0.5rem",
            }}>
        {code}
      </react_syntax_highlighter_1.Prism>
    </div>);
};
exports.default = CodeBox;
