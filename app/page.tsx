import React from 'react';
import Image from 'next/image';

import Infos from '@components/infos';

const Home = () => {
  return (
    <>
      <div className="flex items-center bg-black">
        <div className="relative min-h-100 grow basis-[30%]">
          <Image
            src="/img/running3.jpg"
            alt="Running illustration"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="relative mx-[15%] min-h-75 grow-2 basis-[30%]">
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
        <div className="relative min-h-75 grow basis-[30%] max-[750px]:basis-1/2">
          <Image
            src="/img/running2.jpg"
            alt="Running Illustration"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="relative min-h-75 grow basis-[30%] max-[750px]:basis-1/2">
          <Image
            src="/img/swimming2.jpg"
            alt="Swimming Illustration"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="relative min-h-75 grow basis-[30%] max-[750px]:basis-1/2">
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
