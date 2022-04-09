import Logo from "../../assets/images/shared/logo.svg";
import styles from "./header.module.css";
import Link from "./Link";
import Menu from "../../assets/images/shared/icon-hamburger.svg";

export default function Header() {
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
      <span className="px-8 hidden sm:flex">
        <img src={Menu} alt="" className="w-6 h-6" />
      </span>
    </nav>
  );
}
