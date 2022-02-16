import React from "react";
import styled from "styled-components";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("footer");
  if (typeof window === "object") {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <ShareAOpportunity className="bg-white dark:bg-[#1e2022] transition duration-300 w-full flex justify-center items-center ">
      <div className="w-[80%] flex-col justify-center items-center">
        <div className="mt-32 flex flex-col items-center">
          <div className=" bg-transparent dark:bg-[#1b1c1e] w-[90px] h-[90px] rounded-full flex justify-center items-center">
            <img src="/futop.png" alt="logo" className="w-[70px]" />
          </div>
          {/* <h2 className="text-3xl font-extrabold dark:text-white">Logo</h2> */}
          <h3 className="mt-7 text-center text-black/40 dark:text-white/60 w-full max-w-[900px]">
            {t("aboutus")}...{""}
            <Link href="/suggestions">
              <span className="text-black dark:text-white font-semibold cursor-pointer">
                {t("readMore")}
              </span>
            </Link>
          </h3>
          {/* <div
            id="SocialMedias"
            className="mt-5 flex justify-center items-center flex-wrap gap-[0.75rem]"
          >
            <div className="rounded-full w-12 h-12 flex justify-center items-center cursor-pointer bg-[#FAEEC5] dark:bg-[#fadb78]">
              <i className="bx bxl-twitter text-2xl text-[#50545E] dark:text-[#b4b4b45]"></i>
            </div>
            <div className="rounded-full w-12 h-12 cursor-pointer flex justify-center items-center bg-[#FAEEC5] dark:bg-[#fadb78]">
              <i className="bx bxl-discord-alt text-2xl text-[#50545E] dark:text-[#b4b4b45]"></i>
            </div>
            <div className="rounded-full w-12 h-12 cursor-pointer flex justify-center items-center bg-[#FAEEC5] dark:bg-[#fadb78]">
              <i className="bx bxl-instagram text-2xl text-[#50545E] dark:text-[#b4b4b45]"></i>
            </div>
            <div className="rounded-full w-12 h-12 cursor-pointer flex justify-center items-center bg-[#FAEEC5] dark:bg-[#fadb78]">
              <i className="bx bxl-whatsapp text-2xl text-[#50545E] dark:text-[#b4b4b45]"></i>
            </div>
          </div> */}
        </div>
        <div className="w-full flex-col mt-10">
          <div className="justify-between hidden sm:flex">
            <h4 className="hidden sm:block text-[#9A9EA6] cursor-pointer">
              {t("aboutUs")}
            </h4>
            <h4 className="hidden sm:block text-[#9A9EA6] cursor-pointer">
              {t("otherProjects")}
            </h4>
            <h4 className="desktop text-[#9A9EA6] cursor-pointer">
              {t("press")}
            </h4>
            <h4 className="desktop text-[#9A9EA6] cursor-pointer">
              {t("blog")}
            </h4>
            <h4 className="desktop text-[#9A9EA6] cursor-pointer">
              {t("FAQ")}
            </h4>
            <h4 className="desktop text-[#9A9EA6] cursor-pointer">
              {t("careers")}
            </h4>
            <h4 className="text-[#9A9EA6] cursor-pointer hidden sm:block">
              {t("contacts")}
            </h4>
            <h4 className="desktop text-[#9A9EA6] cursor-pointer">
              {t("privacypolicy")}
            </h4>
            <h4 className="desktop text-[#9A9EA6] cursor-pointer">
              {t("sitemap")}
            </h4>
            <h4 className="text-[#9A9EA6] cursor-pointer hidden sm:block">
              {t("useterms")}
            </h4>
          </div>
          <div className="flex flex-col justify-center xl:flex-row xl:justify-between mt-10 items-center mb-10">
            <div className="xl:mb-0 mb-12">
              <div className="flex flex-col sm:flex-row">
                {/* <div className="flex items-center justify-center">
                  <div className="rounded-full w-12 h-12 mr-3 cursor-pointer flex justify-center items-center bg-[#FAEEC5] dark:bg-[#fadb78]">
                    <i className="bx bx-phone-call text-2xl text-[#50545E]"></i>
                  </div>
                  <div className="flex-col justify-between">
                    <h4 className=" text-[#9A9EA6] text-sm ">
                      {t("havequestions")}
                    </h4>
                    <h5 className="font-bold text-[#50545E] dark:text-gray-300">
                      301-437-2766
                    </h5>
                  </div>
                </div> */}
                <div className="flex items-center justify-center ml-0 sm:ml-0 mt-5 sm:mt-0">
                  <div className="rounded-full w-12 h-12 mr-3 flex justify-center items-center cursor-pointer bg-[#FAEEC5] dark:bg-[#fadb78]">
                    <i className="bx bx-mail-send text-2xl text-[#50545E] "></i>
                  </div>
                  <div className="flex-col justify-between">
                    <h4 className=" text-[#9A9EA6] text-sm ">
                      {t("contactUs")}
                    </h4>
                    <h5 className="font-bold text-[#50545E] dark:text-gray-300">
                      unreal@outlook.com
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="text-[#9A9EA6] text-sm text-center dark:text-white">
              &copy; 2022 Futop. {t("copyright")}.
            </h5>
          </div>
        </div>
      </div>
    </ShareAOpportunity>
  );
};

const ShareAOpportunity = styled.div`
  .desktop {
    display: block;
  }
  @media (max-width: 1330px) {
    .desktop {
      display: none;
    }
  }
`;
export default Footer;
