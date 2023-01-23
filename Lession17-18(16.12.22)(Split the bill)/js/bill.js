/* bill.js */

export default class Bill {
  constructor() {
    this.amounts = [];
  }

  /** @param {string} amountStr */
  addAmount(amountStr) {
    amountStr = Number.parseInt (amountStr, 10)
    this.amounts.push(amountStr)
    return amountStr
  }

  getCount() {
    return this.amounts.length
  }

  getTotal() {
    let sum = 0

    this.amounts.forEach(function (amount) {
      sum += amount
    })
    return sum
  }

  getAverage() {
    let sum = 0

    this.amounts.forEach(function (amount) {
      sum += amount
    })
    return sum / this.amounts.length
  }
}