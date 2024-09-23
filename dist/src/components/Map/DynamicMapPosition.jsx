import dynamic from "next/dynamic";
// MapPosition 컴포넌트를 동적으로 로드하여 SSR을 비활성화
const DynamicMapPosition = dynamic(() => import("./MapPosition"), {
    ssr: false,
    loading: () => <p>지도를 불러오는 중...</p>,
});
export default DynamicMapPosition;
