function clearFun() {
	var val = document.getElementById("calcScreen").value;
	document.getElementById("calcScreen").value = val.substring(0, val.length - 1);

}