function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const currency = document.getElementById("currency").value;

  // conversion rates to USD
  const conversionRates = {
    "EUR": 0.91,
    "GBP": 1.41,
    "JPY": 0.0092,
  };

  // check if currency is valid
  if (!(currency in conversionRates)) {
    document.getElementById("result").value = "Invalid currency";
    return;
  }

  // calculate converted amount and round to 2 decimal places
  const convertedAmount = (amount / conversionRates[currency]).toFixed(2);

  // format result with USD symbol
  const formattedResult = `${convertedAmount} $`;

  document.getElementById("result").value = formattedResult;
}



function updateClock() {
  var date = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
  var time = new Date(date);
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var period = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Format the time with leading zeros
  var formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;

  // Update the clock element with the current time
  document.getElementById("clock").textContent = formattedTime;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);