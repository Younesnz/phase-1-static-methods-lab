class Formatter {
  static capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
  }
  static sanitize(text) {
    let output = "";
    for (let char of text) {
      if (
        /^[A-Za-z0-9]*$/.test(char) ||
        char === "'" ||
        char === "-" ||
        char === " "
      ) {
        output += char;
      }
    }
    return output;
  }
  static titleize(text) {
    text = text.split(" ");
    text = text.map((word, index) => {
      if (
        index === 0 ||
        (word !== "the" &&
          word !== "a" &&
          word !== "an" &&
          word !== "but" &&
          word !== "of" &&
          word !== "and" &&
          word !== "for" &&
          word !== "at" &&
          word !== "by" &&
          word !== "from" &&
          word)
      )
        word = this.capitalize(word);
      return word;
    });
    return text.join(" ");
  }
}
