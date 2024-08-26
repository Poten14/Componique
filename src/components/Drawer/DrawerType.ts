import { IconName } from "@components/Icon/Icon";
export type DrawerProps = {
  menu?: MenuProps[];
  isOpen?: boolean;
  logo?: string;
  onClose?: () => void;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "basic"
    | "white"
    | "gray"
    | "black";
  bgColor?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "basic"
    | "white"
    | "gray"
    | "black";
  postion: "top" | "bottom" | "left" | "right";
  className?: string;
};

type MenuProps = {
  name: string;
  path: string;
  className?: string;
  icon?: IconName;
};
