import type { MDXComponents } from "mdx/types";
import Button from "@components/Button/Button";
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 여기에 MDX에서 사용할 글로벌 컴포넌트를 추가할 수 있음
    ...components,
    Button,
  };
}
