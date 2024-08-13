"use client";
import Button from "@components/Button/Button";
import CheckBox from "@components/CheckBox/CheckBox";

const dw = () => {
  return (
    <>
      <h1>dw Component</h1>
      <div className="space-x-4">
        <Button
          onClick={() => {
            alert("hello, Button");
          }}
        >
          Basic Button
        </Button>
        <Button size="small">Small Button</Button>
        <Button size="medium">Medium Button</Button>
        <Button size="large">Large Button</Button>
      </div>
      <div className="space-x-4 space-y-4">
        <Button color="primary">Primary Button</Button>
        <Button color="secondary">Secondary Button</Button>
        <Button color="success">Success Button</Button>
        <Button color="warning">Warning Button</Button>
        <Button color="danger">Danger Button</Button>
      </div>
      <div className="space-x-4 space-y-4">
        <Button color="red">Red Button</Button>
        <Button color="orange">Orange Button</Button>
        <Button color="yellow">Yellow Button</Button>
        <Button color="green">Green Button</Button>
        <Button color="blue">Blue Button</Button>
        <Button color="purple">Purple Button</Button>
        <Button color="pink">Pink Button</Button>
        <Button color="basic">Basic Button</Button>
      </div>
      <div className="space-x-4 space-y-4">
        <Button radius="small">Radius Small Button</Button>
        <Button radius="medium">Radius MediumButton</Button>
        <Button radius="large">Radius Large Button</Button>
        <Button radius="full">Radius Full Button</Button>
        <Button radius="none">Radius None Button</Button>
      </div>
      <div className="space-x-4 space-y-4">
        <Button variant="solid">Solid Button</Button>
        <Button variant="border">Border Button</Button>
        <Button variant="border" color="secondary">
          Border Secondary Button
        </Button>
        <Button variant="flat">Flat Button</Button>
        <Button variant="flat" color="warning">
          Flat Warning Button
        </Button>
        <Button variant="light">Light But12ton</Button>
        <Button variant="light" color="purple" radius="full">
          Light Purple Full Button
        </Button>
        <Button variant="light" color="warning" radius="none">
          Light warning None Button
        </Button>
      </div>
      <div>
        <CheckBox />
        <CheckBox
          onChange={(e) => console.log(e.target.checked)}
          description="안녕"
        />

        <CheckBox description="반가워" />
      </div>
    </>
  );
};
export default dw;
