import React from 'react';
import PropTypes from 'prop-types';
import balanceCalculator from '../../../Utils/balanceCalculator';
import css from './balance.module.scss';

const Balance = ({ transactions, balance }) => (
  <section className={css.balance}>
    <span>⬆{balanceCalculator(transactions, 'deposit')}$</span>
    <span>⬇{balanceCalculator(transactions, 'withdraw')}$</span>
    <span>Balance: {balance}$</span>
  </section>
);

Balance.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.any).isRequired,
  balance: PropTypes.number.isRequired,
};

export default Balance;
