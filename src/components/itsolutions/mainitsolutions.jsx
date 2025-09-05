import React from "react";
import ItSolutions from "../../components/itsolutions/itsolutions";
import { itsolutionsData } from "../../data/portfolio";
import HeadersSection from "../headers/headers";

const MainItsolutions = () => {
  return (
    <div className="flex flex-col gap-10">
      <HeadersSection
        headingText="IT Solutions"
        paragraphText="IT Solutions Tailored for Your Business Needs"
      />
      <div className="flex w-full z-40 items-center justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 lg:gap-2">
          {itsolutionsData.map((product) => (
            <div key={product.id}>
              <ItSolutions
                svg={product.svg}
                headtext={product.headtext}
                detail={product.detail}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainItsolutions;
