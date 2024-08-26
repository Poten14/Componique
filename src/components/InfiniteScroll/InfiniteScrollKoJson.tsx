import { useState, useEffect } from "react";
import InfiniteScrollBasic from "./InfiniteScrollBasic";

interface Data {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  UserId: number;
}

const InfiniteScrollKoJson = () => {
  const [content, setContent] = useState<string[]>([]);

  useEffect(() => {
    const fetchJsonContent = async () => {
      try {
        const result = await fetch("https://koreanjson.com/posts/1");
        const jsonData: Data = await result.json();

        const title = jsonData.title.split(".");
        const content = jsonData.content.split(".");

        const displayText = [...title, ...content];
        setContent(displayText);
      } catch (error) {
        console.error("Failed load Data", error);
      }
    };

    fetchJsonContent();
  }, []);

  return (
    <div>
      <InfiniteScrollBasic content={content} />
    </div>
  );
};
export default InfiniteScrollKoJson;
