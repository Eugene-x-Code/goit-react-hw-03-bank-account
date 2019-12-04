import React from 'react';
import PropTypes from 'prop-types';
import css from './transactionHistory.module.scss';

const TransactionHistory = ({ transactions }) =>
  transactions.length > 0 ? (
    <table className={css.history}>
      <thead>
        <tr>
          <th>Transaction</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, date }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}$</td>
            <td>{date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p className={css.noHistory}>No History Yet</p>
  );

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory;
