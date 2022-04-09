import { useState } from "react";
import Rocket from "../../assets/images/technology/image-launch-vehicle-landscape.jpg";
import Header from "../../sharedComponents/Header";
import { Outlet } from "react-router-dom";

export default function Tech() {
  return (
    <div
      className={`flex sm:h-full h-screen flex-col bg-black w-full bg-cover md:bg-tech-tablet sm:bg-tech-mobile bg-tech-desktop`}>
      <Header />
      <div className="flex flex-col pl-[120px] md:px-0 justify-between py-16 md:pt-8 h-full">
        <div className="flex flex-row space-x-8 md:space-x-4 sm:space-x-4 md:pl-8 sm:!pl-0 md:mb-8 sm:!justify-center">
          <h4 className="text-gray-500 font-bold font-Barlow md:text-lg sm:!text-base">
            03
          </h4>
          <h4 className="text-white font-Barlow uppercase tracking-wider md:text-lg sm:!text-base">
            Space launch 101
          </h4>
        </div>
        <div className="flex flex-row justify-between flex-1 md:flex-col-reverse md:w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
