$(".btn").click(function(event) {
	var thingClicked = this.innerHTML
	console.log("you clicked: ", thingClicked)
	var dispValue = document.getElementById("displayValue").innerHTML;
	
	if(["+", "-", "/", "*"].includes(thingClicked)) {
		$('#displayValue').html(' ' + dispValue + ' ' + thingClicked + ' ')
	} else {
		$('#displayValue').html(dispValue + thingClicked)
	}
})

$(".enter").click(function(event) {
	var toCalculate = document.getElementById("displayValue").innerHTML
	var result = math.evaluate(toCalculate)
	document.getElementById("displayValue").innerHTML = result;
	// console.log(toCalculate)
})


