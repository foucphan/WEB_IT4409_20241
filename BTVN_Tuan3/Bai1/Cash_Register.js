function checkCashRegister(price, cash, cid) {
  const currencyValues = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let changeDue = cash - price;
  let totalCid = 0;
  let change = [];

  // Tính tổng số tiền trong ngăn kéo
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }

  // Trường hợp không đủ tiền trả lại
  if (totalCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Trường hợp tiền trong ngăn kéo bằng tiền trả lại
  if (totalCid === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  // Trường hợp có thể trả lại tiền
  for (let i = cid.length - 1; i >= 0; i--) {
    const currencyName = cid[i][0];
    const currencyValue = currencyValues[currencyName];
    let currencyAmount = cid[i][1];
    let currencyCount = 0;

    while (changeDue >= currencyValue && currencyAmount > 0) {
      changeDue -= currencyValue;
      changeDue = Math.round(changeDue * 100) / 100; // Làm tròn để tránh lỗi số học dấu phẩy động
      currencyAmount -= currencyValue;
      currencyCount++;
    }

    if (currencyCount > 0) {
      change.push([currencyName, currencyCount * currencyValue]);
    }
  }

  // Trường hợp không thể trả lại đúng số tiền lẻ
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: change };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
