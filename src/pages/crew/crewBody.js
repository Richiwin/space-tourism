import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import data from "../../data.json";

export default function CrewBody() {
  const { index } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-between py-16 md:py-8 sm:!py-0 md:pb-0 md:justify-start w-2/5 md:w-full h-full md:h-[unset]">
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
          <div className="flex flex-row space-x-4 md:justify-center md:mt-4 sm:!mt-8">
            <span
              onClick={() => navigate("/crew/0")}
              className="w-4 h-4 md:w-2 md:h-2 bg-white rounded-full"></span>
            <span
              onClick={() => navigate("/crew/1")}
              className="w-4 h-4 md:w-2 md:h-2 bg-gray-500 rounded-full"></span>
            <span
              onClick={() => navigate("/crew/2")}
              className="w-4 h-4 md:w-2 md:h-2 bg-gray-500 rounded-full"></span>
            <span
              onClick={() => navigate("/crew/3")}
              className="w-4 h-4 md:w-2 md:h-2 bg-gray-500 rounded-full"></span>
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
        <div className="w-full h-full relative sm:mt-8 flex justify-end md:justify-center md:mx-auto sm:border-b-[1px] sm:border-gray-400">
          <img
            src={require(`../../assets/images/crew/image-${data.crew[
              +index
            ].name
              .split(" ")
              .join("-")
              .toLowerCase()}.webp`)}
            className="max-w-full max-h-full absolute bottom-0"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
