function letterCombinations(input_digit) {
  //Complete the function.// Create a mapping of input_digit to letters
  const mapping = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  
  if (!input_digit) {
    return [];
  }
  
  const result = [''];
  for (let i = 0; i < input_digit.length; i++) {
    const letters = mapping[input_digit[i]];
    const temp = [];
    for (let j = 0; j < result.length; j++) {
      for (let k = 0; k < letters.length; k++) {
        temp.push(result[j] + letters[k]);
      }
    }
    result.length = 0;
    result.push(...temp);
  }
  
  return result.sort();
}

module.exports = letterCombinations;
