import React from "react";
import ServiceImage from "../assets/service.png";
import CheckListImage from "../assets/checklist.png";
import GlassImage from "../assets/glass.png";
import InstagramImage from "../assets/Insta.png";
import MarketingImage from "../assets/marketing.png";
import RenameImage from "../assets/rename.png";
import UiImage from "../assets/ui.png";

const ServiceItem = ({ image, title }) => {
  return (
    <div className="flex items-center md:gap-4">
      <div>
        <img src={image} className="h-10 w-10 invisible md:visible" alt="" />
      </div>
      <div className="text-white font-semibold text-sm md:text-base">{title}</div>
    </div>
  );
};

const OurService = () => {
  return (
    <div className="md:mx-20 my-10 ">
      <div className="bg-bgColor rounded-2xl flex py-10 md:pl-12">
        <div>
          <img src={ServiceImage} className="w-56 h-36 md:h-80 md:w-96" alt="" />
        </div>
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="text-white font-semibold text-3xl pt-2 text-center">
            Discover Our service
            <div className="text-center">Areas</div>
          </div>
          <div className="text-white font-semibold text-base">
            Learn about the different regions we{" "}
            <span className=" text-[#FAFF00] ">serve</span> and our{" "}
            <span className="text-[#FAFF00]"> project scope </span>
          </div>
          <div className="flex gap-1 md:gap-20">
            <ServiceItem image={UiImage} title={"UI/UX Development"} />
            <ServiceItem image={MarketingImage} title={"Market Stratergy"} />
            <ServiceItem
              image={InstagramImage}
              title={"Social Media Marketing"}
            />
          </div>
          <div className="flex gap-1 md:gap-8">
            <span className="md:-ml-14 md:mr-16"><ServiceItem image={GlassImage} title={"Business Operations"}  /></span>
            <span className=""><ServiceItem image={CheckListImage} title={"Company Compliances"} /></span>
            <ServiceItem image={RenameImage} title={"Meta Marketing"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
