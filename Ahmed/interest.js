function calculate() {
	let calculatorOutput = document.getElementById("interest-calculator-output");
	let interestRate = document.getElementById("interest-rate").value / 100;
	let principal = document.getElementById("loan-amount").value;
	let timePeriod = document.getElementById("time-period").value;
	let compoundPeriod = document.getElementById("compound-period").value;

	let total = Math.round(principal * (1 + interestRate / compoundPeriod) ** timePeriod ,2);

	calculatorOutput.innerHTML = `
	In ${timePeriod / compoundPeriod} years, you will have to pay back paid $${total}.`
}
setInterval(calculate, 100);