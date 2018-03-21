$(function(){
	 $('[data-toggle="tooltip"]').tooltip()
	})

$(function(){
	var col, el;
	
	$("input[type=radio]").click(function() {
	   el = $(this);
	   col = el.data("col");
	   $("input[data-col=" + col + "]").prop("checked", false);
	   if (col == 1) {
	   		col++;
	   		$("input[data-col=" + col + "]").prop("checked", false);
	   }
	   else {
	   		col--;
	   		$("input[data-col=" + col + "]").prop("checked", false);
	   }
	   el.prop("checked", true);
	   calculate();
	});

})

function Add(a, b) {
	return Number(a) + Number(b);
}

function Sub(a, b) {
	return Number(a) - Number(b);
}

function Multiple(a, b) {
	return Number(a) * Number(b);
}

function Devide(a, b) {
	if(Number(b) === 0)
		return NaN;
	else
		return Number(a)/Number(b);
}

function showError(a, b) {
	var error = document.getElementById("error"); 

	if (isNaN(a) && isNaN(b)) {
		error.innerText = "Cả hai ô không phải là số!";
		return false;
	}

	if (isNaN(a)) {
		error.innerText = "Ô thứ 1 không phải là số!";
		return false;
	}
	if (isNaN(b)) {
		error.innerText = "Ô thứ 2 không phải là số!";
		return false;
	}
	if (a == "" || b == "") {
		error.innerText = "Vui lòng nhập số vào ô!";
		return false;
	}
	else {
		error.innerText = "";
		return true
	}
}



function calculate() {
	var a = document.getElementById("firstNumber").value;
	var b = document.getElementById("secondNumber").value;
	var result = null;
	if (showError(a, b)) {

		if(document.getElementById("add").checked) result = Add(a, b);
		if(document.getElementById("sub").checked) result = Sub(a, b);
		if(document.getElementById("mul").checked) result = Multiple(a, b);
		if(document.getElementById("div").checked) {
			if (b == 0 || b == "") {
				var inf = document.getElementById("error"); 
				inf.innerText = "Lỗi: không thể chia cho 0!";
				result = NaN;
			}
			else {
				result = Devide(a, b);
			}
		}
	}
	document.getElementById("result").value = result;
}

document.getElementById("btnResult").onclick = calculate;
document.getElementById("firstNumber").oninput= calculate;
document.getElementById("secondNumber").oninput = calculate;