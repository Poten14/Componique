"use client";
import ImageUpload from "@components/ImageUpload/Imageupload";
import { useState } from "react";
const Dw4 = () => {
  const [imageData, setImageData] = useState<string | null>(null);

  const onSelectImageHandler = (data: string | null) => {
    setImageData(data);
    console.log("Selected Image data =>", data);
  };
  return (
    <>
      <div className="space-x-4 space-y-4">
        <ImageUpload size="small" />
        <ImageUpload />
        <ImageUpload size="large" />
      </div>
      <div className="space-x-4 space-y-4">
        <ImageUpload color="primary" />
        <ImageUpload color="secondary" />
        <ImageUpload color="success" />
        <ImageUpload color="warning" />
        <ImageUpload color="danger" />
        <ImageUpload color="red" />
        <ImageUpload color="orange" />
        <ImageUpload color="yellow" />
        <ImageUpload color="green" />
        <ImageUpload color="blue" />
        <ImageUpload color="purple" />
        <ImageUpload color="pink" />
        <ImageUpload color="basic" />
        <ImageUpload color="white" />
        <ImageUpload color="gray" />
        <ImageUpload color="black" />
      </div>
      <div className="space-x-4 space-y-4">
        <ImageUpload color="primary" variant="border" />
        <ImageUpload color="secondary" variant="border" />
        <ImageUpload color="success" variant="border" />
        <ImageUpload color="warning" variant="border" />
        <ImageUpload color="danger" variant="border" />
        <ImageUpload color="red" variant="border" />
        <ImageUpload color="orange" variant="border" />
        <ImageUpload color="yellow" variant="border" />
        <ImageUpload color="green" variant="border" />
        <ImageUpload color="blue" variant="border" />
        <ImageUpload color="purple" variant="border" />
        <ImageUpload color="pink" variant="border" />
        <ImageUpload color="basic" variant="border" />
        <ImageUpload color="white" variant="border" />
        <ImageUpload color="gray" variant="border" />
        <ImageUpload color="black" variant="border" />
      </div>
      <div className="space-x-4 space-y-4">
        <ImageUpload text="ADD" />
        <ImageUpload text="BgColor" className="bg-red-600" shape="rectangle" />
      </div>
      <div>
        <ImageUpload onImageSelect={onSelectImageHandler} />
      </div>
    </>
  );
};
export default Dw4;
