import React, { useState } from "react";
interface Props extends React.ComponentProps<"div"> {}

export const ProductInfo = ({ ...rest }: Props) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div {...rest}>
      <div>
        <p className="text-orange text-lg font-bold  font-kumbh">
          SNEAKERS COMPANY
        </p>
        <h2 className="text-5xl font-bold text-gray-800">
          Fall Limited <br /> Sneakers
        </h2>
        <p className="text-base  text-gray-500  mt-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
          accusamus! Delectus, doloribus Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Est, accusamus! Delectus, doloribus?
        </p>
        <div className="my-4">
          <p className="flex items-center  gap-x-3">
            <span className="font-bold text-2xl text-gray-800">$12.00</span>
            <span className="bg-paleOrange text-orange p-1 rounded-sm font-medium">
              50%
            </span>
          </p>
          <p className="line-through text-gray-400 ">$250</p>
        </div>
      </div>

      <div className="flex   items-center  w-8/12 gap-x-2">
        <div className="flex  items-center w-full flex-1 gap-x-2    ">
          <button
            className="snow-btn"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
          <p className="bg-center ">{quantity}</p>
          <button
            className="snow-btn"
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </button>
        </div>
        <button className="bg-orange  text-white shadow-paleOrange px-6 py-4 rounded-lg w-full ">
          Add to card
        </button>
      </div>
    </div>
  );
};
