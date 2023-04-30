
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 19000,
    years: 4,
    rate: 0.05
  };
  expect(calculateMonthlyPayment(values)).toEqual('5358.22');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 19000,
    years: 4,
    rate: 0.05};
  expect(calculateMonthlyPayment(values)).toEqual('5358.22');
});

/// etc
