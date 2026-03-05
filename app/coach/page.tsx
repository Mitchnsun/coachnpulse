import React from 'react';
import Image from 'next/image';

import Infos from '@components/infos';

const CoachPage = () => {
  return (
    <>
      <div className="bg-black md:flex md:h-75 md:items-center">
        <div className="relative inline-block h-75 w-62.5 shrink-0 overflow-hidden">
          <Image src="/img/Luc-2025.jpeg" alt="Luc Nahon" fill style={{ objectFit: 'cover' }} />
        </div>
        <article className="max-[800px]:mx-10 max-[800px]:py-4 md:ml-[15%]">
          <h1 className="m-0 pb-3 text-2xl font-normal tracking-[0.05rem] text-white uppercase">
            Luc Nahon
          </h1>
          <p className="text-yellow m-0 font-normal tracking-[0.1rem]">
            Educateur sportif // Diplômé d&apos;Etat DEJEPS Triathlon
            <br />
            Entraîneur de triathlon, préparateur mental
            <br />
            Maître Nageur Sauveteur
          </p>
          <br />
          <p className="text-yellow m-0 font-normal tracking-[0.1rem]">
            Entraîneur GUC (Grenoble Université Club) section triathlon
            <br />
            Responsable formation et enseignant Eklore-ed sport: running, diététique sportive,
            musculation, fitness...
            <br />
            Coaching de sportifs d&apos;ultra distance en sport d&apos;endurance
            <br />
            Finisher de plusieurs Ironman en Europe (Embrun, Zürich, Nice...)
          </p>
        </article>
      </div>
      <div className="flex flex-wrap bg-black">
        <div className="relative min-h-75 grow basis-[30%] max-[750px]:basis-1/2">
          <Image
            src="/img/running.jpg"
            alt="Running Illustration"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="relative min-h-75 grow basis-[30%] max-[750px]:basis-1/2">
          <Image
            src="/img/swimming.jpg"
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

export default CoachPage;
