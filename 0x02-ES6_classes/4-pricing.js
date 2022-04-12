/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing extends Currency {
  constructor(amount, number) {
    super();
    this.amount = amount;
    this.number = number;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get number() {
    return this._number;
  }

  set number(value) {
    this._number = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.name} (${this.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
