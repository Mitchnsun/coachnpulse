import React from "react";
import Image from "next/image";

import Infos from "../../src/components/infos";

const CoachPage = () => {
  return (
    <>
      <div className="bg-black min-[800px]:flex min-[800px]:h-[300px] min-[800px]:items-center">
        <div className="relative overflow-hidden inline-block w-[250px] h-[300px] shrink-0">
          <Image
            src="/img/Luc-2025.jpeg"
            alt="Luc Nahon"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <article className="min-[800px]:ml-[15%] max-[800px]:mx-10 max-[800px]:py-4">
          <h1 className="m-0 text-white pb-3 font-normal uppercase tracking-[0.05rem] text-2xl">
            Luc Nahon
          </h1>
          <p className="text-yellow font-normal tracking-[0.1rem] m-0">
            Educateur sportif // Diplômé d&apos;Etat DEJEPS Triathlon
            <br />
            Entraîneur de triathlon, préparateur mental
            <br />
            Maître Nageur Sauveteur
          </p>
          <br />
          <p className="text-yellow font-normal tracking-[0.1rem] m-0">
            Entraîneur GUC (Grenoble Université Club) section triathlon
            <br />
            Responsable formation et enseignant Eklore-ed sport: running, diététique
            sportive, musculation, fitness...
            <br />
            Coaching de sportifs d&apos;ultra distance en sport d&apos;endurance
            <br />
            Finisher de plusieurs Ironman en Europe (Embrun, Zürich, Nice...)
          </p>
        </article>
      </div>
      <div className="flex flex-wrap bg-black">
        <div className="grow basis-[30%] relative min-h-[300px] max-[750px]:basis-1/2">
          <Image
            src="/img/running.jpg"
            alt="Running Illustration"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="grow basis-[30%] relative min-h-[300px] max-[750px]:basis-1/2">
          <Image
            src="/img/swimming.jpg"
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

export default CoachPage;
