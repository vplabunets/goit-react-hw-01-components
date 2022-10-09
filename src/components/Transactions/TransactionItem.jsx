import {
  TransactionBodyLine,
  TransactionBodyСolumn,
} from './TransactionHistory.styled';

export const TransactionItem = ({ transactions }) => {
  return transactions.map(({ id, type, amount, currency }) => (
    <TransactionBodyLine key={id}>
      <TransactionBodyСolumn>{type}</TransactionBodyСolumn>
      <TransactionBodyСolumn>{amount}</TransactionBodyСolumn>
      <TransactionBodyСolumn>{currency}</TransactionBodyСolumn>
    </TransactionBodyLine>
  ));
};
