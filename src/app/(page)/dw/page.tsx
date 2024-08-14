"use client";
import Button from "@components/Button/Button";
import CheckBox from "@components/CheckBox/CheckBox";
import Drawer from "@components/Drawer/Drawer";
import { useState } from "react";

const dw = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

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
      <div className="ml-3 mt-5 space-y-4">
        <h2 className="ml-4 text-2xl">기본 체크박스</h2>
        <div className="ml-4">
          <CheckBox onChange={(e) => console.log(e.target.checked)} />
        </div>
        <h2 className="ml-4 text-2xl">체크박스의 크기</h2>
        <div className="ml-4 flex space-x-5">
          <CheckBox boxSize="small" description="small CheckBox" />
          <CheckBox description="medium CheckBox" color="secondary" />
          <CheckBox boxSize="large" description="large CheckBox" />
        </div>
        <h2 className="ml-4 text-2xl">체크박스의 컬러</h2>
        <div className="ml-4 flex flex-wrap space-x-5">
          <CheckBox description="Primary CheckBox" color="primary" />
          <CheckBox description="Secondary CheckBox" color="secondary" />
          <CheckBox description="Success CheckBox" color="success" />
          <CheckBox description="Warning CheckBox" color="warning" />
          <CheckBox description="Danger CheckBox" color="danger" />
        </div>
        <div className="ml-4 flex space-x-5">
          <CheckBox description="Red CheckBox" color="red" />
          <CheckBox description="Orange CheckBox" color="orange" />
          <CheckBox description="Yellow CheckBox" color="yellow" />
          <CheckBox description="Green CheckBox" color="green" />
        </div>
        <div className="ml-4 flex space-x-5">
          <CheckBox description="Blue CheckBox" color="blue" />
          <CheckBox description="Purple CheckBox" color="purple" />
          <CheckBox description="Pink CheckBox" color="pink" />
          <CheckBox description="Basic CheckBox" color="basic" />
        </div>
        <h2 className="ml-4 text-2xl">체크박스의 컬러2</h2>
        <div className="ml-4 flex space-x-5">
          <CheckBox
            description="Primary Border CheckBox"
            color="primary"
            variant="border"
          />
          <CheckBox
            description="Secondary Border CheckBox"
            color="secondary"
            variant="border"
          />
          <CheckBox
            description="Success Border CheckBox"
            color="success"
            variant="border"
          />
          <CheckBox
            description="Warning Border CheckBox"
            color="warning"
            variant="border"
          />
          <CheckBox
            description="Danger Border CheckBox"
            color="danger"
            variant="border"
          />
        </div>
        <div className="ml-4 flex space-x-5">
          <CheckBox
            description="Red Border CheckBox"
            color="red"
            variant="border"
          />
          <CheckBox
            description="Orange Border CheckBox"
            color="orange"
            variant="border"
          />
          <CheckBox
            description="Yellow Border CheckBox"
            color="yellow"
            variant="border"
          />
          <CheckBox
            description="Green Border CheckBox"
            color="green"
            variant="border"
          />
        </div>
        <div className="ml-4 flex space-x-5">
          <CheckBox
            description="Blue Border CheckBox"
            color="blue"
            variant="border"
          />
          <CheckBox
            description="Purple Border CheckBox"
            color="purple"
            variant="border"
          />
          <CheckBox
            description="Pink Border CheckBox"
            color="pink"
            variant="border"
          />
          <CheckBox
            description="Basic Border CheckBox"
            color="basic"
            variant="border"
          />
        </div>
        <div>
          <Drawer
            isOpen={isDrawerOpen}
            onClose={onclickDrawerHandler(false)}
            menu={[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Profile", path: "/profile" },
              { name: "Contact", path: "/Contact" },
              { name: "LongTitleTitleTitleTitleTitleTitle", path: "/Contact" },
            ]}
            logo="/componique_logo_full.svg"
            color="white"
            bgColor="black"
          />

          <Button
            variant="border"
            color="yellow"
            onClick={onclickDrawerHandler(true)}
          >
            Drawer Open Button
          </Button>
        </div>
      </div>
    </>
  );
};
export default dw;
