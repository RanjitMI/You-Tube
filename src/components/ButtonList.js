import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "ALL",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Valentines",
    "Live",
    "Cricket",
    "Gadget",
    "Gym",
    "Cars",
    "Jobs"
  ];

  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} text={item} />
      ))}
    </div>
  );
};

export default ButtonList;
