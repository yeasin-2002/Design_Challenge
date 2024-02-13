import React from "react";
import { ProductInfo } from "./ProductInfo";
import { ImageGallery } from "./ImageGallery";
interface Props extends React.ComponentProps<"div"> {}

export const Hero = ({ ...rest }: Props) => {
  return (
    <section
      {...rest}
      className="grid grid-cols-2 items-center justify-between"
    >
      <ImageGallery />
      <ProductInfo />
    </section>
  );
};
