import PropTypes from 'prop-types';

import {
  TransactionTable,
  TransactionTableHead,
  TransactionHead,
} from './TransactionHistory.styled';
import { TransactionItem } from './TransactionItem';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <TransactionTableHead>
        <tr>
          <TransactionHead>Type</TransactionHead>
          <TransactionHead>Amount</TransactionHead>
          <TransactionHead>Currency</TransactionHead>
        </tr>
      </TransactionTableHead>

      <tbody>
        <TransactionItem transactions={transactions} />
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
