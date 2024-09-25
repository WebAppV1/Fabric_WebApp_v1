import React from "react";
import Kruti from "./Kruti";
import { KrutiPRo } from "../utils/KrutisData.json";
function Krutis() {
  // const krutisName = [
  //   "Designer Kruti",
  //   "Denim Kruti",
  //   "Printed Kruti",
  //   "Party Kruti",
  //   "Embroidery kruti",
  //   "cotton kruuti",
  // ];
  console.log(KrutiPRo);
  return (
    <div className="grid mx-8 grid-cols-4 gap-4 justify-center">
      {KrutiPRo.map((item, idx) => {
        return <Kruti urls={item.url} Title={item.name} key={idx} />;
      })}
    </div>
  );
}

export default Krutis;
