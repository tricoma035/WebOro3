import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const Th = styled.th`
  background: #ffd700;
  color: #1a2236;
  padding: 0.7rem;
  font-weight: 700;
`;

const Td = styled.td`
  padding: 0.7rem;
  border-bottom: 1px solid #f4f6fa;
  text-align: center;
`;

const Status = styled.span`
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  font-weight: 700;
  color: #fff;
  background: ${({ status }) => (status === "Efectuada" ? "#1a8f3a" : "#c0392b")};
`;

const mockTransactions = [
  {
    type: "Inversión",
    gold: "50 g",
    usd: "$3100",
    date: "2024-04-10",
    status: "Efectuada",
  },
  {
    type: "Retiro",
    gold: "10 g",
    usd: "$620",
    date: "2024-03-15",
    status: "Pendiente",
  },
  {
    type: "Inversión",
    gold: "20 g",
    usd: "$1240",
    date: "2024-02-01",
    status: "Efectuada",
  },
];

function TransactionList() {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Inversión o Retiro</Th>
          <Th>Cantidad de oro</Th>
          <Th>Valor en dólares</Th>
          <Th>Fecha</Th>
          <Th>Estado</Th>
        </tr>
      </thead>
      <tbody>
        {mockTransactions.map((tx, idx) => (
          <tr key={idx}>
            <Td>{tx.type}</Td>
            <Td>{tx.gold}</Td>
            <Td>{tx.usd}</Td>
            <Td>{tx.date}</Td>
            <Td>
              <Status status={tx.status}>{tx.status}</Status>
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TransactionList;