import PropTypes from 'prop-types';
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

TransactionItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
