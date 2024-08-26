// next.config.js
import withMDX from "@next/mdx";

const nextConfig = {
  // 기타 Next.js 설정
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"], // mdx 확장자를 페이지로 인식
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);
