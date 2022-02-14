/* eslint-disable require-jsdoc */
import axios from "axios";
import Link from "next/link";

import React from "react";
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
  await axios.get(url).then(async (res) => {
    return res.data;
  });
const SliderMenu = ({ idpost, educationLevelSelected }: any) => {
  function filterOpportunities(opportunities: any, type2: string, id: string) {
    if (type2 === "Níveis de Escolaridade") {
      type2 = "";
    } else {
      return opportunities.filter((opportunity: any) => {
        if (
          opportunity.tags.some(
            (tag: any) => tag.trim().toLowerCase() == type2.trim().toLowerCase()
          )
        ) {
          return !opportunity.id.includes(id);
        } else {
          return null;
        }
      });
    }
  }

  const { data, error } = useSWR(
    "https://futop.vercel.app/api/getposts",
    fetcher
  );
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center w-full min-h-28">
        <i className="bx bx-error text-[70px] dark:text-white mb-2"></i>
        <h2 className="text-center text-black/90 dark:text-white font-semibold text-xl">
          Error ao carregar sugestões
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

  const filteredOpportunities = filterOpportunities(
    data.posts,
    educationLevelSelected[1],
    idpost
  ).reverse();
  if (filteredOpportunities.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center w-full min-h-28">
        <h2 className="text-center text-black/90 dark:text-white font-medium text-lg">
          Não há sugestões para este nível de escolaridade
        </h2>
        <Link href="/#searchbar">
          <button className="dark:bg-white bg-black/90 dark:text-black text-white min-w-[200px] px-10 py-4 mt-4 rounded-full text-base font-medium">
            Voltar para o início
          </button>
        </Link>
      </div>
    );
  }

  return (
    <SliderMenuStyle className="gridSlider">
      {filteredOpportunities.map((posts: any) => (
        <OpportunityCard
          first={false}
          key={posts.id}
          id={posts.id}
          title={posts.title}
          tags={posts.tags}
          image={posts.image}
          time={posts.date || ["0", "0"]}
        />
      ))}
      <Link href={"/opportunities"}>
        <div className="dark:hover:bg-[#1b1c1f] hover:bg-[#f1f1f1] cursor-pointer bg-transparent border-4 border-[#cfcfcf]/60 dark:border-[#292b2e] rounded-3xl max-h-[150px] flex justify-center items-center flex-col">
          <div className="w-8 h-8 rounded-full bg-transparent border-2 mb-2 border-black/70 dark:border-white/80 flex justify-center items-center">
            <i className="bx bx-dots-horizontal-rounded dark:text-white text-xl"></i>
          </div>
          <h4 className="dark:text-white font-medium text-base">Ver mais</h4>
        </div>
      </Link>
    </SliderMenuStyle>
  );
};

export default SliderMenu;
