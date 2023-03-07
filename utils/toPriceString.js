Number.prototype.toPriceString = function() {
  return this.toLocaleString('en', { style: 'currency', currency: 'USD' });
}