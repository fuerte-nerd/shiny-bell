class CodeGenerator {
  constructor({ section }) {
    this.section = section;
    this.code = this.getCode(this.section);
  }

  getCode(section) {
    let str = "";
    const tab = "   ";
    const ins = (text,{doubleLine = false, tabs = 0, noNewLine = false }) => {
      str += tab * tabs;
      str += doubleLine ? `\n\n${text}` : noNewLine ? text : `\n${text}`;
    };

    switch (section) {
      case "hero":
        ins({text:});
        break;
    }
  }
}
