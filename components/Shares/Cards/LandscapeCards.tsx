import React from "react";
import LandscapeCard from "./LandscapeCard";

const LandscapeCards = ({ properties }: any) => {
  return (
    <div className="gap-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 my-10">
      {properties?.slice(0, 6).map((property: any, index: any) => {
        return <LandscapeCard key={index} property={property} />;
      })}
    </div>
  );
};

export default LandscapeCards;
