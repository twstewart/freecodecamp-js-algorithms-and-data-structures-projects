function checkCashRegister(price, cash, cid) {
  const unitAmt = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    "ONE HUNDRED": 100.0,
  };

  let totalCID = 0;

  cid.forEach((el) => (totalCID += el[1]));
  totalCID = totalCID.toFixed(2);

  let change = cash - price;
  const changeArray = [];

  if (change > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: changeArray };
  } else if (change.toFixed(2) === totalCID) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();

    cid.forEach((el) => {
      el[1] = el[1].toFixed(2);

      let holder = [el[0], 0];
      while (change >= unitAmt[el[0]] && el[1] > 0) {
        holder[1] += unitAmt[el[0]];
        el[1] -= unitAmt[el[0]];
        change -= unitAmt[el[0]];
        change = change.toFixed(2);
      }
      if (holder[1] > 0) {
        changeArray.push(holder);
      }
    });
  }

  if (change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };
}
