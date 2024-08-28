import React from "react";

//아이콘 SVG를 Font로 변환
export type IconName =
  | "icon-login"
  | "icon-logout"
  | "icon-qr"
  | "icon-reload"
  | "icon-star"
  | "icon-undo"
  | "icon-bell"
  | "icon-bell-off"
  | "icon-bell-ring"
  | "icon-call"
  | "icon-camera"
  | "icon-code"
  | "icon-download"
  | "icon-emoji-angry"
  | "icon-emoji-bored"
  | "icon-emoji-cry"
  | "icon-emoji-dead"
  | "icon-emoji-feeling"
  | "icon-emoji-happy"
  | "icon-emoji-heart"
  | "icon-emoji-joy"
  | "icon-emoji-rest"
  | "icon-emoji-sad"
  | "icon-emoji-sadness"
  | "icon-emoji-shocked"
  | "icon-emoji-smile"
  | "icon-emoji-surprised"
  | "icon-emoji-tired"
  | "icon-emoji-worried"
  | "icon-emoji-wow"
  | "icon-error"
  | "icon-heart"
  | "icon-help"
  | "icon-home"
  | "icon-image"
  | "icon-info"
  | "icon-internet"
  | "icon-mail"
  | "icon-map"
  | "icon-menu"
  | "icon-pin"
  | "icon-refresh"
  | "icon-setting"
  | "icon-share"
  | "icon-user"
  | "icon-video"
  | "icon-docs"
  | "icon-check";

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 16,
  color = "currentColor",
}) => <i className={name} style={{ fontSize: size, color }}></i>;

export default Icon;
