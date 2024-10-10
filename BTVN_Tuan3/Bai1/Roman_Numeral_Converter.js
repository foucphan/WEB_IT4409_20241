function toRoman(num) {
  // Define the mapping of Roman numerals to their integer values.
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  // Initialize the result string.
  let result = "";

  // Loop through the Roman numerals and subtract their values from the number.
  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }

  // Return the result.
  return result;
}

// Example usage:
console.log(toRoman(1)); // I
console.log(toRoman(4)); // IV
console.log(toRoman(5)); // V
console.log(toRoman(9)); // IX
console.log(toRoman(13)); // XIII
console.log(toRoman(44)); // XLIV
console.log(toRoman(100)); // C
console.log(toRoman(499)); // CDXCIX
console.log(toRoman(500)); // D
console.log(toRoman(900)); // CMXCIX
console.log(toRoman(1000)); // M
