function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/; // current delimiters
  let numberSection = numbers;

  if (numbers.startsWith("//")) {
    const firstNewlineIndex = numbers.indexOf("\n");
    const delimiterLine = numbers.slice(0, firstNewlineIndex);
    numberSection = numbers.slice(firstNewlineIndex + 1);
    if (delimiterLine.includes("[")) {
      // multiple character delimiter
      const delimiters = [...delimiterLine.matchAll(/\[(.*?)\]/g)].map(
        (m) => m[1],
      );
      delimiter = new RegExp(delimiters.map(escapeRegex).join("|"));
    } else {
      // single character delimiter
      const customDelimiter = delimiterLine.slice(2);
      delimiter = new RegExp(`${escapeRegex(customDelimiter)}|,|\\n`);
    }
  }

  const nums = numberSection.split(delimiter).map(Number);

  const negatives = nums.filter((n) => n < 0);

  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(",")}`);
  }

  return nums.filter((n) => n <= 1000).reduce((sum, n) => sum + n, 0);
}

function escapeRegex(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}

module.exports = { add };
