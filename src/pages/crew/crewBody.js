import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import data from "../../data.json";
import { variants } from "../../sharedComponents/variants";

export default function CrewBody() {
  const { index } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col sm:mt-auto justify-between py-16 md:py-8 sm:!py-0 md:pb-0 md:justify-start w-2/5 md:w-full h-full md:h-[unset]">
        <div className="flex flex-row space-x-8 md:space-x-4 sm:hidden">
          <h4 className="text-gray-500 font-bold md:!text-xl md:tracking-widest sm:!text-lg font-Barlow ">
            02
          </h4>
          <h4 className="text-white font-Barlow md:!text-xl md:tracking-widest sm:!text-lg uppercase tracking-wider">
            Meet your crew
          </h4>
        </div>
        <div className="h-full flex flex-col justify-between mt-24 sm:!mt-0 md:mt-8 md:mx-auto sm:flex-col-reverse">
          <div className="sm:mt-4">
            <h3 className="text-gray-400 md:text-center md:text-xl sm:text-base">
              {data.crew[+index].role}
            </h3>
            <h2 className="mt-4 md:mt-2 text-white md:text-center md:text-3xl sm:text-lg">
              {data.crew[+index].name}
            </h2>
            <p className="mt-8 text-primary-100 md:text-center md:mt-4 md:w-3/5 sm:!w-full md:mx-auto sm:text-sm">
              {data.crew[+index].bio}
            </p>
          </div>
          <div className="flex flex-row space-x-4 md:space-x-6 md:justify-center md:mt-4 sm:!mt-8">
            <span
              onClick={() => navigate("/crew/0")}
              className={`w-4 h-4 md:w-3 md:h-3 transition-all duration-300 rounded-full ${
                +index === 0 ? "bg-white" : "bg-gray-500 hover:bg-slate-500/40"
              }`}></span>
            <span
              onClick={() => navigate("/crew/1")}
              className={`w-4 h-4 md:w-3 md:h-3  rounded-full ${
                +index === 1 ? "bg-white" : "bg-gray-500 hover:bg-slate-500/40"
              }`}></span>
            <span
              onClick={() => navigate("/crew/2")}
              className={`w-4 h-4 md:w-3 md:h-3 rounded-full ${
                +index === 2 ? "bg-white" : "bg-gray-500 hover:bg-slate-500/40"
              }`}></span>
            <span
              onClick={() => navigate("/crew/3")}
              className={`w-4 h-4 md:w-3 md:h-3 rounded-full ${
                +index === 3 ? "bg-white" : "bg-gray-500 hover:bg-slate-500/40"
              }`}></span>
          </div>
        </div>
      </div>
      <div
        className={`w-1/2 pt-16 md:pt-2 h-full md:w-full sm:flex sm:flex-col`}>
        <div className="sm:flex flex-row space-x-8 md:space-x-4 hidden sm:w-full sm:text-center sm:justify-center">
          <h4 className="text-gray-500 font-bold md:text-xl md:tracking-widest sm:!text-base font-Barlow ">
            02
          </h4>
          <h4 className="text-white font-Barlow md:text-xl md:tracking-widest sm:!text-base uppercase tracking-wider">
            Meet your crew
          </h4>
        </div>
        <motion.div
          variants={variants}
          exit={"exit"}
          initial={"hide"}
          animate={"show"}
          key={+index}
          className="w-full h-full relative flex justify-end md:justify-center md:mx-auto sm:border-b-[1px] sm:border-gray-400">
          <img
            src={require(`../../assets/images/crew/image-${data.crew[
              +index
            ].name
              .split(" ")
              .join("-")
              .toLowerCase()}.webp`)}
            className="max-w-full sm:min-h-[200px] sm:mt-4 sm:relative absolute max-h-full sm:max-h-[250px] bottom-0"
            alt=""
          />
        </motion.div>
      </div>
    </>
  );
}
