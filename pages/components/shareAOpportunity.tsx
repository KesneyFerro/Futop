import React from "react";

const ShareAOpportunity = () => {
  return (
    <div className="shareAOpportunity flex-col bg-[#fdfcf2] w-full min-h-[425px] flex items-center">
      <div className="shareAOpportunityContent w-[90%] flex justify-between h-full items-center">
        <div className="shareAOpportunityLeft ">
          <div className="shareAOpportunityTitle font-semibold text-[30px]">
            <h3>
              Conhece uma{" "}
              <span className=" inline-block">
                <span className=" underline-rounded ">Oportunidade?</span>
              </span>
            </h3>
            <h4 className=" font-medium text-lg max-w-[600px] text-justify mt-5 text-black/50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              at rhoncus amet, etiam felis, viverra pharetra tincidunt
              fermentum. Eget venenatis lacus, vestibulum id molestie. Cras orci
              sed neque euismod. Dolor augue quam metus, gravida quis maecenas
              amet.
            </h4>
            <button className="bg-[#25092D] text-white text-lg rounded-full px-5 py-4 mt-5 flex justify-between w-[310px] items-center drop-shadow-lg">
              Compartilhe Conosco{" "}
              <i className="bx bx-right-arrow-alt text-2xl"></i>
            </button>
          </div>
          <div className="shareAOpportunityDescription"></div>
          <button className="shareAOpportunityButton">
            <div className="shareAOpportunityButtonText"></div>
            <div className="shareAOpportunityButtonArrow"></div>
          </button>
        </div>
        <div className="shareAOpportunityRight"></div>
      </div>
    </div>
  );
};

export default ShareAOpportunity;
