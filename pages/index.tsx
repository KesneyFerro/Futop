/* eslint-disable react/jsx-no-undef */
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { HomeCointainer } from "../styles/components/home";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ShareAOpportunity from "./components/shareAOpportunity";
import { useTranslations } from "next-intl";
import styled from "styled-components";
import Link from "next/link";

const LandingPage: NextPage = () => {
  const t = useTranslations("home");
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
    <HomeCointainer>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
        <meta charSet="UTF-8"></meta>
        <title>Home - Futop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center flex-col dark:bg-[#1c1c1d] transition-colors duration-300">
        <Navbar />
        <div className="mt-[80px] getToKnowOurOpportunities  bg-[#f8f5f5] dark:bg-[#161819] transition duration-300 w-full flex justify-center md:block">
          <div className="md:w-full w-[80vh] flex flex-col md:flex-row justify-between items-center h-auto md:h-[700px] md:min-h-[700px]">
            <div className="getToKnowOurOpportunitiesLeft mt-16 md:mt-0 flex flex-col items-center justify-center relative h-full mx-[5vw] sm:ml-[5vw] sm:mr-0 xl:ml-[10vw] md:items-start">
              <div className="getToKnowOurOpportunitiesLeftTitle">
                <h2 className="text-[#25092D] dark:text-white text-center titletext md:text-left font-extrabold text-5xl max-w-[500px]">
                  {t("maintitle1")}{" "}
                  <span className="text-[#FECE31]">{t("maintitle2")}</span>{" "}
                  {t("maintitle3")}
                  <span className="text-[#AF5BC6]"> {t("maintitle4")}</span>
                </h2>
              </div>
              <div className="getToKnowOurOpportunitiesLeftDescription">
                <h3 className="mt-12 font-medium text-base md:text-justify text-[#a7a7a7] max-w-[525px] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Scelerisque nulla pretium vel rutrum lacinia. Tellus est
                  ultricies purus dignissim. Nec, odio blandit at sed. Mauris
                  ornare quis ac elit quam mollis vel enim. Purus euismod quam
                  mauris nunc integer neque. Nunc morbi bibendum laoreet mattis
                  nisl, sed elit. Duis maecenas viverra ut nisi. Amet neque
                  malesuada elit vitae orci et nibh. Lectus eget duis
                  pellentesque etiam pellentesque porta lectus volutpat sed.
                  (colocar o que ofertamos aqui)
                </h3>
              </div>
              <Link href={"/opportunities"}>
                <button className="getToKnowOurOpportunitiesLeftButton bg-[#25092D] dark:bg-[#fece31]  dark:text-black dark:font-semibold text-white text-[14px] rounded-full px-7 py-4 mt-10 flex justify-center w-auto items-center drop-shadow-lg">
                  {t("mainbutton")}
                </button>
              </Link>
            </div>
            <div className="getToKnowOurOpportunitiesRight h-full">
              <div className="getToKnowOurOpportunitiesRightImage h-full lg:ml-0 sm:ml-16">
                <img
                  className="h-full "
                  src="/getToKnowOurOpportunitiesImage.svg"
                  alt="Pessoa segurando uma lanterna na qual a iluminação contém um balão de dúvida"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mainHome w-full flex items-center flex-col mb-16">
          <div className="mainHomeDecoration w-full relative">
            <div className="mainHomeDecoration1 absolute left-0 top-0">
              <img
                className="w-[150px] lg:w-auto dark:hidden block z-[2]"
                src="/HomeBlob1.svg"
                alt="Pessoa segurando uma lanterna na qual a iluminação contém um balão de dúvida"
              />
              <img
                className="w-[150px] lg:w-auto dark:block hidden z-[2]"
                src="/HomeBlob3.svg"
                alt="Pessoa segurando uma lanterna na qual a iluminação contém um balão de dúvida"
              />
            </div>
            <div className="mainHomeDecoration2 absolute right-0 top-0">
              <img
                className="w-[150px] lg:w-auto dark:hidden block"
                src="/HomeBlob2.svg"
                alt="Pessoa segurando uma lanterna na qual a iluminação contém um balão de dúvida"
              />
              <img
                className="w-[150px] lg:w-auto dark:block hidden"
                src="/HomeBlob4.svg"
                alt="Pessoa segurando uma lanterna na qual a iluminação contém um balão de dúvida"
              />
            </div>
          </div>
          <div className="mainHomeMotivations w-[85vw] sm:w-[90vw] flex items-center flex-col mt-24 lg:mt-40">
            <div className="mainHomeMotivationsTitle">
              <h2 className="font-extrabold z-[5] text-[#303031] text-4xl text-center dark:text-white/95">
                {t("motivationsTitle")}
              </h2>
            </div>
            <div className="mainHomeMotivationsQuote">
              <h3 className="text-[#000000]/50 text-center mt-2 dark:text-white/60">
                {t("motivationsDescription")}
              </h3>
            </div>
            <div className="mainHomeMotivationsBoxes flex flex-col lg:flex-row justify-between w-full mt-16 lg:mt-10">
              <div className="motivationBox1 w-full h-auto mr-3 bg-[#FFFFFF]  dark:bg-[#1e2022] px-5 py-5 rounded-xl drop-shadow-xl dark:drop-shadow-md flex items-center flex-col mb-10 lg:mb-0">
                <div className="motivationBox1icon mt-10">
                  <img src="/binocularIcon.svg" alt="" />
                </div>
                <div className="motivationBox1Title my-5">
                  <h3 className="font-semibold text-lg text-center dark:text-white">
                    {t("motivationsbox1title")}
                  </h3>
                </div>
                <div className="motivationBox1description mb-5">
                  <h4 className="font-normal text-base text-center text-[#303031]/80 dark:text-white/80">
                    {t("motivationsbox1description")}
                  </h4>
                </div>
              </div>
              <div className="mb-10 lg:mb-0 motivationBox2 w-full h-auto mr-3 bg-[#FFFFFF] dark:bg-[#1e2022] px-5 py-5 rounded-xl drop-shadow-xl dark:drop-shadow-md flex items-center flex-col">
                <div className="motivationBox2icon mt-10">
                  <img src="/lampIcon.svg" alt="" />
                </div>
                <div className="motivationBox2Title my-5">
                  <h3 className="font-semibold text-lg text-center dark:text-white">
                    {t("motivationsbox2title")}
                  </h3>
                </div>
                <div className="motivationBox2description mb-5">
                  <h4 className="font-normal text-base text-center text-[#303031]/80 dark:text-white/80">
                    {t("motivationsbox2description")}
                  </h4>
                </div>
              </div>
              <div className="motivationBox3 w-full h-auto bg-[#FFFFFF] dark:bg-[#1e2022] px-5 py-5 rounded-xl drop-shadow-xl dark:drop-shadow-md flex items-center flex-col">
                <div className="motivationBox3icon mt-10">
                  <img src="/BalanceIcon.svg" alt="" />
                </div>
                <div className="motivationBox3Title my-5">
                  <h3 className="font-semibold text-lg text-center dark:text-white">
                    {t("motivationsbox3title")}
                  </h3>
                </div>
                <div className="motivationBox3description mb-5">
                  <h4 className="font-normal text-base text-center text-[#303031]/80 dark:text-white/80">
                    {t("motivationsbox3description")}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="mainHomeRequirements w-[90vw] flex flex-col  justify-center lg:justify-between items-center mt-16 pt-8 h-auto lg:flex-row">
            <div className="mainHomeRequirementsLeft max-w-[500px] flex flex-col justify-center">
              <div className="flex flex-col justify-center">
                <div className="mainHomeRequirementsLeftIcon mb-5 flex justify-center lg:block">
                  <img
                    src="/RequirementsIcon.svg"
                    alt=""
                    className="h-[60px]"
                  />
                </div>
                <div className="mainHomeRequirementsLeftTitle">
                  <h3 className="font-extrabold text-[#303031] text-4xl text-center lg:text-left dark:text-white/95 mb-5">
                    {t("requirementsboxtitle")}
                  </h3>
                </div>
                <div className="mainHomeRequirementsLeftDescription">
                  <h4 className="font-medium text-[#303031] text-center lg:text-justify mt-2 dark:text-white/95">
                    {t("requirementsdescription")}
                  </h4>
                </div>
              </div>
            </div>
            <div className="mainHomeRequirementsRight  mt-10 lg:mt-0 lg:ml-10 w-full max-w-[500px] flex items-center h-auto">
              <div className="mainHomeRequirementsRightBox w-full h-full bg-[#FFFFFF] px-7 py-7 rounded-xl drop-shadow-xl flex items-left flex-col dark:bg-[#1e2022]">
                <div className="reiquirementBoxTitle mb-5 lg:block flex justify-center">
                  <h3 className=" text-xl font-semibold text-[#303031] dark:text-white/95">
                    {t("requirementsboxtitle")}
                  </h3>
                </div>
                <div className="requirement1 mt-3 mb-2 flex items-center">
                  <div className="requirementIcon1 mr-3">
                    <img src="/OneIcon.svg" alt="" className="h-[40px]" />
                  </div>
                  <div className="requirementName1">
                    <h4 className="text-normal text-[#303031] dark:text-[#FFFFFF]">
                      {t("requirementsitem1")}
                    </h4>
                  </div>
                </div>
                <div className="requirement2 mt-3 flex items-center mb-2">
                  <div className="requirementIcon2 mr-3">
                    <img src="/TwoIcon.svg" alt="" className="h-[40px]" />
                  </div>
                  <div className="requirementName2">
                    <h4 className="text-normal text-[#303031] dark:text-[#FFFFFF]">
                      {t("requirementsitem2")}
                    </h4>
                  </div>
                </div>
                <div className="requirement3 mt-3 flex items-center ">
                  <div className="requirementIcon3 mr-3">
                    <img src="/ThreeIcon.svg" alt="" className="h-[40px]" />
                  </div>
                  <div className="requirementName3">
                    <h4 className="text-normal text-[#303031] dark:text-[#FFFFFF]">
                      {t("requirementsitem3")}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inviteToRegister w-[90vw] flex justify-center items-center mt-10 mb-4">
            <InviteToRegister className="px-10 items-center  inviteToRegister w-full rounded-3xl h-auto lg:h-[300px] flex justify-start lg:justify-between flex-col mt-16 lg:flex-row lg:mt-10 ]">
              <div className="inviteToRegisterLeft mb-16 lg:mb-0 flex flex-col items-start  mt-10 w-auto max-w-[100vw] lg:mt-0 lg:max-w-[380px]">
                <div className="inviteToRegisterLeftTitle flex w-full justify-center">
                  <h2 className="font-extrabold text-3xl text-white/95 lg:text-5xl text-center lg:text-left">
                    {t("joinustitle")}
                  </h2>
                </div>
                <div className="inviteToRegisterLeftDescription mt-5 text-white/50">
                  <h3 className="text-sm lg:text-base text-center lg:text-justify">
                    {t("joinusdescription1")} <br /> {t("joinusdescription2")}
                  </h3>
                </div>
              </div>
              <div className="inviteToRegisterRight mb-10 lg:mb-0">
                <button className="inviteToRegisterRightButton flex flex-col items-center bg-[#fece31] font-bold lg:font-extrabold text-[#090D2D] text-lg rounded-full px-10 py-4 justify-center w-auto">
                  {t("joinusbutton")}
                </button>
              </div>
            </InviteToRegister>
          </div>
        </div>
        <ShareAOpportunity />
        <Footer />
      </main>
    </HomeCointainer>
  );
};
const InviteToRegister = styled.div`
  background-image: url("/inviteToRegisterImage.png");
  background-size: cover;
  background-position: center;
`;

export const getServerSideProps = ({ locale, locales }: any) => {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
};
export default LandingPage;
