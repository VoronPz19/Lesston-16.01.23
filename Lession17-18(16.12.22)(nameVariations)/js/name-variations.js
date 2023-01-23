export default class NameVariations {
  /** @param {string} name */
  constructor(name) {
		this.name = name;
  }

  getNumberOfChars() {
		return this.name.length
  }

  getLower() {
		return this.name.toLocaleLowerCase()
  }

  getUpper() {
		return this.name.toLocaleUpperCase()
  }
}