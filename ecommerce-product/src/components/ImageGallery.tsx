import React, { useState } from "react";
import product1 from "../assets/images/image-product-1.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product4 from "../assets/images/image-product-4.jpg";
const productImg = [product1, product2, product3, product4];

interface Props extends React.ComponentProps<"div"> {}

export const ImageGallery = ({ ...rest }: Props) => {
  const [selectedImg, setSelectedImg] = useState({
    id: 0,
    imgUrl: product1,
  });

  const imgSelectingHandler = (img: string, index: number) => {
    setSelectedImg({
      imgUrl: img,
      id: index,
    });
  };
  return (
    <div {...rest} className="p-6">
      <img
        src={selectedImg.imgUrl}
        alt=""
        className={`aspect-square rounded-lg  `}
      />
      <div className="lg:grid grid-cols-4 mt-4 gap-x-2 hidden">
        {productImg.map((value, i) => (
          <img
            key={value}
            src={value}
            alt="product"
            className={`rounded-md aspect-square cursor-pointer hover:opacity-60 transition-all   ${
              selectedImg.id === i && "ring ring-orange opacity-70"
            }`}
            onClick={() => imgSelectingHandler(value, i)}
          />
        ))}
      </div>
    </div>
  );
};
