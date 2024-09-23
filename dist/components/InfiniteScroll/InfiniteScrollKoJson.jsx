"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const InfiniteScrollBasic_1 = __importDefault(require("./InfiniteScrollBasic"));
const InfiniteScrollKoJson = () => {
    const [content, setContent] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch("https://koreanjson.com/posts/1");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log("Fetched data:", data); // Fetch된 데이터 확인
                // 제목과 내용을 문장 단위로 분리하여 배열로 저장
                const titleParts = data.title ? data.title.split(".") : [];
                const contentParts = data.content ? data.content.split(".") : [];
                const displayText = [...titleParts, ...contentParts].filter((item) => item.trim() !== ""); // 공백 문자열 제거
                setContent(displayText);
            }
            catch (error) {
                console.error("Failed to load data:", error);
            }
        };
        fetchBlogPosts();
    }, []);
    return (<div>
      {/* content가 비어있을 때 로딩 표시 추가 */}
      {content.length > 0 ? (<InfiniteScrollBasic_1.default content={content}/>) : (<p>Loading...</p>)}
    </div>);
};
exports.default = InfiniteScrollKoJson;
