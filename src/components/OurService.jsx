import React from "react";
import ServiceImage from "../assets/service.png";
import CheckListImage from "../assets/checklist.png";
import GlassImage from "../assets/glass.png";
import InstagramImage from "../assets/instagram.png";
import MarketingImage from "../assets/marketing.png";
import RenameImage from "../assets/rename.png";
import UiImage from "../assets/ui.png";

const ServiceItem = ({ image, title }) => {
  return (
    <div className="flex items-center gap-4">
      <div>
        <img src={image} height={60} width={60} alt="" />
      </div>
      <div className="text-white font-semibold text-base">{title}</div>
    </div>
  );
};

const OurService = () => {
  return (
    <div className="mx-20 my-10">
      <div className="bg-black rounded-2xl flex pl-12">
        <div>
          <img src={ServiceImage} height={500} width={500} alt="" />
        </div>
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="text-white font-semibold text-3xl pt-2">
            Discover Our service
            <div className="text-center">Areas</div>
          </div>
          <div className="text-white font-semibold text-base">
            Learn about the different regions we{" "}
            <span className=" text-[#FAFF00] ">serve</span> and our{" "}
            <span className="text-[#FAFF00]"> project scope </span>
          </div>
          <div className="flex gap-16">
            <ServiceItem image={UiImage} title={"UI/UX Development"} />
            <ServiceItem image={MarketingImage} title={"Market Stratergy"} />
            <ServiceItem
              image={InstagramImage}
              title={"Social Media Marketing"}
            />
          </div>
          <div className="flex gap-16">
            <ServiceItem image={GlassImage} title={"Business Operations"} />
            <ServiceItem image={CheckListImage} title={"Company Compliances"} />
            <ServiceItem image={RenameImage} title={"Meta Marketing"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
