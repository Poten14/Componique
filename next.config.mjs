import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 기타 Next.js 설정
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"], // mdx 확장자를 페이지로 인식
};
const withMDX = createMDX({
  // MDX와 관련된 remark, rehype 플러그인을 추가할 수 있음
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
