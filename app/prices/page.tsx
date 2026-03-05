import React from "react";
import Image from "next/image";

import TablePrices from "../../src/components/tablePrices";

const PricesPage = () => {
  return (
    <>
      <div className="min-[950px]:flex">
        <section className="p-4 bg-black [flex-grow:5]">
          <h2 className="m-0 text-white font-normal uppercase tracking-[0.05rem] text-2xl">
            Tarifs pour programme à distance
          </h2>
          <p className="text-yellow my-4">
            Exemples de tarifs forfaitaires programme d&apos;entraînement
          </p>
          <TablePrices />
          <p className="text-yellow my-4">
            Les conseils (techniques, diététiques, matériels) sont inclus dans
            votre progression et l&apos;accompagnement sportif.
          </p>
        </section>
        <section className="p-4 bg-blue basis-[30%]">
          <h2 className="m-0 text-white font-normal uppercase tracking-[0.05rem] text-2xl">
            Possibilité de séances encadrées
          </h2>
          <p className="text-white font-normal tracking-[0.1rem]">
            Sur le terrain ou à domicile (course à pied, natation, vélo,
            préparation physique) <strong>35€/h</strong>
          </p>
          <h2 className="m-0 text-white font-normal uppercase tracking-[0.05rem] text-2xl">
            Forfaits séances
          </h2>
          <ul className="text-white">
            <li className="list-disc list-outside">3 séances: 95€</li>
            <li className="list-disc list-outside">10 séances: 285€</li>
            <li className="list-disc list-outside">
              Plus de 20 kms autour de l&apos;agglomération grenobloise: 0,50€/km
            </li>
            <li className="list-disc list-outside">
              Possibilité d&apos;un bilan spécifique complet diététique: 80€
            </li>
          </ul>
          <h2 className="m-0 text-white font-normal uppercase tracking-[0.05rem] text-2xl">
            Coaching et préparation mentale
          </h2>
          <p className="text-white font-normal tracking-[0.1rem]">
            En présentiel: <strong>60€/h</strong>
          </p>
          <ul className="text-white">
            <li className="list-disc list-outside">Forfait 5 séances: 240€</li>
          </ul>
          <p className="text-white font-normal tracking-[0.1rem]">
            En visio: <strong>40€/h</strong>
          </p>
          <ul className="text-white">
            <li className="list-disc list-outside">Forfait 5 séances: 160€</li>
          </ul>
        </section>
      </div>
      <div className="flex flex-wrap bg-black">
        <div className="grow basis-[30%] relative min-h-[300px] max-[750px]:basis-1/2">
          <Image
            src="/img/swimming2.jpg"
            alt="Running Illustration"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="grow basis-[30%] relative min-h-[300px] max-[750px]:basis-1/2">
          <Image
            src="/img/cycling.jpg"
            alt="Swimming Illustration"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="grow basis-[30%] relative min-h-[300px] max-[750px]:basis-1/2">
          <Image
            src="/img/running5.jpg"
            alt="Cycling Illustration"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </>
  );
};

export default PricesPage;
