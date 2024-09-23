import create from "zustand";
// Zustand를 사용하여 고객센터 폼 상태 관리
export const useServiceStore = create((set) => ({
    numberType: "02", // 기본값 설정
    phoneNumber: "", // 기본값 설정
    serviceItem: "",
    inputSize1: "medium",
    inputVariant1: "outlined",
    inputSize2: "medium",
    inputVariant2: "outlined",
    name: "",
    email: "",
    phone: "",
    title: "",
    details: "",
    attachment: null,
    inputWidth: "100%",
    buttonColor1: "primary",
    buttonSize1: "medium",
    buttonVariant1: "solid",
    buttonColor2: "primary",
    buttonSize2: "medium",
    buttonVariant2: "solid",
    toastMessage: "",
    toastColor: "success",
    isToastVisible: false,
    dropDownOption1: ["02", "010", "011", "014", "019"],
    dropDownOption2: [
        {
            groupName: "Technical Support",
            items: ["Software Issues", "Hardware Issues", "Network Connectivity"],
        },
        {
            groupName: "Customer Service",
            items: ["Account Management", "Billing & Payment", "Order Status"],
        },
        {
            groupName: "Product Information",
            items: ["Product Details", "Warranty Information"],
        },
        {
            groupName: "Feedback & Suggestions",
            items: ["Service Feedback", "Product Improvement Suggestions"],
        },
        {
            groupName: "Shipping & Delivery Issues",
            items: ["Shipping Status", "Returns & Exchanges"],
        },
    ],
    dropDownType1: "borderless-rounded", // 기본 DropDown 타입 설정
    dropDownType2: "borderless-rounded", // 기본 DropDown 타입 설정
    detailSize: "xl", // 기본 Textarea 크기
    detailColor: "skyblue", // 기본 Textarea 색상
    detailResize: "vertical", // 기본 Textarea 크기 조절 여부
    imageUploadSize: "medium", // 기본 ImageUpload 크기
    imageUploadColor: "primary", // 기본 ImageUpload 색상
    imageUploadShape: "circle", // 기본 ImageUpload 모양
    imageUploadVariant: "solid", // 기본 ImageUpload 스타일
    onImageSelect: (data) => {
        set((state) => ({
            ...state,
            attachment: data,
        }));
    },
    setServiceState: (key, value) => {
        console.log(`Updating ${key} to ${value}`); // 상태 변경 로그 출력
        set((state) => {
            if (state[key] !== value) {
                return {
                    ...state,
                    [key]: value,
                };
            }
            return state;
        });
    },
}));
