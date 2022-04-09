import { Link } from "react-router-dom";
import Header from "../../sharedComponents/Header/header";

export default function Home() {
  return (
    <div
      className={`flex landscape:min-h-screen portrait:h-screen flex-col bg-black w-full bg-cover md:bg-home-tablet sm:bg-home-mobile bg-home-desktop`}>
      <Header />
      <div className="md:flex-col md:h-full sm:h-full md:max-w-max md:mt-16 md:text-center md:mx-auto md:w-[80%] sm:w-full sm:px-4 flex flex-row justify-between mt-auto items-end pb-[8rem] md:pb-[2rem] px-[120px] ">
        <div className="space-y-6 w-1/2 md:w-full">
          <h4 className="uppercase text-primary-100 font-Barlow text-2xl tracking-widest whitespace-nowrap md:text-base sm:!text-xs">
            So, you want to travel to
          </h4>
          <h1 className="uppercase text-[7rem] text-white md:text-[120px] sm:!text-6xl ">
            Space
          </h1>
          <p className="text-primary-100 leading-[33.6px] text-lg md:text-sm ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="md:mx-auto md:mt-auto landscape:mt-12">
          <Link
            to="/destination"
            className="sm:w-[10rem] sm:h-[10rem] md:after:h-0 md:after:w-0 after:content-[''] after:absolute after:w-[22rem] after:h-[22rem] after:rounded-full after:hover:-z-10 after:hover:bg-slate-200/25 after:bg-transparent after:transition-colors duration-150 z-20 relative uppercase flex flex-1 items-center justify-center w-[270px] h-[270px] bg-white rounded-full">
            <span className="text-3xl sm:text-lg">EXPLORE</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
