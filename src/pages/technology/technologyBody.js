import { useNavigate, useParams } from "react-router-dom";
import Rocket from "../../assets/images/technology/image-spaceport-landscape.jpg";
import data from "../../data.json";

export default function TechBody() {
  const { index } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="w-2/5 flex flex-row items-center space-x-12 md:flex-col md:w-full md:space-x-0">
        <ul className="flex flex-col space-y-8 md:space-y-0 md:space-x-4 md:flex-row md:items-center md:mx-auto md:mt-8">
          <li
            onClick={() => navigate("/technology/0")}
            className="cursor-pointer bg-white w-16 h-16 md:w-12 md:h-12 sm:!h-10 sm:text-xs sm:!w-10 md:text-base border-[1px] border-transparent rounded-full flex justify-center items-center font-Bellefair text-2xl">
            1
          </li>
          <li
            onClick={() => navigate("/technology/1")}
            className="cursor-pointer bg-transparent text-white w-16 h-16 md:w-12 md:h-12 sm:!h-10 sm:text-xs sm:!w-10 md:text-base border-[1px] border-gray-700 rounded-full flex justify-center items-center font-Bellefair text-2xl">
            2
          </li>
          <li
            onClick={() => navigate("/technology/2")}
            className="cursor-pointer bg-transparent text-white w-16 h-16 md:w-12 md:h-12 sm:!h-10 sm:text-xs sm:!w-10 md:text-base border-[1px] border-gray-700 rounded-full flex justify-center items-center font-Bellefair text-2xl">
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
      <div className="w-2/5 pb-16 h-full min-h-[200px] relative md:w-full">
        <img
          src={Rocket}
          alt=""
          className="w-full h-full absolute md:object-fill"
        />
      </div>
    </>
  );
}
