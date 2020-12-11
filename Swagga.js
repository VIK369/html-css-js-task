function total() {
  //Fetching inputs from the html stuff with the ID "male" and "female"
  //These inputs are the amount of stuff the client wants to buy
  let fQty = document.getElementById("female").value;
  let mQty = document.getElementById("male").value;

  //taking amount of items customer wants and multiplying by the price
  //to get the total for m and f
  let fTotal = 150.95 * fQty;
  let mTotal = 180.95 * mQty;

  let tot = fTotal + mTotal; //making a total of the two amounts

  //displaying all the totals in LABELS it works best this way
  //the labels (3 of them) all have different id's (fdisp, mdisp, total)
  document.getElementById("fdisp").innerHTML = fTotal.toFixed(2); //toFixed converts to 2 decimal places
  document.getElementById("mdisp").innerHTML = mTotal.toFixed(2);
  document.getElementById("total").innerHTML = tot.toFixed(2);
}
