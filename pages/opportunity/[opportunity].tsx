/* eslint-disable require-jsdoc */
import axios from "axios";
import { prominent } from "color.js";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { HomeCointainer } from "../../styles/components/home";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useTranslations } from "next-intl";
import SliderMenu from "../components/slider/slider";
import { useRouter } from "next/router";

const OpportunityCardStyle = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
    linear-gradient(
      rgba(${(props) => props.theme.main}, 0.9),
      rgba(${(props) => props.theme.main}, 0.9)
    ),
    url(${(props) => props.theme.image});
  background-size: cover;
  background-position: center;
`;
const SocialMediaLogo = styled.i`
  color: rgba(${(props) => props.theme.main}, 1);
  color: ${(props) =>
    props.theme.color == "toowhite" && "rgba(100, 100, 100, 1)"};
  color: ${(props) => props.theme.color == "tooblack" && "#bbbbbb"};
  filter: ${(props) => props.theme.color == "black" && "brightness(1.8)"};
  filter: ${(props) => props.theme.color == "mediumblack" && "brightness(2.3)"};
  filter: ${(props) => props.theme.color == "white" && "brightness(0.8)"};
`;

const OpportunityPage: NextPage = ({ post }: any) => {
  const router = useRouter();
  const { locale } = useRouter();
  const signIn = () => {
    // Hack until Next Auth JS Fixes locale forwarding
    if (locale == "en-US") {
      router.push(
        `/signin?callbackUrl=${process.env.NEXTAUTH_URL}/en-US${router.asPath}`
      );
    } else {
      router.push(
        `/signin?callbackUrl=${process.env.NEXTAUTH_URL}${router.asPath}`
      );
    }
  };
  const t = useTranslations("opportunity");
  const p = useTranslations("posts");
  const { data: session } = useSession();
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const daysBetween = (date: string, time: string) => {
    const dateArray = date.split("-");
    const timeArray = time.split(":");
    if (date === "00-00-00") {
      return NaN;
    }

    // date1 with dateArray and timeArray
    const date1 = new Date(
      parseInt(dateArray[0]),
      parseInt(dateArray[1]) - 1,
      parseInt(dateArray[2]),
      parseInt(timeArray[0]),
      parseInt(timeArray[1]),
      parseInt(timeArray[2])
    );

    // get the current date
    const date2 = new Date();

    // get the difference in days between the two dates, if d2 > d1 then it will return a negative number and if d1 > d2 then it will return a positive number
    const daysDifference = Math.ceil(
      ((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)) * -1
    );

    return daysDifference;
  };

  const timeLeft = daysBetween(
    post.posts.date ? post.posts.date[0] : "00-00-00",
    post.posts.date ? post.posts.date[1] : "00:00:00"
  );
  // console.log(timeLeft);

  useEffect(() => {
    setIsLoading(true);
    setClipborard(false);
    axios
      .post("https://futop.vercel.app/api/savepost", {
        session: session,
        postid: post.posts.id,
        check: true,
      })
      .then((res) => {
        setIsLoading(false);
        if (res.data.code == "300") {
          setIsSaved(true);
        } else {
          setIsSaved(false);
        }
      });
  }, [session, post.posts.id]);

  function handleSave() {
    setIsSaved(!isSaved);
    if (session) {
      axios
        .post("https://futop.vercel.app/api/savepost", {
          session: session,
          postid: post.posts.id,
          check: false,
        })
        .then((res) => {
          if (res.data.code == "200") {
            setIsSaved(true);
          } else {
            setIsSaved(false);
          }
        });
    } else {
      setIsSaved(false);
      signIn();
    }
  }

  const [colorr, setColor] = useState("");
  const [isClipboard, setClipborard] = useState(false);
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const clipboard = () => {
    setClipborard(false);
    timeout(1000);
    navigator.clipboard.writeText(`https://futop.ga${router.asPath}`);
    setClipborard(true);
  };

  useEffect(() => {
    if (session) {
      console.log("session");
      axios
        .post("https://futop.vercel.app/api/userinfo", { session: session })
        .then((res) => {
          console.log("result");
        });
    } else {
    }
  }, [session]);

  if (typeof window === "object") {
    prominent(
      `https://cors.jg-limamarinho202.workers.dev/?${post.posts.image}`,
      {
        amount: 7,
      }
    ).then((color: any) => {
      setColor(color[3].toString());
    });
  }
  function checkColor(color: string) {
    const brightness = Math.round(
      (parseInt(color.split(",")[0]) * 299 +
        parseInt(color.split(",")[1]) * 587 +
        parseInt(color.split(",")[2]) * 114) /
        1000
    );
    if (brightness > 235) {
      return "toowhite";
    } else if (brightness < 20) {
      return "tooblack";
    } else if (brightness < 50) {
      return "mediumblack";
    } else if (brightness > 100) {
      return "white";
    } else {
      return "black";
    }
  }

  const theme = {
    main: colorr,
    color: checkColor(colorr),
    image: post.posts.image,
  };
  const regex = /-/g;
  return (
    <HomeCointainer>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
        <meta charSet="UTF-8"></meta>
        <meta name="#fece2f"></meta>
        <title>{post.posts.title} - Futop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center flex-col dark:bg-[#161819] transition duration-300">
        <Navbar />
        <div className="w-full mt-[80px] h-auto flex flex-col justify-center items-center">
          <ThemeProvider theme={theme}>
            <OpportunityCardStyle className="bg-[#121314] px-5 lg:px-16 bg-gradient-to-b from-transparent to-black/40 w-[100vw] max-w-[100%] flex flex-col lg:items-start lg:justify-between items-center pt-16 pb-16">
              <div></div>
              <div className="w-full flex items-center lg:items-start flex-col">
                <img
                  loading="lazy"
                  src={
                    post.posts.logo ||
                    `https://avatars.dicebear.com/api/identicon/${post.posts.id}.svg`
                  }
                  className={`bg-center bg-cover bg-no-repeat w-28 h-28 lg:w-32 lg:h-32 bg-white ${
                    !post.posts.logo && "border-2"
                  } border-white rounded-full`}
                ></img>
                <div className="flex flex-col items-center lg:items-start mt-8 mb-7">
                  <h1 className="text-white text-3xl font-extrabold text-center mb-4">
                    {post.posts.title}
                  </h1>
                  <h3 className="text-white/50 text-sm text-center">
                    <span className={`${!isNaN(timeLeft) ? "font-bold" : ""}`}>
                      {!isNaN(timeLeft)
                        ? timeLeft < 0
                          ? `${timeLeft * -1} ${t("days")}`
                          : `${timeLeft} ${t("days")}`
                        : t("nodays")}
                    </span>{" "}
                    {!isNaN(timeLeft)
                      ? timeLeft < 0
                        ? t("ago")
                        : t("remaining")
                      : t("remaining")}{" "}
                    <span>
                      {post.posts.date != undefined
                        ? `(${post.posts.date[0].replace(regex, "/")} ${t(
                            "at"
                          )} ${post.posts.date[1].split(":")[0]}:${
                            post.posts.date[1].split(":")[1]
                          })`
                        : ""}
                    </span>
                  </h3>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-3">
                  {post.posts.tags.map((tag: any, index: number) => (
                    <div
                      key={index}
                      className="bg-white rounded-full px-9 py-3 "
                    >
                      <h3 className="text-sm font-medium">
                        {p(`${tag.trim()}`)}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </OpportunityCardStyle>
          </ThemeProvider>
        </div>
        <div className="flex flex-col mt-10 lg:mt-16 lg:flex-row-reverse items-start w-full px-[7%] lg:px-16 mb-16">
          <ThemeProvider theme={theme}>
            <div className="flex lg:flex-col gap-6 mb-10 items-center lg:mb-0 lg:ml-24 flex-wrap justify-center w-full lg:w-auto ">
              <div
                onClick={() => handleSave()}
                className="cursor-pointer w-16 h-16 drop-shadow-md flex justify-center items-center bg-[#f9f9f9] rounded-xl dark:bg-[#1e2022] transition-colors duration-300"
              >
                {isLoading ? (
                  <i className="animate-spin text-2xl bx bx-loader-alt text-black/50 dark:text-white/30"></i>
                ) : (
                  <SocialMediaLogo
                    className={`bx ${
                      isSaved ? "bxs-bookmark" : "bx-bookmark"
                    } text-3xl brightness-75 dark:brightness-130`}
                  />
                )}
              </div>
              {/* <div className="cursor-pointer w-16 h-16 drop-shadow-md flex justify-center items-center bg-[#f9f9f9] rounded-xl dark:bg-[#1e2022] transition-colors duration-300">
                <SocialMediaLogo className="bx bx-link text-[35px] brightness-75 dark:brightness-130" />
              </div> */}

              <div
                onClick={() => clipboard()}
                className="cursor-pointer w-16 h-16 drop-shadow-md flex justify-center items-center bg-[#f9f9f9] rounded-xl dark:bg-[#1e2022] transition-colors duration-300"
              >
                <SocialMediaLogo
                  className={`bx bx-${
                    isClipboard ? "check-circle" : "link"
                  } text-[35px] brightness-75 dark:brightness-130`}
                />
              </div>
              {post.posts.socialmedia && post.posts.socialmedia.google && (
                <Link href={post.posts.socialmedia.google} passHref>
                  <a
                    target="_blank"
                    className="cursor-pointer w-16 h-16 drop-shadow-md flex justify-center items-center bg-[#f9f9f9] rounded-xl dark:bg-[#1e2022] transition-colors duration-300"
                  >
                    <img
                      src="https://logopng.com.br/logos/google-37.png"
                      alt="Google"
                      className="w-[35px]"
                    />
                  </a>
                </Link>
              )}
              {post.posts.socialmedia && post.posts.socialmedia.facebook && (
                <Link href={post.posts.socialmedia.facebook} passHref>
                  <a
                    target="_blank"
                    className="cursor-pointer w-16 h-16 drop-shadow-md flex justify-center items-center bg-[#f9f9f9] rounded-xl dark:bg-[#1e2022] transition-colors duration-300"
                  >
                    <img
                      src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png"
                      alt="Facebook"
                      className="w-[37px]"
                    />
                  </a>
                </Link>
              )}
              {post.posts.socialmedia && post.posts.socialmedia.instagram && (
                <Link href={post.posts.socialmedia.instagram} passHref>
                  <a
                    target="_blank"
                    className="cursor-pointer w-16 h-16 drop-shadow-md flex justify-center items-center bg-[#f9f9f9] rounded-xl dark:bg-[#1e2022] transition-colors duration-300"
                  >
                    <img
                      src="/socialmedias/instagram.svg"
                      alt="Instgram"
                      className="w-[35px]"
                    />
                  </a>
                </Link>
              )}
            </div>
          </ThemeProvider>
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start w-full">
              {post.posts.texts != undefined && (
                <div className="mb-7 flex w-full items-center">
                  <h2 className="font-extrabold text-3xl whitespace-nowrap mr-6 dark:text-white">
                    {t("whatwedo")}
                  </h2>
                  <hr className="w-full border-1 dark:border-white/30 border-black/20" />
                </div>
              )}
              {post.posts.texts != undefined ? (
                post.posts.texts.map((description: any, index: number) => (
                  <p
                    key={index}
                    className="text-justify mb-5 text-black/50 dark:text-white/60 lg:leading-7"
                  >
                    {description}
                  </p>
                ))
              ) : (
                <div className="w-full min-h-20 dark:text-white flex justify-center items-center rounded-3xl bg-gray-200/[50%] dark:bg-black/20">
                  <h3 className="text-lg font-medium text-center py-6 px-3">
                    {t("nopost")}
                  </h3>
                </div>
              )}
            </div>
            <div className="flex flex-col items-start w-full mt-10 sm:mb-10">
              <div className="mb-10 flex w-full items-center">
                <h2 className="font-extrabold text-3xl sm:whitespace-nowrap mr-6 dark:text-white">
                  {t("maybeyoualsolike")}
                </h2>
                <hr className="w-full border-1 dark:border-white/30 border-black/20" />
              </div>
              <div className=" flex justify-start w-full">
                <SliderMenu
                  educationLevelSelected={post.posts.tags}
                  idpost={post.posts.id}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </HomeCointainer>
  );
};
export const getServerSideProps = async (context: any) => {
  const { opportunity } = context.params;
  const post = await axios.post(`https://futop.vercel.app/api/getpostbyid`, {
    opportunity: opportunity,
  });
  if (post.data.posts === null) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: post.data,
      messages: require(`../../locales/${context.locale}.json`),
    },
  };
};
export default OpportunityPage;
