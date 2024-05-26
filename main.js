class ObjectObjectObjectClass {
  constructor(repeats) {
    this.repeatArray = [...Array(repeats)].map((e,i) => i+1)
  }
  get [Symbol.toStringTag]() {
    return this.repeatArray.map(e => `\n${("    ").repeat(e)}[object`).join("") + " Object" + [...this.repeatArray].reverse().map(e => `]\n${"    ".repeat(e-1)}`).join("")
  }
}
