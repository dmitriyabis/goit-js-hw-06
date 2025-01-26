class StringBuilder {
  #value;
  constructor(value) {
    this.#value = value;
  }
  getValue() {
    return this.#value;
  }
  padStart(item) {
    this.#value = item + this.#value;
    return this;
  }
  padEnd(item) {
    this.#value = this.#value + item;
    return this;
  }
  padBoth(item) {
    this.padStart(item).padEnd(item);
    return this;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
