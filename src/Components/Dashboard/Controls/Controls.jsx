import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './controls.module.scss';

class Controls extends Component {
  state = { input: '' };

  static propTypes = {
    createTransaction: PropTypes.func.isRequired,
  };

  onInputChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    const { createTransaction } = this.props;
    const { input } = this.state;
    return (
      <section className={css.controls}>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="number"
            name="amount"
            onChange={e => this.onInputChange(e)}
          />
          <button
            type="button"
            name="deposit"
            onClick={e => createTransaction(e.target, input)}
          >
            Deposit
          </button>
          <button
            type="button"
            name="withdraw"
            onClick={e => createTransaction(e.target, input)}
          >
            Withdraw
          </button>
        </form>
      </section>
    );
  }
}

export default Controls;
