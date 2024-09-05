import { useState } from "react";

// 각 컴포넌트가 사용할 기본 props 설정
interface RemoteState {
  componentType: string; // 현재 조작 중인 컴포넌트 유형 (예: 버튼, 인풋 등)
  props: Record<string, any>; // 각 컴포넌트의 props를 저장
  setProps: (newProps: Record<string, any>) => void;
  setComponentType: (type: string) => void;
}

// 초기 상태
const useRemote = (): RemoteState => {
  const [componentType, setComponentType] = useState<string>("button");
  const [props, setProps] = useState<Record<string, any>>({
    button: { color: "Basic", size: "medium" },
    input: { placeholder: "Enter text", disabled: false },
    // 다른 컴포넌트의 초기 props도 추가 가능
  });

  const updateProps = (newProps: Record<string, any>) => {
    setProps((prevProps) => ({
      ...prevProps,
      [componentType]: { ...prevProps[componentType], ...newProps },
    }));
  };

  return {
    componentType,
    props: props[componentType] || {},
    setProps: updateProps,
    setComponentType,
  };
};

export default useRemote;
