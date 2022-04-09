import styles from "./destination.module.css";
import Header from "../../sharedComponents/Header";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";

export default function Destination() {
  return (
    <div
      className={`flex min-h-screen flex-col bg-black w-full bg-cover md:bg-dest-tablet sm:bg-dest-mobile bg-dest-desktop`}>
      <Header />
      <div className="flex flex-col px-[120px] md:px-[10%] ">
        <div className="flex flex-row space-x-8 sm:space-x-4 mt-16 sm:mt-0 md:mt-8 w-full sm:!justify-center">
          <h4 className="text-gray-500 font-bold md:!text-lg md:tracking-widest sm:!text-lg font-Barlow ">
            01
          </h4>
          <h4 className="text-white font-Barlow md:!text-lg md:tracking-widest sm:!text-lg uppercase tracking-wider">
            Pick your destination
          </h4>
        </div>
        <AnimatePresence exitBeforeEnter>
          <Outlet />
        </AnimatePresence>
      </div>
    </div>
  );
}
