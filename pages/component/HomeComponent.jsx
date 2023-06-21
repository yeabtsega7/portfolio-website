import React from "react";

const HomeComponent = () => {
  return (
    <div
      id="home"
      className=" w-full relative overflow-hidden"
      style={{ height: "100vh" }}
    >
      <div
        className="h-full w-full absolute bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('../assate/computer-bg.jpg')` }}
      ></div>
      <div className="grid grid-cols-12  gap-4 absolute font-shrikhand text-color-w text-4xl uppercase font-bold h-full items-center ">
        <div className="text-color-w md:col-span-7 col-span-12 text-center px-6">
          Make it work, make it right, make it fast
        </div>
        <div className=" md:flex col-span-5 items-center hidden  text-center w-full h-full">
          <div className=" h-full w-full overflow-hidden">
            <img className=" h-full " src="../assate/bgphoto.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
