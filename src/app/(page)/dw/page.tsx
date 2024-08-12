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
      <div className="space-x-4 space-y-4">
        <Button color="primary">Primary 버튼</Button>
        <Button color="secondary">Secondary 버튼</Button>
        <Button color="success">Success 버튼</Button>
        <Button color="warning">Warning 버튼</Button>
        <Button color="danger">Danger 버튼</Button>
      </div>
      <div className="space-x-4 space-y-4">
        <Button color="red">Red 버튼</Button>
        <Button color="orange">Orange 버튼</Button>
        <Button color="yellow">Yellow 버튼</Button>
        <Button color="green">Green 버튼</Button>
        <Button color="blue">Blue 버튼</Button>
        <Button color="purple">Purple 버튼</Button>
        <Button color="pink">Pink 버튼</Button>
        <Button color="basic">Basic 버튼</Button>
      </div>
    </>
  );
};
export default dw;
