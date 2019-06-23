$(".btn").click(function(event) {
	var thingClicked = this.innerHTML
	console.log("you clicked: ", thingClicked)
	var dispValue = document.getElementById("displayValue").innerHTML;
	
	if(["+", "-", "/", "*"].includes(dispValue[dispValue.length - 1])) {
		console.log('here')
		$('#displayValue').html(' ' + dispValue + ' ' + thingClicked)
	} else {
		$('#displayValue').html(dispValue + thingClicked)
	}
})

$(".enter").click(function(event) {
	var thingClicked = this.innerHTML
	console.log("you clicked: ", thingClicked)
	if(document.getElementById("displayValue").innerHTML == null) {
		$('#displayValue').html(thingClicked)
	} else {
		$('#displayValue').html(document.getElementById("displayValue").innerHTML + ' ' + thingClicked)
	}
})


