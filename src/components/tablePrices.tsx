import React from 'react';
import { PRICES } from '../data/prices';

const TablePrices = () => (
  <table className="w-full max-w-[500px] border-2 border-white border-collapse text-center align-middle text-[0.9rem]">
    <thead className="bg-white text-black">
      <tr>
        <th className="border-r-2 border-white px-4 py-2 first:bg-black first:text-white first:border-r-0"></th>
        <th className="border-r-2 border-white px-4 py-2 first:bg-black first:text-white first:border-r-0">
          Forfait
        </th>
      </tr>
    </thead>
    <tbody>
      {PRICES.map(price => (
        <tr key={price.label}>
          <td className="border-r-2 border-b-2 border-white text-white px-4 py-2 first:font-bold first:bg-white first:text-black first:border-r-0">
            {price.label}
          </td>
          <td className="border-r-2 border-b-2 border-white text-white px-4 py-2 first:font-bold first:bg-white first:text-black first:border-r-0">
            {price.price}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TablePrices;
