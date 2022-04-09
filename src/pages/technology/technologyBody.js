import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { variants } from "../../sharedComponents/variants";
import data from "../../data.json";
import { imageImport } from "./imageImport";

export default function TechBody() {
  const { index } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="w-2/5 flex flex-row items-center space-x-12 md:flex-col md:w-full md:space-x-0">
        <ul className="flex flex-col space-y-8 md:space-y-0 md:space-x-4 md:flex-row md:items-center md:mx-auto md:mt-8">
          <li
            onClick={() => navigate("/technology/0")}
            className={`cursor-pointer ${
              +index === 0
                ? "bg-white border-transparent text-black"
                : "hover:bg-slate-500/40 text-white bg-transparent border-gray-700"
            } w-16 h-16 md:w-12 md:h-12 transition-all duration-200 sm:!h-10 sm:text-xs sm:!w-10 md:text-base border-[1px]  rounded-full flex justify-center items-center font-Bellefair text-2xl`}>
            1
          </li>
          <li
            onClick={() => navigate("/technology/1")}
            className={`cursor-pointer ${
              +index === 1
                ? "bg-white border-transparent text-black"
                : "hover:bg-slate-500/40 text-white bg-transparent border-gray-700"
            } w-16 h-16 md:w-12 md:h-12 transition-all duration-200 sm:!h-10 sm:text-xs sm:!w-10 md:text-base border-[1px] rounded-full flex justify-center items-center font-Bellefair text-2xl`}>
            2
          </li>
          <li
            onClick={() => navigate("/technology/2")}
            className={`cursor-pointer ${
              +index === 2
                ? "bg-white border-transparent text-black"
                : "hover:bg-slate-500/40 text-white bg-transparent border-gray-700"
            } w-16 h-16 md:w-12 md:h-12 transition-all duration-200 sm:!h-10 sm:text-xs sm:!w-10 md:text-base border-[1px] rounded-full flex justify-center items-center font-Bellefair text-2xl`}>
            3
          </li>
        </ul>
        <div className="md:w-3/5 sm:!w-full sm:px-8">
          <p className="text-primary-100 uppercase md:text-center font-Barlow md:text-sm md:mt-8">
            The terminology...
          </p>
          <h2 className="text-white mt-2 md:text-center md:text-4xl sm:!text-2xl">
            {data.technology[+index].name}
          </h2>
          <p className="mt-4 text-primary-100 md:text-center md:!text-sm md:!leading-8 sm:!text-xs">
            {data.technology[+index].description}
          </p>
        </div>
      </div>
      <motion.div
        variants={variants}
        exit={"exit"}
        initial={"hide"}
        animate={"show"}
        key={+index}
        className={`w-2/5 pb-16 h-full min-h-[250px] sm:h-[300px] relative md:w-full sm:w-full`}>
        <picture className="md:object-fill absolute w-full h-full">
          <source
            srcSet={imageImport[data.technology[+index].name].portrait}
            media="all and (orientation: portrait)"
          />
          <source
            srcSet={imageImport[data.technology[+index].name].landscape}
            media="all and (orientation: landscape)"
          />
          <img
            alt=""
            src={imageImport[data.technology[+index].name].landscape}
            className={`w-full h-full absolute md:object-fill `}
          />{" "}
        </picture>
      </motion.div>
    </>
  );
}
