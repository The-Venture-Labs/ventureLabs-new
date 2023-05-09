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
      <div className="text-white font-semibold text-base">{title}</div>
    </div>
  );
};

const OurExpertise = () => {
  return (
    <div className="mx-20">
      <div className="text-white font-semibold text-4xl pb-6">
        Our Expertise
      </div>
      <div className="flex bg-black rounded-2xl justify-around items-center ">
        <div className="py-4">
          <img src={Expertise} height={400} width={400} alt="" />
        </div>
        <div className="flex-col flex gap-4 pr-20">
          <ExpertiseItem image={ReactImage} title="Webiste Development" />
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
