import React from "react";
import useRemote from "../Remote/useRemote"; // 상태 관리 로직 가져오기
import Select from "@components/Select/Select";

const Remote = () => {
  const { componentType, props, setProps, setComponentType } = useRemote();

  // 컴포넌트 타입별 설정 폼을 렌더링
  const renderControlPanel = () => {
    switch (componentType) {
      case "button":
        return (
          <div>
            <h2>Button Settings</h2>
            <label>
              Color:
              <input
                type="color"
                value={props.color}
                onChange={(e) => setProps({ color: e.target.value })}
              />
            </label>
            <label>
              Size:
              {/* <Select
                onChange={(e) => setProps({ size: e.target.value })}
                option={["small", "medium", "large"]}
                placeholder="Select an Option"
              /> */}
              <select
                value={props.size}
                onChange={(e) => setProps({ size: e.target.value })}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </label>
          </div>
        );
      case "input":
        return (
          <div>
            <h2>Input Settings</h2>
            <label>
              Placeholder:
              <input
                type="text"
                value={props.placeholder}
                onChange={(e) => setProps({ placeholder: e.target.value })}
              />
            </label>
            <label>
              Disabled:
              <input
                type="checkbox"
                checked={props.disabled}
                onChange={(e) => setProps({ disabled: e.target.checked })}
              />
            </label>
          </div>
        );
      // 필요한 경우 다른 컴포넌트 타입에 대한 설정 폼을 추가
      default:
        return <div>Select a component to configure</div>;
    }
  };

  return (
    <div className="remote-control">
      <h2>Remote Control</h2>
      <label>
        Select Component:
        <select
          value={componentType}
          onChange={(e) => setComponentType(e.target.value)}
        >
          <option value="button">Button</option>
          <option value="input">Input</option>
          {/* 다른 컴포넌트 타입 추가 */}
        </select>
      </label>
      {renderControlPanel()}
    </div>
  );
};

export default Remote;
