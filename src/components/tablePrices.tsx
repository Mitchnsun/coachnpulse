import React from 'react';
import styled from 'styled-components';

import { PRICES } from '../data/prices';
import { WHITE, BLACK } from '../utils/colors';

const Table = styled.table`
  width: 100%;
  border: 2px solid ${WHITE};
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  text-align: center;
  vertical-align: middle;
  font-size: 0.9rem;
`;

const Thead = styled.thead`
  background: ${WHITE};
  color: ${BLACK};
`;

const Th = styled.th`
  border-right: 2px solid ${WHITE};
  padding: 0.5rem 1rem;
  &:first-child {
    background-color: ${BLACK};
    color: ${WHITE};
    border-right: 0;
  }
`;

const Td = styled.td`
  border-right: 2px solid ${WHITE};
  border-bottom: 2px solid ${WHITE};
  color: ${WHITE};
  padding: 0.5rem 1rem;
  &:first-child {
    font-weight: bold;
    background-color: ${WHITE};
    color: ${BLACK};
    border-right: 0;
  }
`;

const TablePrices = () => (
  <Table>
    <Thead>
      <tr>
        <Th>Forfait</Th>
        <Th>
          Niveau "forme" <br /> (jusqu'à 3 séances/semaine)
        </Th>
        <Th>
          Niveau "performance" <br /> (au-delà de 3 séances par semaine)
        </Th>
      </tr>
    </Thead>
    <tbody>
      {PRICES.map(price => (
        <tr key={price.label}>
          <Td>{price.label}</Td>
          <Td>{price.fitness}</Td>
          <Td>{price.perf}</Td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default TablePrices;
