import React from "react";
import Kruti from "./Kruti";
import { KrutiPRo } from "../utils/KrutisData.json";

function Krutis() {
  return (
    <div className="grid mx-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center cursor-pointer">
      {KrutiPRo.map((item, idx) => {
        return <Kruti urls={item.url} Title={item.name} key={idx} />;
      })}
    </div>
  );
}

export default Krutis;
