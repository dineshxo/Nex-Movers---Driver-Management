import HeroImg from "../assets/hero_img.png";

import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex items-center h-full bg-gray-50">
      <div className="flex ">
        <div className="flex flex-col w-[50%] items-center justify-center ">
          <h1 className=" text-[40px]  montserrat-regular text-gray-600     ">
            Welcome
          </h1>
          <h1 className="block  text-yellow-500 montserrat-bold  text-[80px]  ">
            Nex Movers.
          </h1>
          <p className="text-[20px]  text-gray-500 font-thin  montserrat-thin  ">
            Your next move, our priority. <br />
          </p>
          <div className="flex gap-4 mt-5 text-5xl">
            <a href="https://www.facebook.com/" className="hover:text-blue-500">
              <BiLogoFacebookCircle />
            </a>
            <a
              href="https://www.instagram.com/"
              className="hover:text-purple-500"
            >
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/" className="hover:text-red-500">
              <FaYoutube />
            </a>
          </div>

          <button className="flex justify-center w-full">
            <div className="flex items-center justify-center w-[60%] gap-5 mt-10 text-[12px] bg-yellow-500 shadow rounded-3xl hover:bg-orange-600 hover:scale-110 p-3 ">
              <h2 className="text-white montserrat-semibold text-[20px]">
                Driver Dashboard
              </h2>
              <IoArrowForwardCircleOutline className="text-4xl text-white " />
            </div>
          </button>
        </div>
        <div className="w-[50%] p-20 flex ">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

// <div className="lg:w-[100vw] lg:h-[100vh] h-lvh  flex  items-center justify-around bg-gray-100 md:p-10 md:h-[100vh] ">
//   <div className="flex lg:flex-row-reverse flex-col-reverse items-center justify-center w-full  h-[80%]  ">
//     <div className=" lg:w-[40%] lg:p-[50px]  w-full md:w-[90%]">
//       <div className="flex flex-col items-center justify-center w-full mb-10 text-center lg:text-left ">
//         <h1 className="lg:text-[40px] md:text-[30px] text-[20px]  montserrat-regular text-gray-600     ">
//           Welcome
//         </h1>
//         <h1 className="block  text-yellow-500 montserrat-bold xl:text-[80px] md:text-[50px] text-[40px]  ">
//           Nex Movers.
//         </h1>
//         <p className="text-[20px]  text-gray-500 font-thin  montserrat-thin  ">
//           Your next move, our priority. <br />
//         </p>

//         <div className="flex md:text-[50px] gap-5 mt-10 text-gray-400 justify-center md:justify-start text-[30px] ">
//           <a
//             href="https://www.facebook.com/"
//             className="hover:text-blue-500"
//           >
//             <BiLogoFacebookCircle />
//           </a>
//           <a
//             href="https://www.instagram.com/"
//             className="hover:text-purple-500"
//           >
//             <FaInstagram />
//           </a>
//           <a href="https://www.youtube.com/" className="hover:text-red-500">
//             <FaYoutube />
//           </a>
//         </div>
//         <div className="flex items-center justify-center w-[80%] gap-5 mt-10 text-[12px] bg-yellow-500 shadow sm:p-4 rounded-3xl hover:bg-orange-600 hover:scale-110  ">
//           <h2 className="text-white sm:text-[20px] text-[12px] montserrat-regular text-bold">
//             Drivers dashboard
//           </h2>

//           <IoArrowForwardCircleOutline className="text-4xl text-white " />
//         </div>
//       </div>
//     </div>
//     <div className="lg:w-[40%] md:w-[60%] sm:w-[90%]   p-10 h-full flex items-center justify-center w-[90%]">
//       <img src={HeroImg} alt="" className=" w-[100%]" />
//     </div>
//   </div>
// </div>
