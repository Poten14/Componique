import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
  return (
    <div className="relative">
      <CopyToClipboard text={copyText} onCopy={() => handleCopy(index)}>
        <button className="copyButton">
          {copied[index] ? "Copied!" : "Copy"}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>
    </div>
  );
};

export default CodeBox;
