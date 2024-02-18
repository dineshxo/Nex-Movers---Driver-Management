import HeroImg from "../assets/hero_img.png";

import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex items-center h-full bg-gray-50 md:h-[100vh]">
      <div className="flex flex-col-reverse md:flex-row-reverse ">
        <div className="flex flex-col md:w-[50%] w-full items-center justify-center lg:items-start  p-10  ">
          <h1 className=" sm:text-[40px] text-[30px]  montserrat-regular text-gray-600 mt-5    ">
            Welcome
          </h1>
          <h1 className="block  text-yellow-500 montserrat-bold text-[30px] sm:text-[50px] md:text-[60px] lg:text-[80px] text-center lg:text-left ">
            Nex Movers.
          </h1>
          <p className="text-[20px]  text-gray-500 font-thin  montserrat-thin  ">
            Your next move, our priority. <br />
          </p>
          <div className="flex gap-4 mt-5 text-2xl text-gray-400 md:text-5xl sm:text-4xl">
            <a
              href="https://www.facebook.com/"
              className="hover:text-blue-500 hover:scale-105"
            >
              <BiLogoFacebookCircle />
            </a>
            <a
              href="https://www.instagram.com/"
              className="hover:text-purple-500 hover:scale-105"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/"
              className="hover:text-red-500 hover:scale-105"
            >
              <FaYoutube />
            </a>
          </div>

          <button className="flex justify-center w-full lg:justify-start ">
            <div className="flex items-center justify-center w-[80%] sm:w-[60%] gap-5 mt-10 text-[12px] bg-yellow-500 shadow rounded-3xl hover:bg-orange-600 hover:scale-110 p-3 ">
              <h2 className="text-white montserrat-semibold lg:text-[20px] text-[15px]">
                Driver Dashboard
              </h2>
              <IoArrowForwardCircleOutline className="text-4xl text-white " />
            </div>
          </button>
        </div>
        <div className="md:w-[50%]  flex items-center lg:justify-end justify-center p-6 ">
          <img src={HeroImg} alt="" className="w-[80%]  " />
        </div>
      </div>
    </div>
  );
};

export default Home;
