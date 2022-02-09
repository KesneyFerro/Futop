/* eslint-disable react/jsx-no-undef */
import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { HomeCointainer } from "../styles/components/home";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Image from "next/image";
// import { useTranslations } from "next-intl";

const Suggestions: NextPage = () => {
  // const t = useTranslations("suggestions");
  return (
    <HomeCointainer>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
        <meta charSet="UTF-8"></meta>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center flex-col dark:bg-[#181a1b] transition duration-300">
        <Navbar />
        <div className="helpUsToImprove flex justify-center xl:justify-between mt-[80px] items-center bg-[#F3F0EA] w-full h-[700px] min-h-[700px] dark:bg-[#161819] transition duration-300">
          <div className="helpUsToImproveLeft mr-16 h-full hidden xl:flex items-end">
            <Image
              src="/helpUsToImproveImage.svg"
              width={660}
              height={500}
              alt="Pessoa segurando uma lanterna na qual a iluminação contém um balão de dúvida"
            />
          </div>
          <div className="helpUsToImproveRight w-full xl:w-auto flex flex-col items-center justify-center relative h-full ">
            <div className="helpUsToImproveImageBlob absolute right-0 bottom-0">
              <img
                className=""
                src="/helpUsToImproveBlob.svg"
                alt="Pessoa segurando uma lanterna na qual a iluminação contém um balão de dúvida"
              />
            </div>
            <div className="xl:mr-[10vw] flex flex-col items-center xl:items-end">
              <div className="helpUsToImproveTitle ">
                <h2 className="text-[#25092D] text-center xl:text-right leading-[1.25] font-extrabold text-[11.1vw] sm:text-5xl max-w-auto dark:text-[#F3F0EA]">
                  Alguma{" "}
                  <span className="inline-block">
                    <span className="underline-rounded">sugestão?</span>
                  </span>
                </h2>
              </div>
              <div className="helpUsToImproveDescription z-[5]">
                <h5 className="helpUsToImproveDescriptionAlt mt-12 font-medium text-base text-center xl:text-justify dark:text-white/70 text-[#a7a7a7] max-w-[445px] xl:px-0 px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Scelerisque nulla pretium vel rutrum lacinia. Tellus est
                  ultricies purus dignissim. Nec, odio blandit at sed. Mauris
                  ornare quis ac elit quam mollis vel enim. Purus euismod quam
                  mauris nunc integer neque. Nunc morbi bibendum laoreet mattis
                  nisl, sed elit.
                </h5>
              </div>
              <button className="helpUsToImproveButton xl:bg-[#25092D] bg-[#ffc700] xl:text-white font-medium xl:font-normal text-base rounded-full px-5 py-3 mt-10 flex justify-center w-[260px] items-center drop-shadow-lg">
                Contribua conosco
              </button>
            </div>
          </div>
        </div>
        <div className="aboutUsmain w-[80%]">
          <div className="introductionAboutUs w-full flex flex-col xl:flex-row items-center justify-between mt-20">
            <div className="introductionAboutUsTitle text-justify max-w-auto">
              <p className="text-[#25092D] font-extrabold text-4xl text-center mb-7 xl:mb-0 xl:text-left dark:text-[#F3F0EA]">
                Sobre nós
                <br />
                <span className="text-[#AF5BC6] text-5xl">Nome</span>
              </p>
            </div>
            <div className="introductionAboutUsDescription w-auto max-w-[545px] h-auto bg-[#F8F8F8] px-6 py-5 rounded-xl drop-shadow-xl xl:mr-3 dark:bg-[#1e2022] transition duration-300 ">
              <p className="font-medium text-center sm:text-justify text-[#4a4a4a] dark:text-[#F3F0EA]/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque nulla pretium vel rutrum lacinia. Tellus est
                ultricies purus dignissim. Nec, odio blandit at sed. Mauris
                ornare quis ac elit quam mollis vel enim. Purus euismod quam
                mauris nunc integer neque. Nunc morbi bibendum laoreet mattis
                nisl, sed elit.
              </p>
            </div>
          </div>
          <div className="planningTheIdeaImage w-full flex justify-center">
            <img
              src="/planningTheIdea.svg"
              className="w-full h-auto mt-20 max-w-[800px] "
              alt="Pessoa segurando uma lanterna na qual a iluminação contém um balão de dúvida"
            />
          </div>
          <div className="firstIdea w-full flex flex-col xl:flex-row items-center justify-between mt-20">
            <div className="firstIdeaTitle text-justify max-w-auto">
              <p className="text-[#25092D] font-extrabold text-center mb-7 xl:mb-0 xl:text-left text-4xl p-5 dark:text-[#F3F0EA]">
                A ideia inicial
              </p>
            </div>
            <div className="firstIdeaDescription w-auto max-w-[545px] h-auto bg-[#F8F8F8] px-6 py-5 rounded-xl drop-shadow-xl xl:mr-3 dark:bg-[#1e2022] transition duration-300">
              <p className="font-medium text-center sm:text-justify text-[#4a4a4a] dark:text-[#F3F0EA]/80">
                Lörem ipsum tetralig diadat ett stenotanas respektive såre.
                Blixad semiling ditåren ogodenera. Kons. Euroska nyng. Garad
                mibelt sågen. Porade nende. Alkobom prohet, den dosat. Porad
                plalig. Nibisat jölig sedång, tåsade. Kvasiaktiv poskade.
                Fatesam antropotik gangen decivis. Nilegen sekelsiffror
                laherade. Tibel yska. Fynade estetisk kompetens sesat. Epifadade
                bedengar, sepade tirad. Preligen spermatvätt när darar.
              </p>
            </div>
          </div>
          <hr className="mt-10 mb-20 border-[1px] border-[#c6c6c6] dark:opacity-20 w-full" />
          <div className="projectMotivations mb-20">
            <div className="flex flex-col xl:flex-row items-center">
              <div className="icon1 mb-7 xl:mb-0 xl:mr-5">
                <img
                  className="w-16"
                  src="/socialInequality.svg"
                  alt="Pessoa segurando uma lanterna na qual a iluminação contém um balão de dúvida"
                />
              </div>
              <div className="projectMotivationsText">
                <div className="projectMotivationsTitle mb-2">
                  <h4 className="text-[#25092D] xl:text-left xl:text-normal text-lg text-center font-semibold dark:text-[#F3F0EA]">
                    Para tornar o mundo mais igualitário
                  </h4>
                </div>
                <div className="projectMotivationsDescription">
                  <h5 className="font-normal opacity-80  max-w-[750px] xl:text-justify text-center text-[#4a4a4a]  dark:text-[#d4d2cd]">
                    Lörem ipsum tetralig diadat ett stenotanas respektive såre.
                    Blixad semiling ditåren ogodenera. Kons. Euroska nyng. Garad
                    mibelt sågen.
                  </h5>
                </div>
              </div>
            </div>
            <div className="my-[40px] flex flex-col xl:flex-row items-center">
              <div className="icon2 mb-7 xl:mb-0 xl:mr-5">
                <img
                  className="w-16"
                  src="/educationalImprovement.svg"
                  alt="Pessoa segurando uma lanterna na qual a iluminação contém um balão de dúvida"
                />
              </div>
              <div className="projectMotivationsText">
                <div className="projectMotivationsTitle mb-2">
                  <h4 className="text-[#25092D] xl:text-normal text-lg xl:text-left text-center font-semibold dark:text-[#F3F0EA]">
                    Para melhorar a educação
                  </h4>
                </div>
                <div className="projectMotivationsDescription">
                  <h5 className="font-normal xl:text-justify text-center   max-w-[750px] text-[#4a4a4a]  opacity-80  dark:text-[#d4d2cd]">
                    Lörem ipsum tetralig diadat ett stenotanas respektive såre.
                    Blixad semiling ditåren ogodenera. Kons. Euroska nyng. Garad
                    mibelt sågen.
                  </h5>
                </div>
              </div>
            </div>
            <div className="my-[40px] flex flex-col xl:flex-row items-center">
              <div className="icon3 mb-7 xl:mb-0 xl:mr-5">
                <img
                  className="w-16"
                  src="/giveEveryoneAChance.svg"
                  alt="Pessoa segurando uma lanterna na qual a iluminação contém um balão de dúvida"
                />
              </div>
              <div className="projectMotivationsText">
                <div className="projectMotivationsTitle mb-2">
                  <h4 className="text-[#25092D] xl:text-left xl:text-normal text-lg text-center font-semibold dark:text-[#F3F0EA]">
                    Para dar chance a todos
                  </h4>
                </div>
                <div className="projectMotivationsDescription">
                  <h5 className="font-normal xl:text-justify text-center max-w-[750px]  text-[#4a4a4a]  opacity-80  dark:text-[#d4d2cd]">
                    Lörem ipsum tetralig diadat ett stenotanas respektive såre.
                    Blixad semiling ditåren ogodenera. Kons. Euroska nyng. Garad
                    mibelt sågen.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </HomeCointainer>
  );
};
export const getServerSideProps = ({ locale, locales }: any) => {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
};
export default Suggestions;
