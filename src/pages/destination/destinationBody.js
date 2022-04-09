import Link from "../../sharedComponents/Header/Link";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { variants } from "../../sharedComponents/variants";
import data from "../../data.json";

export default function DestinationBody() {
  const { index } = useParams();

  return (
    <div className="flex flex-row md:flex-col md:w-full px-4 mt-16 space-x-12 md:space-x-0 justify-between">
      <motion.div
        key={+index}
        variants={variants}
        animate={"show"}
        initial={"initial"}
        exit="exit"
        className="w-1/3 md:w-1/2 sm:!w-full md:mx-auto">
        <img
          src={require(`../../assets/images/destination/image-${data.destinations[
            +index
          ].name.toLowerCase()}.webp`)}
          alt=""
        />
      </motion.div>
      <div className="md:mb-8 w-1/2 md:w-full md:flex md:justify-center md:flex-col md:mt-8 ">
        <div className="flex flex-row gap-x-8 md:flex md:justify-center">
          {data.destinations.map((el, index) => (
            <Link
              key={index}
              customStyles="!py-2 !px-0 !mx-0"
              name={el.name}
              showCount={false}
              path={"/destination/" + index}
            />
          ))}
        </div>
        <h1 className="mt-4 md:mx-auto text-white text-[6rem] sm:!text-6xl">
          {data.destinations[+index].name}
        </h1>
        <p className="mt-4 md:mx-auto md:text-center text-primary-100 text-lg max-w-md font-Barlow leading-8">
          {data.destinations[+index].description}
        </p>
        <div className="mt-8 w-full h-[1px] bg-gray-300 opacity-20"></div>
        <div className="flex flex-row sm:flex-col mt-4 md:justify-center sm:space-x-0 space-x-24">
          <div className="flex flex-col sm:mx-auto">
            <p className="text-primary-100 sm:text-center uppercase text-sm font-Barlow">
              Avg. distance
            </p>
            <h5 className="text-white leading-8 font-Bellefair">
              {data.destinations[+index].distance}
            </h5>
          </div>
          <div className="flex flex-col sm:mx-auto sm:mt-8">
            <p className="text-primary-100 sm:text-center uppercase text-sm font-Barlow">
              Est. Travel time
            </p>
            <h5 className="text-white leading-8 sm:text-center font-Bellefair">
              {data.destinations[+index].travel}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
