import { IconName } from "@components/Icon/Icon";
export type DrawerProps = {
  menu?: MenuGroupProps[];
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
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
};

export type MenuGroupProps = {
  groupName?: string;
  groupNameClassName?: string;
  items: MenuProps[];
};

type MenuProps = {
  name: string;
  path: string;
  className?: string;
  icon?: IconName;
};
