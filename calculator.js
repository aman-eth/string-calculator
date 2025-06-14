function add(numbers) {
  if (numbers === "") return 0;

  const parts = numbers.split(",");
  const nums = parts.map(Number);
  return nums.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };
