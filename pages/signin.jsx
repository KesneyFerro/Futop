/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
// import { motion } from "framer-motion";
import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { HomeCointainer } from "../styles/components/home";
export default function SignIn({ providers }) {
  const router = useRouter();

  return (
    <>
      <HomeCointainer>
        <Head>
          <link
            href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
            rel="stylesheet"
          ></link>
          <meta charSet="UTF-8"></meta>
          <meta name="#fece2f"></meta>
          <title>SignIn - Futop</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col w-full h-auto justify-start align-start lg:flex-row-reverse lg:justify-center">
          <div className="w-full min-h-[450px] flex-col justify-between items-center lg:h-[100vh]">
            <img
              src="/signinblob.svg"
              className="absolute right-0 top-0 w-[200px] lg:w-[350px] "
              alt=""
            />
            <div className="flex flex-col items-center mt-[140px] px-5 lg:px-0 lg:items-start lg:mt-0 lg:justify-center lg:h-[95%] lg:ml-24">
              <h1 className="text-3xl lg:text-[35px] font-black">
                Crie uma conta
              </h1>
              <h3 className="text-center mt-4 lg:text-[18px] text-black/[45%]">
                Venha encontrar as suas próximas oportunidades
              </h3>
              <div className="mt-8 lg:mt-20 flex text-black/80 text-sm justify-center lg:justify-start lg:items-start items-center flex-col">
                <h4 className="mb-5 text-black/70">Continue com...</h4>
                <div className="flex flex-wrap justify-center items-center mb-[100px] lg:mb-0">
                  {Object.values(providers).map((provider) => (
                    <button
                      key={provider.id}
                      className="border-[3px] border-black bg-white hover:bg-black/90 transition-colors duration-300 hover:text-white/90 hover:border-black w-[125px] lg:w-[135px] lg:h-[135px] h-[125px] rounded-lg font-bold text-[15px] flex flex-col justify-center items-center"
                      onClick={() =>
                        signIn(provider.id, {
                          callbackUrl: router.query.callbackUrl,
                        })
                      }
                    >
                      {provider.name == "Google" ? (
                        <i className="bx bxl-google text-[50px] mb-1"></i>
                      ) : (
                        <i className="bx bxl-apple text-[50px] mb-1"></i>
                      )}
                      {provider.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-center text-sm px-6 mb-[70px] lg:mb-0 text-black/[55%]">
                By register you agree with our{" "}
                <span className="font-bold text-[#25092D]">
                  terms and conditions
                </span>{" "}
                and{" "}
                <span className="font-bold text-[#25092D]">privacy policy</span>
              </h4>
            </div>
          </div>
          <div className="w-full relative flex justify-center lg:items-end h-auto lg:h-[100vh] lg:w-[700px] bg-gradient-to-b from-[#3F0F4D] to-[#25092D]">
            <img
              src="/signin/leaftop.svg"
              className="w-[100px] absolute top-0 left-0"
            />
            <img
              src="/signin/leafbottom.svg"
              className="w-[60px] absolute bottom-0 left-0"
            />
            <img
              className=" mt-[120px] w-[90%] max-w-[450px] bottom-[-10px]"
              src="/signinperson.svg"
            ></img>
          </div>
        </main>
      </HomeCointainer>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
