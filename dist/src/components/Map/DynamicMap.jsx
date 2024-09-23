import dynamic from "next/dynamic";
const DynamicMap = dynamic(() => import("./MapBasic"), {
    ssr: false,
    loading: () => <p>지도를 불러오는 중...</p>,
});
export default DynamicMap;
