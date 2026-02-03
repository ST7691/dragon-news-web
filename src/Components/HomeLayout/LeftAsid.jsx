import React, { Suspense } from "react";
import Catagory from "../../Pages/Catagory";
import Categorys from "../Categorys";

const LeftAsid = () => {
  return (
    <div>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Categorys></Categorys>
      </Suspense>
    </div>
  );
};

export default LeftAsid;
