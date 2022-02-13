/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { signIn, signOut, useSession } from "next-auth/react";

export default function UserProfile({ mobile }: any) {
  const t = useTranslations("navbar");
  const { locales, locale, pathname, query, asPath } = useRouter();
  const otherLocales = locales;
  const { data: session } = useSession();
  return (
    <div className="">
      <Menu as="div" className="relative text-left w-10 h-10 min-w-10 min-h-10">
        <div>
          <Menu.Button className="flex justify-center w-10 h-10 min-w-10 min-h-10">
            <img
              src={`${
                session?.user?.image !== undefined
                  ? session?.user?.image
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png"
              }`}
              className="cursor-pointer w-10 h-10 min-w-10 min-h-10 bg-[#f5f6f5] dark:bg-[#161819] rounded-full"
            ></img>
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
            className={`absolute ${
              mobile
                ? !session
                  ? "top-[-60px] origin-bottom-left "
                  : "origin-bottom-left top-[-100px]"
                : "right-[-45px] origin-top-right "
            }  w-[150px] mt-2 bg-white dark:bg-[#1e2022] divide-y divide-gray-100 dark:divide-gray-100/10 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            {!session ? (
              <>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-[#ffc700] text-black font-semibold"
                            : "text-gray-900 dark:text-white"
                        } group flex rounded-md items-center justify-center w-full px-2 py-2 text-sm`}
                        onClick={() => signIn()}
                      >
                        Faça Login
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </>
            ) : (
              <>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-[#ffc700] text-black font-semibold"
                            : "text-gray-900 dark:text-white"
                        } group flex rounded-md items-center justify-center w-full px-2 py-2 text-sm`}
                      >
                        Meu perfil
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-[#ffc700] text-black font-semibold"
                            : "text-gray-900 dark:text-white"
                        } group flex rounded-md items-center justify-center w-full px-2 py-2 text-sm`}
                        onClick={() => signOut()}
                      >
                        Sair
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
