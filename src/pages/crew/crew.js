import Header from "../../sharedComponents/Header";
import styles from "./crew.module.css";
import Douglas from "../../assets/images/crew/image-douglas-hurley.webp";
import { Outlet } from "react-router-dom";

export default function Crew() {
  return (
    <div
      className={`flex sm:h-full landscape:h-full h-screen flex-col bg-black w-full bg-cover md:bg-crew-tablet sm:bg-crew-mobile bg-crew-desktop`}>
      <Header />
      <div className="flex flex-row md:flex-col sm:!flex-col-reverse px-[120px] md:px-8 h-full justify-between sm:pt-4 sm:pb-12">
        <Outlet />
      </div>
    </div>
  );
}
