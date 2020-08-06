class CodeGenerator {
  constructor({ section }) {
    this.section = section;
    this.code = this.getCode(this.section);
  }

  getCode(section) {
    let str = "";
    const insert = (text, double = false) =>
      (str += double ? `\n\n${text}` : `\n${text}`);
    const tab = "   ";

    switch (section) {
      case "hero":
        return ``;
    }
  }
}
