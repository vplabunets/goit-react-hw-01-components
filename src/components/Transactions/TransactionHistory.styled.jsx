import styled from 'styled-components';

export const TransactionTable = styled.table`
  font-size: 14px;
  margin: 0 auto;
  border: 0.1px inset gray;
  text-align: center;
  border-spacing: 0;
`;

export const TransactionTableHead = styled.thead`
  background-color: gray;
  text-transform: uppercase;
`;

export const TransactionHead = styled.th`
  padding: 5px;
  border: 0.1px inset gray;
`;

export const TransactionBodyLine = styled.tr`
  border: 0.1px inset gray;
  &:nth-child(2n) {
    border: 0.1px inset gray;
    background-color: #daf7ee;
  }
`;

export const TransactionBodyСolumn = styled.td`
  text-transform: capitalize;
  border: 0.1px inset gray;
  width: 200px;
  padding: 5px;
`;
