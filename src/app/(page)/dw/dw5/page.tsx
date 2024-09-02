"use client";
import { useState } from "react";
import ImageUpload from "@components/ImageUpload/Imageupload";
import AvatarBasic from "@components/Avatar/AvatarBasic";
const Dw5 = () => {
  const [avatarImage, setAvatarImage] = useState<string | undefined>(undefined);

  const onSelectFileHandler = (Data: string | null) => {
    setAvatarImage(Data ?? undefined);
  };
  return (
    <>
      <AvatarBasic src={avatarImage} alt="image" size={80} />
      <ImageUpload onFileSelect={onSelectFileHandler} />
    </>
  );
};
export default Dw5;
