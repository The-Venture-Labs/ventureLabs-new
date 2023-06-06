import React from "react";
import Expertise from "../assets/expertise.png";
import ReactImage from "../assets/react.png";
import FlutterImage from "../assets/flutter.png";
import DmImage from "../assets/dm.png";
import SeoImage from "../assets/seo.png";
import AccImage from "../assets/tax.png";

const ExpertiseItem = ({ image, title }) => {
  return (
    <div className="flex items-center gap-4">
      <div>
        <img src={image} height={60} width={60} alt="" />
      </div>
      <div className="text-white font-semibold text-sm md:text-base">{title}</div>
    </div>
  );
};

const OurExpertise = () => {
  return (
    <div className="mx-1 md:mx-20">
      <div className="text-white font-semibold text-4xl my-6 ">
        Our Expertise
      </div>
      <div className="flex bg-bgColor rounded-2xl justify-around items-center  mt-10 py-10">
        <div className="py- mx-6">
          <img src={Expertise} className="w-60 h-36 md:w-96 md:h-80" alt="" />
        </div>
        <div className="flex-col flex gap-4 pr-20">
          <ExpertiseItem image={ReactImage} title="Web Development" />
          <ExpertiseItem image={FlutterImage} title="App Development" />
          <ExpertiseItem image={DmImage} title="Digital Marketing " />
          <ExpertiseItem image={SeoImage} title="Search Engine Optimization" />
          <ExpertiseItem image={AccImage} title="Accounting ,GST and Taxes" />
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
