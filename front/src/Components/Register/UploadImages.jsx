import { useEffect, useState } from "react";
import { HiCamera } from "react-icons/hi2";
import ImagePreview from "./ImagePreview";

const UploadImages = ({ register, formState, watch }) => {
  const [imageCounter, setImageCounter] = useState(0);
  const [imageState, setImageState] = useState([]);

  const images = watch("image");
  useEffect(() => {
    if (imageState.length < 2) {
      if (images) {
        const imgArray = [...imageState];
        for (let i = 0; i < images.length; i++) {
          imgArray.push(URL.createObjectURL(images[i]));
        }
        setImageState([...imgArray]);
      }
    } else {
      alert("이미지는 최대 2개까지 업로드 가능합니다.");
    }
  }, [images]);

  useEffect(() => {
    setImageCounter(imageState.length);
  }, [imageState]);

  const handleDelete = (image) => {
    const imageStateCopy = [...imageState];
    setImageState(imageStateCopy.filter((img) => img !== image));
  };

  return (
    <div>
      <div className="flex gap-5">
        <label
          htmlFor="fileInput"
          className="relative w-20 h-20 bg-[#F1F4F6] flex flex-col justify-center items-center rounded-lg cursor-pointer"
        >
          <HiCamera className="text-darkGray" />
          <p className="text-darkGray">{imageCounter}/2</p>
        </label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          multiple
          alt="제출버튼"
          {...register("image", { required: "이미지 필요" })}
          className="absolute hidden top-0 left-0 w-full h-full bg-transparent outline-none rounded-lg"
        />
        {imageState.map((image, index) => {
          return (
            <ImagePreview src={image} key={index} handleDelete={handleDelete} />
          );
        })}
      </div>
      <span>{formState.errors.image?.message}</span>
    </div>
  );
};

export default UploadImages;
