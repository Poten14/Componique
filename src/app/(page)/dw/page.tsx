import Button from "@/components/Button/Button";

const dw = () => {
  return (
    <>
      <h1>dw Component</h1>
      <div className="space-x-4">
        <Button>기본 버튼</Button>
        <Button size="small">작은 버튼</Button>
        <Button size="medium">중간 버튼</Button>
        <Button size="large">큰 버튼</Button>
      </div>
    </>
  );
};
export default dw;
