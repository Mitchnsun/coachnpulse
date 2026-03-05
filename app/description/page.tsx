import React from "react";
import Image from "next/image";

import { siteMetadata } from "../../src/utils/site-metadata";

const DescriptionPage = () => {
  const { goals, sessions } = siteMetadata;
  return (
    <div className="overflow-hidden relative bg-black max-[1024px]:w-full">
      <div className="relative w-full max-w-[1024px] h-[600px]">
        <Image
          src="/img/running3.jpg"
          alt="Running illustration"
          fill
          style={{
            objectFit: 'cover',
            transform: 'scaleX(-1)',
          }}
        />
      </div>
      <article className="description-poster h-full text-right text-white uppercase absolute right-0 top-0 opacity-85 bg-blue">
        <div style={{ margin: "0 2rem 0 5rem" }}>
          <h2 className="text-[1.4rem] text-white">
            Programme sportif personnalisé adapté à votre niveau et vos objectifs
          </h2>
          <ul className="border-r-2 border-white pr-4 mr-12">
            {goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </div>
        <div style={{ margin: "0 2rem 0 5rem" }}>
          <h2 className="text-[1.4rem] text-white">
            Possibilité d&apos;accompagnement par des séances encadrées
          </h2>
          <p className="m-0 text-xs">(sur le terrain ou à domicile)</p>
          <ul className="border-r-2 border-white pr-4 mr-12">
            {sessions.map((session) => (
              <li key={session}>{session}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
};

export default DescriptionPage;
