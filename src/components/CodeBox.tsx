import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "./Button/Button";
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
        <Button
          icon={copied[index] ? "icon-check" : undefined}
          className="copyButton"
          iconColor={copied[index] ? "green" : "white"}
          size="small"
        >
          {copied[index] ? "Copied!" : "Copy"}
        </Button>
      </CopyToClipboard>
      <SyntaxHighlighter
        language="javascript"
        customStyle={{
          backgroundColor: "#fff",
          border: "1px solid #EFEFEF",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBox;
