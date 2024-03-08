import React from "react";

const LoadingScreen = () => {
  return (
    <div className="h-[65vh] w-full absolute rounded-md ">
      <figure className="h-full w-full flex justify-center items-center z-40">
        <img
          className="w-1/3 h-1/3"
          src="/svg/screen.svg"
          alt="loading_screen"
        />
      </figure>
    </div>
  );
};

export default LoadingScreen;
