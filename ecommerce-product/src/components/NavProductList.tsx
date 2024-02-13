import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const NavProductList = ({ ...rest }: Props) => {
  return (
    <div {...rest} className="">
      <p className="px-4 py-4 border-b border-b-gray-700">Card</p>
      <div className="p-2"></div>
    </div>
  );
};
