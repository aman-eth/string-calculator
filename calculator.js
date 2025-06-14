function add(numbers) {
  if (numbers === "") return 0;

  const cleaned = numbers.replace(/\n/g, ",");
  const parts = cleaned.split(",");
  const nums = parts.map(Number);
  return nums.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };
