/* eslint-disable react/jsx-no-undef */
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import MyDropdown from "./languageSwitcher";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("navbar");
  const router = useRouter();

  const [isDark, setIsDark]: any = React.useState("light");

  useEffect(() => {
    setIsDark(localStorage.theme);
  }, []);

  const handleThemeChange = () => {
    if (typeof window === "object") {
      if (isDark == "dark") {
        setIsDark("light");
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      } else {
        setIsDark("dark");
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      }
    }
  };

  // console.log(router.pathname);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="bg-white dark:bg-[#1e2022] transition duration-300 drop-shadow-md dark:border-b-2 dark:border-gray-200/[5%] w-full min-h-[5rem] h-20 fixed z-30 flex justify-center ">
        <div className="flex justify-between h-full items-center w-[90%] lg:px-0 lg:w-[80%]">
          <div className="text-black dark:text-white font-bold text-2xl w-[128px] min-w-[128px]">
            <a href="../home">LOGO</a>
          </div>
          <div className=" mx-24 w-full max-w-[600px] hidden lg:flex">
            <ul className="flex justify-between w-full dark:text-white">
              <li className="text-sm">
                <Link href="/home">
                  <a
                    className={`${
                      router.pathname == "/home" &&
                      "font-bold dark:text-[#ffc700] rounded-full"
                    }`}
                  >
                    {t("home")}
                  </a>
                </Link>
              </li>
              <li className="text-sm">
                <Link href="/">
                  <a
                    className={`${
                      router.pathname == "/" &&
                      "font-bold dark:text-[#ffc700] rounded-full"
                    }`}
                  >
                    {t("opportunity")}
                  </a>
                </Link>
              </li>
              <li className="text-sm">
                <Link href="/suggestions">
                  <a
                    className={`${
                      router.pathname == "/suggestions" &&
                      "font-bold dark:text-[#ffc700] rounded-full"
                    }`}
                  >
                    {t("contact")}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden justify-center items-center lg:flex">
            <MyDropdown isIcon={true} />
            <i
              onClick={() => handleThemeChange()}
              className="bx bxs-sun cursor-pointer text-2xl text-[#cccccc] mr-5 "
            ></i>
            <button className="w-10 h-10 bg-[#f5f6f5] rounded-full"></button>
          </div>
          <div
            className="flex justify-center items-center lg:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <i className="bx bx-x text-[40px] dark:text-white"></i>
            ) : (
              <i className="bx bx-menu text-[35px] dark:text-white"></i>
            )}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
              // transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="bg-black/30 fixed w-[100vw] h-[100vh] top-0 left-0 z-[28] flex lg:hidden "
            ></motion.div>
            <motion.div
              // initial={{ width: 0, originX: 1 }}
              // animate={{ width: 280, originX: 1 }}
              // exit={{ width: 0, originX: 1 }}
              initial={{ x: 280 }}
              animate={{ x: 0 }}
              exit={{ x: 280 }}
              transition={{ duration: 0.2 }}
              className={`will-change-contents z-[29] overflow-auto flex lg:hidden w-[280px] fixed bg-white dark:bg-[#1e2022] transition duration-300 bottom-0 top-0 right-0 h-[100vh] max-h-[100%] drop-shadow-md flex-col justify-start items-center pt-[80px]`}
            >
              <div className="flex w-full h-full flex-col justify-between items-center">
                <div className="flex w-full flex-col justify-start items-center divide-y mb-[80px] dark:divide-white/10">
                  <Link href="/home">
                    <div className="cursor-pointer bg-white dark:bg-[#1e2022] w-full h-20 flex justify-center items-center transition-all duration-300 hover:bg-slate-500/10">
                      <h4
                        className={`${router.pathname == "/home" && "font-bold"}
                       text-[15px] text-slate-600 dark:text-gray-300`}
                      >
                        {t("home")}
                      </h4>
                    </div>
                  </Link>
                  <Link href="/">
                    <div className="cursor-pointer bg-white dark:bg-[#1e2022] w-full h-20 flex justify-center items-center transition-all duration-300 hover:bg-slate-500/10">
                      <h4
                        className={`${router.pathname == "/" && "font-bold"}
                      text-[15px] text-slate-600 dark:text-gray-300`}
                      >
                        {t("opportunity")}
                      </h4>
                    </div>
                  </Link>
                  <Link href="/suggestions">
                    <div className="cursor-pointer bg-white dark:bg-[#1e2022] w-full h-20 flex justify-center items-center transition-all duration-300 hover:bg-slate-500/10">
                      <h4
                        className={`${
                          router.pathname == "/suggestions" && "font-bold"
                        }
                       text-[15px] text-slate-600 dark:text-gray-300`}
                      >
                        {t("contact")}
                      </h4>
                    </div>
                  </Link>
                  <div className="w-full h-0 transition duration-300"></div>
                </div>

                <div className="cursor-pointer flex w-full flex-col-reverse justify-start items-center divide-y dark:divide-white/10">
                  <div className="w-full h-0"></div>
                  <MyDropdown isIcon={false} />
                  <div className="cursor-pointer bg-white dark:bg-[#1e2022] w-full h-20 flex justify-between px-4 items-center transition-all hover:bg-slate-500/10">
                    <div className="flex items-center h-auto ">
                      <button className=" w-10 h-10 bg-gray-100  rounded-full drop-shadow-sm"></button>
                      <div>
                        <h4 className="text-xs ml-3 dark:text-gray-300">
                          {t("singup1")} <br />
                          {t("singup2")}
                        </h4>
                      </div>
                    </div>
                    <div className="bg-gray-50/100 cursor-pointer drop-shadow-sm w-10 h-10 flex justify-center items-center rounded-lg">
                      <i
                        onClick={() => handleThemeChange()}
                        className="bx bxs-sun text-2xl text-slate-500"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
