(function () {
    "use strict";

   var fullExpression = '';
   var firstDigit = true;

    function onButtonPressNumber(num) {
	    var display = document.getElementById('display-window');

	    if (display.innerText == '\n') {
		    display.innerText = num;
		    firstDigit = true;
	    } else if ((['-', '*', '/', '+'].indexOf(fullExpression.substring(fullExpression.length - 1)) >= 0) && firstDigit) {
		    display.innerText =  num;
		    firstDigit = false;
	    } else if (display.innerText.includes('.') && num == '.' ) {
		//No more than 1 decimal point to a number
	    } else if (display.innerText.length + 1 > 9) {
		//No more than 9 digits (or 8 digits and one decimal point) to a number
	    } else {
		    display.innerText = display.innerText.concat('', num);
	    }
    }

    function onButtonPressOperation(operation) {
        var display = document.getElementById('display-window');
	    if (operation == 'clear') {
		display.innerText = "\n";
		fullExpression = '';
		console.log(fullExpression);
	    } else if (operation == 'add-equals') {
		   fullExpression = fullExpression.concat('', display.innerText.concat("", "+"));
		   evaluate(fullExpression);
		   console.log(fullExpression);
		   firstDigit = true;
		   fullExpression = '';

	    } else if (operation == 'subtract'){
		    fullExpression = fullExpression.concat('', display.innerText.concat("", "-"));
		    evaluate(fullExpression);
		    firstDigit = true;
		    console.log(fullExpression);

	    } else if (operation == 'multiply') {
		    fullExpression = fullExpression.concat('', display.innerText.concat("", "*"));
		    evaluate(fullExpression);
		    firstDigit = true;
		    console.log(fullExpression);

	    } else if (operation == 'divide') {
		    fullExpression = fullExpression.concat('', display.innerText.concat("", "/"));
		    evaluate(fullExpression);
		    firstDigit = true;
		    console.log(fullExpression);
	    }

    }


    function evaluate(expression) {
	var display = document.getElementById('display-window');
	var x = expression.substring(0, (expression.length - 1));
	    console.log(x);

	display.innerText = eval(x);
	firstDigit = false;    

    }


    function init() {
        var one_btn = document.getElementById('1');
        	one_btn.addEventListener("click", function() {onButtonPressNumber('1')});
	var two_btn = document.getElementById("2");
        	two_btn.addEventListener("click", function() {onButtonPressNumber('2')});
	var three_btn = document.getElementById("3");
        	three_btn.addEventListener("click", function() {onButtonPressNumber('3')});
	var four_btn = document.getElementById("4");
        	four_btn.addEventListener("click", function() {onButtonPressNumber('4')});
	var five_btn = document.getElementById("5");
        	five_btn.addEventListener("click", function() {onButtonPressNumber('5')});
	var six_btn = document.getElementById("6");
        	six_btn.addEventListener("click", function() {onButtonPressNumber('6')});
	var seven_btn = document.getElementById("7");
        	seven_btn.addEventListener("click", function() {onButtonPressNumber('7')});
	var eight_btn = document.getElementById("8");
        	eight_btn.addEventListener("click", function() {onButtonPressNumber('8')});
	var nine_btn = document.getElementById("9");
        	nine_btn.addEventListener("click", function() {onButtonPressNumber('9')});
	var zero_btn = document.getElementById("0");
	    zero_btn.addEventListener("click", function() {onButtonPressNumber('0')});
	var add_equals_btn = document.getElementById("add-equals");
        	add_equals_btn.addEventListener("click", function() {onButtonPressOperation('add-equals')});
	var subtract_btn = document.getElementById("subtract");
        	subtract_btn.addEventListener("click", function() {onButtonPressOperation('subtract')});
	var multiply_btn = document.getElementById("multiply");
        	multiply_btn.addEventListener("click", function() {onButtonPressOperation('multiply')});
	var divide_btn = document.getElementById("divide");
        	divide_btn.addEventListener("click", function() {onButtonPressOperation('divide')});
	var decimal_point_btn = document.getElementById("decimal-point");
        	decimal_point_btn.addEventListener("click", function() {onButtonPressNumber('.')});
	var clear_btn = document.getElementById("clear");
        	clear_btn.addEventListener("click", function() {onButtonPressOperation('clear')});
    
    
    
    }

    window.addEventListener("load", init, false);
})();
