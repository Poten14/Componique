"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CheckBox_1 = __importDefault(require("@components/CheckBox/CheckBox"));
const ProgressBarBasic_1 = __importDefault(require("@components/ProgressBar/ProgressBarBasic"));
const Button_1 = __importDefault(require("@components/Button/Button"));
const RadioButtonBasic_1 = __importDefault(require("@components/RadioButton/RadioButtonBasic"));
const react_1 = require("react");
const useSurveyStore_1 = require("app/store/useSurveyStore");
const Survey = () => {
    const [basicSelectedValue, setBasicSelectedValue] = (0, react_1.useState)("");
    const [selectCheckbox, setSelectCheckbox] = (0, react_1.useState)([]);
    const { title1, description1, checkboxSize, checkboxColor, checkboxVariant, checkboxText1, checkboxText2, checkboxText3, checkboxText4, title2, description2, radiobuttonSize, radiobuttonColor, radioLabel1, radioLabel2, radioLabel3, radioLabel4, radioLabel5, submitButton, cancelButton, setSurveyState, } = (0, useSurveyStore_1.useSurveyStore)();
    const handleBasicChange = (event) => {
        setBasicSelectedValue(event.target.value);
    };
    const onChangeCheckboxHandler = (isChecked, description) => {
        if (isChecked) {
            // 체크박스를 선택하면 해당 description을 상태 배열에 추가
            setSelectCheckbox([...selectCheckbox, description]);
        }
        else {
            // 체크박스의 선택이 해제되면 해당 description을 상태 배열에서 제거
            setSelectCheckbox(selectCheckbox.filter((item) => item !== description));
        }
    };
    const progressBarPercent = () => {
        let progress = 0;
        // 체크박스가 하나 이상 선택하면 프로그래스바에 50% 반영
        if (selectCheckbox.length > 0) {
            progress += 50;
        }
        // 라디오 버튼을 선택하면 프로그래스바에 추가 50% 반영
        if (basicSelectedValue !== "") {
            progress += 50;
        }
        return progress;
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "grid place-items-center gap-y-6", children: (0, jsx_runtime_1.jsxs)("div", { className: "grid place-items-center gap-y-6 rounded-lg bg-white p-8 shadow-lg dark:bg-[#333742]", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-[470px] dark:text-white", children: (0, jsx_runtime_1.jsx)(ProgressBarBasic_1.default, { percent: progressBarPercent(), showPercent: true, completed: true }) }), (0, jsx_runtime_1.jsxs)("div", { className: "w-[470px] rounded-lg border border-[#9AC5E5] p-4", children: [(0, jsx_runtime_1.jsx)("h2", { className: "mb-2 text-lg", children: title1 }), (0, jsx_runtime_1.jsx)("p", { className: "mb-2 mt-[-4px] text-sm text-Gray", children: description1 }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-2 dark:text-white", children: [(0, jsx_runtime_1.jsx)(CheckBox_1.default, { color: checkboxColor, description: checkboxText1, variant: checkboxVariant, boxSize: checkboxSize, onChange: (e) => 
                                    //여러 체크박스 중 어떤 것을 선택하거나 해제했는지 파악하기 위해 뒤에 해당하는 값을 넣음
                                    onChangeCheckboxHandler(e.target.checked, checkboxText1) }), (0, jsx_runtime_1.jsx)(CheckBox_1.default, { color: checkboxColor, description: checkboxText2, boxSize: checkboxSize, variant: checkboxVariant, onChange: (e) => onChangeCheckboxHandler(e.target.checked, checkboxText2) }), (0, jsx_runtime_1.jsx)(CheckBox_1.default, { color: checkboxColor, description: checkboxText3, boxSize: checkboxSize, variant: checkboxVariant, onChange: (e) => onChangeCheckboxHandler(e.target.checked, checkboxText3) }), (0, jsx_runtime_1.jsx)(CheckBox_1.default, { color: checkboxColor, description: checkboxText4, boxSize: checkboxSize, variant: checkboxVariant, onChange: (e) => onChangeCheckboxHandler(e.target.checked, checkboxText4) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "w-[470px] rounded-lg border border-[#9AC5E5] p-4 leading-7", children: [(0, jsx_runtime_1.jsx)("h2", { className: "mb-2 text-lg", children: title2 }), (0, jsx_runtime_1.jsx)("p", { className: "mb-2 mt-[-4px] text-sm text-Gray", children: description2 }), (0, jsx_runtime_1.jsxs)("div", { className: "dark:text-white", children: [(0, jsx_runtime_1.jsx)(RadioButtonBasic_1.default, { name: "basicOptions", value: "option1", checked: basicSelectedValue === "option1", onChange: handleBasicChange, label: radioLabel1, size: radiobuttonSize, color: radiobuttonColor }), (0, jsx_runtime_1.jsx)(RadioButtonBasic_1.default, { name: "basicOptions", value: "option2", checked: basicSelectedValue === "option2", onChange: handleBasicChange, label: radioLabel2, size: radiobuttonSize, color: radiobuttonColor }), (0, jsx_runtime_1.jsx)(RadioButtonBasic_1.default, { name: "basicOptions", value: "option3", checked: basicSelectedValue === "option3", onChange: handleBasicChange, label: radioLabel3, size: radiobuttonSize, color: radiobuttonColor }), (0, jsx_runtime_1.jsx)(RadioButtonBasic_1.default, { name: "basicOptions", value: "option4", checked: basicSelectedValue === "option4", onChange: handleBasicChange, label: radioLabel4, color: radiobuttonColor, size: radiobuttonSize }), (0, jsx_runtime_1.jsx)(RadioButtonBasic_1.default, { name: "basicOptions", value: "option5", checked: basicSelectedValue === "option5", onChange: handleBasicChange, label: radioLabel5, color: radiobuttonColor, size: radiobuttonSize })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex w-[470px] justify-end", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { className: "mr-2 w-[75px]", color: "danger", children: cancelButton }), (0, jsx_runtime_1.jsx)(Button_1.default, { className: "w-[75px]", color: "primary", children: submitButton })] })] }) }));
};
exports.default = Survey;
