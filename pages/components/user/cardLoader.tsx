/* eslint-disable require-jsdoc */
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import OpportunityCard from "../opportunityCard";

const SliderMenuStyle = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: minmax(250px, auto);
  @media (max-width: 410px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;
const fetcher = async (url: any) =>
  await axios
    .post(url, { token: process.env.NEXT_PUBLIC_DBTOKEN })
    .then(async (res) => {
      return res.data;
    });
const FavoritePosts = ({ posts }: any) => {
  const t = useTranslations("myprofile");

  // Return the ids of user favorite array that are not in the current posts array
  const getRemovedIds = (userFavorites: any, currentPosts: any) => {
    const removedIds: any = [];
    userFavorites.forEach((favorite: any) => {
      if (!currentPosts.some((post: any) => post.id === favorite)) {
        removedIds.push(favorite);
      }
    });
    removedIds.map((item: string) => {
      axios.post("/api/savepost", {
        token: process.env.NEXT_PUBLIC_DBTOKEN,
        postid: item,
        session: session,
        check: false,
        remove: true,
      });
    });
  };

  const filterPosts = (posts: any, favorites: any) => {
    return posts.filter((post: any) => {
      return favorites.includes(post.id);
    });
  };
  const [isDeleted, setIsDeleted] = React.useState("true");
  const { data: session } = useSession();
  const [userData, setUserData] = useState(posts);
  const { data, error } = useSWR("/api/getposts", fetcher);

  useEffect(() => {
    if (isDeleted == "true") {
      if (session) {
        axios
          .post("/api/userinfo", {
            token: process.env.NEXT_PUBLIC_DBTOKEN,
            session: session,
          })
          .then((res) => {
            console.log(res.data.user.favorites);
            setUserData(res.data.user.favorites);
            if (data) {
              getRemovedIds(res.data.user.favorites, data.posts);
            }
          });
        // setIsDeleted("false");
      } else {
      }
    } else if (isDeleted == "false") {
    } else {
      // remove the isDeleted id from the userData array
      const newUserData = userData.filter((id: any) => {
        return id != isDeleted;
      });
      setUserData(newUserData);
    }
  }, [isDeleted, session, data]);
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center w-full min-h-28">
        <i className="bx bx-error text-[70px] dark:text-white mb-2"></i>
        <h2 className="text-center text-black/90 dark:text-white font-semibold text-xl">
          {t("error")}
        </h2>
        <h3 className="mt-1 dark:text-white/50 text-black/40 ">
          Error: {error.message}
        </h3>
      </div>
    );
  }
  if (!data) {
    return (
      <SliderMenuStyle className="gridSlider">
        <div className="flex justify-center items-center rounded-xl animate-pulse text-white font-medium bg-gray-200 dark:bg-[#1e2022]  w-full h-full"></div>
        <div className="flex justify-center items-center rounded-xl animate-pulse text-white font-medium bg-gray-200 dark:bg-[#1e2022]  w-full h-full"></div>
        <div className="flex justify-center items-center rounded-xl animate-pulse text-white font-medium bg-gray-200 dark:bg-[#1e2022]  w-full h-full"></div>
      </SliderMenuStyle>
    );
  }
  const filteredOpportunities = filterPosts(data.posts, userData).reverse();
  if (filteredOpportunities.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center w-full min-h-28 bg-gray-100 dark:bg-[#1e2022] py-10 rounded-3xl">
        <h2 className="text-center text-black/90 dark:text-white font-medium text-lg">
          {t("nofavorites")}
        </h2>
        <Link href="/opportunities#searchbar">
          <button className="dark:bg-white bg-black/90 dark:text-black text-white min-w-[200px] px-10 py-4 mt-4 rounded-full text-base font-medium">
            {t("gohome")}
          </button>
        </Link>
      </div>
    );
  }

  return (
    <SliderMenuStyle className={`gridSlider`}>
      {filteredOpportunities.map((posts: any) => (
        <OpportunityCard
          first={false}
          key={posts.id}
          id={posts.id}
          title={posts.title}
          tags={posts.tags}
          image={posts.image}
          isfavorite={true}
          mutate={setIsDeleted}
          time={posts.date || ["0", "0"]}
        />
      ))}
    </SliderMenuStyle>
  );
};

export default FavoritePosts;
