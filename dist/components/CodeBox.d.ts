interface CodeBoxProps {
    code: string;
    copyText: string;
    language: string;
    index: number;
    copied: {
        [key: number]: boolean;
    };
    handleCopy: (index: number) => void;
}
declare const CodeBox: React.FC<CodeBoxProps>;
export default CodeBox;
