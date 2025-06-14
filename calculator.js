function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/; // current delimiters
  let numberSection = numbers;

  if (numbers.startsWith("//")) {
    const firstNewlineIndex = numbers.indexOf("\n");
    const delimiterLine = numbers.slice(0, firstNewlineIndex);
    numberSection = numbers.slice(firstNewlineIndex + 1);
    const customDelimiter = delimiterLine.slice(2);
    // add new custom delimiter to existing delimiters
    delimiter = new RegExp(`${customDelimiter}|,|\\n`);
  }

  const nums = numberSection.split(delimiter).map(Number);

  const negatives = nums.filter((n) => n < 0);

  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(",")}`);
  }

  return nums.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };
