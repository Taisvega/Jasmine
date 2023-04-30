window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value=19000
  document.getElementById("loan-years").value=4
  document.getElementById("loan-rate").value=0.05
  calculateMonthlyPayment(getCurrentUIValues())
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentValues = getCurrentUIValues()
  let monthlyPayments = calculateMonthlyPayment(currentValues)
  updateMonthly(monthlyPayments)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principal=values.amount
  let rate = values.rate
  let term = values.years
  console.log(principal)
  console.log(rate)
  console.log(term)
  return ((principal*rate)/(1-((1+rate)**(-1*term)))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById('monthly-payment').innerText= monthly
}
