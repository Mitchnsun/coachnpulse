import { PRICES } from '@data/prices';

const TablePrices = () => (
  <table className="w-full max-w-125 border-collapse border-2 border-white text-center align-middle text-[0.9rem]">
    <thead className="bg-white text-black">
      <tr>
        <th className="border-r-2 border-white px-4 py-2 first:border-r-0 first:bg-black first:text-white"></th>
        <th className="border-r-2 border-white px-4 py-2 first:border-r-0 first:bg-black first:text-white">
          Forfait
        </th>
      </tr>
    </thead>
    <tbody>
      {PRICES.map((price) => (
        <tr key={price.label}>
          <td className="border-r-2 border-b-2 border-white px-4 py-2 text-white first:border-r-0 first:bg-white first:font-bold first:text-black">
            {price.label}
          </td>
          <td className="border-r-2 border-b-2 border-white px-4 py-2 text-white first:border-r-0 first:bg-white first:font-bold first:text-black">
            {price.price}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TablePrices;
