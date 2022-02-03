/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function MyDropdown({ isIcon, setIsOpen }: any) {
  const t = useTranslations("navbar");
  const { locales, locale, pathname, query, asPath } = useRouter();
  const otherLocales = locales?.filter((l) => l !== locale);
  return (
    <div className={`${!isIcon ? "w-full h-auto" : ""}`}>
      <Menu as="div" className={`relative inline-block ${!isIcon && "w-full"}`}>
        <div className={`${!isIcon && "w-full"}`}>
          <Menu.Button
            className={`${
              !isIcon
                ? "bg-white w-full h-20 inline-flex justify-center items-center transition-all hover:bg-slate-500/10"
                : "inline-flex justify-center w-full"
            } `}
          >
            {isIcon ? (
              <i className="bx bx-flag text-2xl text-[#cccccc] mr-5 "></i>
            ) : (
              t("language")
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute right-0 ${
              isIcon ? "" : "bottom-[3.25rem] right-[70px] "
            } w-32 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            {otherLocales?.map((locale) => {
              return (
                <div className="px-1 py-1 " key={locale}>
                  <Menu.Item key={locale}>
                    {({ active }) => (
                      <button
                        className={`hover:bg-[#ffc700] hover:font-semibold text-gray-900 group flex rounded-md items-center w-full text-sm ${
                          !isIcon && "justify-center"
                        }`}
                      >
                        <Link
                          key={locale}
                          href={{ pathname, query }}
                          as={asPath}
                          scroll={false}
                          locale={locale}

                          //
                        >
                          <a className="w-full h-full py-2">{locale}</a>
                        </Link>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
