import React from "react";
import Image from "next/image";

import Infos from "../src/components/infos";

const Home = () => {
  return (
    <>
      <div className="flex bg-black items-center">
        <div className="grow basis-[30%] relative min-h-[400px]">
          <Image
            src="/img/running3.jpg"
            alt="Running illustration"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="grow-[2] basis-[30%] mx-[15%] relative min-h-[300px]">
          <Image
            src="/img/blacklogo.jpg"
            alt="Black logo illustration"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
      <div className="flex flex-wrap bg-black">
        <div className="grow basis-[30%] relative min-h-[300px] max-[750px]:basis-1/2">
          <Image
            src="/img/running2.jpg"
            alt="Running Illustration"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="grow basis-[30%] relative min-h-[300px] max-[750px]:basis-1/2">
          <Image
            src="/img/swimming2.jpg"
            alt="Swimming Illustration"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="grow basis-[30%] relative min-h-[300px] max-[750px]:basis-1/2">
          <Image
            src="/img/cycling2.jpg"
            alt="Cycling Illustration"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <Infos />
    </>
  );
};

export default Home;
