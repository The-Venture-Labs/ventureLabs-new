import React from "react";
import HeroImage from "../assets/hero.png";

const Hero = () => {
  return(
    <div className="md:mx-20">
        <div className="md:flex justify-between items-center">
            <div className="flex-col">
                <div className="text-white font-semibold text-2xl md:text-4xl text-center pb-2">
                    Grow Your 
                </div>
                <div className="text-white font-semibold text-2xl md:text-4xl text-center pb-4">
                    Business With
                </div>
                <div className="font-bold bg-gradient-to-b from-blue-900 to-blue-500 text-transparent bg-clip-text text-4xl md:text-5xl text-center">
                    VENTURE LABS
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex-col ml-3">
                    <div className="text-white text-sm md:text-xl font-semibold mt-5 ml-1 md:mt-0 text-center ">
                        Ab Dhanda karna hua easy
                    </div>
                    <div className="text-white text-center pt-3">
                        Book your slot <span className="text-red-500">now</span>
                    </div>
                    <div className="text-center pt-2">
                    <a href="https://calendly.com/venture-labs25" target ="_blank"> <button className="bg-[#071145] text-white rounded-2xl py-2 px-2  md:px-4 md:py-2 md:mt-4">Schedule A Call</button></a>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} className="w-60 h-60 md:w-96 md:h-96" alt="" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;
