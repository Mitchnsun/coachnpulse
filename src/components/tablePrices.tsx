import { PRICES } from '@data/prices';

const TablePrices = () => (
  <div className="rounded-[2px] bg-white px-[clamp(20px,2.6cqw,36px)] py-2">
    <table className="w-full">
      <thead>
        <tr className="border-line text-muted border-b text-[13px] tracking-[.16em] uppercase">
          <th className="py-3.5 text-left font-semibold">Durée</th>
          <th className="py-3.5 text-right font-semibold">Forfait</th>
        </tr>
      </thead>
      <tbody>
        {PRICES.map(({ label, price }) => (
          <tr key={label} className="border-line-light border-b last:border-b-0">
            <td className="py-5 pr-4 align-baseline font-medium">{label}</td>
            <td className="font-condensed py-5 text-right align-baseline text-[clamp(28px,2.4cqw,34px)] leading-none font-bold">
              {price}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TablePrices;
