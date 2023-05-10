import React from "react";
import HeroImage from "../assets/hero.png";

const Hero = () => {
  return(
    <div className="mx-20">
        <div className="flex justify-between items-center">
            <div className="flex-col">
                <div className="text-white font-semibold text-4xl text-center pb-2">
                    Grow Your 
                </div>
                <div className="text-white font-semibold text-4xl text-center pb-4">
                    Business With
                </div>
                <div className="font-bold bg-gradient-to-b from-blue-900 to-blue-500 text-transparent bg-clip-text text-5xl text-center">
                    VENTURE LABS
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex-col">
                    <div className="text-white text-xl font-semibold">
                        Ab Dhanda karna hua easy
                    </div>
                    <div className="text-white text-center pt-3">
                        Book your slot <span className="text-red-500">now</span>
                    </div>
                    <div className="text-center pt-2">
                        <button className="bg-[#071145] text-white rounded-2xl px-4 py-2 mt-4">schedule a call</button>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} height={400} width={400} alt="" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;
