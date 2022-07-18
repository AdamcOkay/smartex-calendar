import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  margin: 1rem 0 1.5rem;
  border: none;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  tr {
    border-bottom: 1px solid rgb(var(--clr-blue-500));
  }
`;

export const Tbody = styled.tbody`
  margin-top: 1rem;

  td {
    padding: 0.25rem;
  }

  tr:nth-child(even) {
    background-color: rgba(var(--clr-blue-300), 0.5);
  }

  tr:nth-child(1) {
    td {
      padding-top: 0.5rem;
    }
  }
`;

export const Th = styled.th`
  padding-bottom: 0.5rem;
  font-weight: 700;
  color: rgba(var(--clr-blue-500), 0.5);
`;

export const Td = styled.td`
  text-align: center;
`;
