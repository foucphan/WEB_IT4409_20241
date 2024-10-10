function telephoneCheck(str) {
  // Loại bỏ các ký tự không phải số
  let digitsOnly = str.replace(/[^0-9]/g, "");

  // Kiểm tra độ dài
  if (
    digitsOnly.length === 10 ||
    (digitsOnly.length === 11 && digitsOnly[0] === "1")
  ) {
    // Kiểm tra mã vùng và số trao đổi (nếu có mã quốc gia)
    if (digitsOnly.length === 11) {
      digitsOnly = digitsOnly.substring(1);
    }

    // Kiểm tra định dạng bằng cách kiểm tra vị trí của các dấu gạch ngang hoặc ngoặc đơn
    if (
      (str.charAt(3) === "-" && str.charAt(7) === "-") ||
      (str.charAt(0) === "(" &&
        str.charAt(4) === ")" &&
        str.charAt(8) === "-") ||
      (str.charAt(0) === "(" &&
        str.charAt(4) === ")" &&
        str.charAt(5) === " " &&
        str.charAt(9) === "-")
    ) {
      return true;
    } else if (str.indexOf("-") === -1 && str.indexOf("(") === -1) {
      // Kiểm tra trường hợp không có dấu gạch ngang hoặc ngoặc đơn
      return true;
    }
  }

  return false;
}

console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("(555)555-5555")); // true
console.log(telephoneCheck("1 555 555 5555")); // true
console.log(telephoneCheck("5555555555")); // true
console.log(telephoneCheck("800-692-7753")); // true
console.log(telephoneCheck("8oo-six427676;laskdjf")); // false
