function calculate() {
	let calculatorOutput = document.getElementById("budget-calculator-output");
	let income = document.getElementById("income").value;
	let savings = document.getElementById("savings").value;
	let needs = 0;
	let needsDiv = document.getElementById("needs");
	for (i = 0; i < needsDiv.children.length; i++) {
		needs += Number(needsDiv.children[i].children[0].value);
	}


	calculatorOutput.innerHTML = `
	You Can Have $${(income - savings - needs) * 0.60} Move For Your Needs and
	$${(income - savings - needs) * 0.40} for your wants.`;
}
setInterval(calculate, 100);




var enpenseNumber = 0;
function addExpense() {
	enpenseNumber++;
	needs = document.getElementById("needs");
	let div = document.createElement("div");
	div.id = enpenseNumber + "";
	div.innerHTML = `
	<input type="number" class="needs" placeholder="amount ex: 120.99">
	<input type="text" placeholder="type ex: clothes">
	<button onclick="removeExpense(${enpenseNumber})">Remove</button>
	<br><br>`;

	needs.appendChild(div);
}
addExpense();

function removeExpense(id) {
	console.log(id)
	needs = document.getElementById("needs");
	document.getElementById(id).remove();
}