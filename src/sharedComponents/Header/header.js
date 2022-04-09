import { useState, useEffect } from "react";
import Logo from "../../assets/images/shared/logo.svg";
import styles from "./header.module.css";
import Link from "./Link";
import Menu from "../../assets/images/shared/icon-hamburger.svg";
import Cancel from "../../assets/images/shared/icon-close.svg";

export default function Header() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) document.body.classList.add("fixed");
    else document.body.classList.remove("fixed");
  }, [menu]);

  return (
    <nav
      className={`flex flex-row justify-between items-center pt-8 md:pt-0 sm:!pt-4`}>
      <div className="w-24 sm:!w-max sm:px-4 flex justify-center">
        <img
          src={Logo}
          alt=""
          className="w-8 h-8 md:w-12 sm:!w-8 sm:!h-8 md:h-12 relative left-2"
        />
      </div>
      <div className="h-[1px] bg-gray-300 opacity-20 relative -right-6 flex-1 z-50 md:hidden"></div>
      <div
        className={`w-[55%] sm:hidden md:w-max md:px-8 flex flex-row pl-16 ${styles.header}`}>
        <Link count="0" name="Home" path="/" />
        <Link count="1" name="Destination" path="/destination" />
        <Link count="2" name="Crew" path="/crew" />
        <Link count="3" name="Technology" path="/technology" />
      </div>
      <span onClick={() => setMenu(true)} className="px-8 hidden sm:flex">
        <img src={Menu} alt="" className="w-6 h-6" />
      </span>
      <div
        className={`fixed landscape:min-h-screen h-full transition-all duration-300 ${
          menu ? "right-0" : "-right-[100vw]"
        } w-[100vw] h-full top-0 z-50 sm:flex flex-row justify-end bg-transparent  `}>
        <div
          className={`sm:flex overflow-auto pb-4 h-full flex-col w-3/4 px-4 ${styles.header}`}
          onBlur={() => setMenu(false)}>
          <div className="pt-8 pb-12">
            <img
              onClick={() => setMenu(false)}
              src={Cancel}
              className="ml-auto w-4 h-4"
              alt=""
            />
          </div>
          <div className="space-y-4">
            <Link
              customStyles={"border-none !py-2 !justify-start"}
              count="0"
              name="Home"
              path="/"
            />
            <Link
              customStyles={"border-none !py-2 !justify-start"}
              count="1"
              name="Destination"
              path="/destination"
            />
            <Link
              customStyles={"border-none !py-2 !justify-start"}
              count="2"
              name="Crew"
              path="/crew"
            />
            <Link
              customStyles={"border-none !py-2 !justify-start"}
              count="3"
              name="Technology"
              path="/technology"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
