import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ShareAOpportunity = () => {
  const t = useTranslations("shareAOpportunity");
  return (
    <div className="shareAOpportunity flex-col bg-[#fdfcf2] w-full min-h-[425px] flex items-center">
      <div className="shareAOpportunityContent w-[90%] flex flex-col justify-center lg:flex-row lg:justify-between h-full items-center">
        <div className="shareAOpportunityLeft mt-10 ">
          <div className="shareAOpportunityTitle font-semibold text-[27px] flex flex-col items-center lg:flex-col lg:items-start">
            <h3 className="text-center lg:text-left ">
              {t("doyouknow")}{" "}
              <span className=" inline-block">
                <span className=" underline-rounded ">{t("opportunity")}?</span>
              </span>
            </h3>
            <h4 className=" font-medium text-base max-w-[600px] text-center lg:text-justify mt-10 mb-5 lg:mb-0 lg:mt-5 text-black/50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              at rhoncus amet, etiam felis, viverra pharetra tincidunt
              fermentum. Eget venenatis lacus, vestibulum id molestie. Cras orci
              sed neque euismod. Dolor augue quam metus, gravida quis maecenas
              amet.
            </h4>
            <button className="bg-[#25092D] text-white text-base rounded-full px-5 py-3 mt-5 flex justify-center lg:justify-between w-[80vw] max-w-[310px] items-center drop-shadow-lg">
              {t("shareus")} <i className="bx bx-right-arrow-alt text-2xl"></i>
            </button>
          </div>
          <div className="shareAOpportunityDescription"></div>
          <button className="shareAOpportunityButton">
            <div className="shareAOpportunityButtonText"></div>
            <div className="shareAOpportunityButtonArrow"></div>
          </button>
        </div>
        <div className="shareAOpportunityRight ml-10">
          <Image
            src="/shareAOpportunity.svg"
            width={400}
            height={400}
            alt="Pessoa segurando uma lanterna na qual a iluminação contém um balão de dúvida"
          />
        </div>
      </div>
    </div>
  );
};

export default ShareAOpportunity;
