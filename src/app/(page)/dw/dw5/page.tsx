"use client";
import { useState } from "react";
import ImageUpload from "@components/ImageUpload/Imageupload";
import AvatarBasic from "@components/Avatar/AvatarBasic";
const Dw5 = () => {
  const [avatarImage, setAvatarImage] = useState<string | undefined>(undefined);

  const onSelectImageHandler = (data: string | null) => {
    setAvatarImage(data ?? undefined);
  };
  return (
    <>
      <AvatarBasic src={avatarImage} alt="image" size={80} />
      <ImageUpload onImageSelect={onSelectImageHandler} />
    </>
  );
};
export default Dw5;
