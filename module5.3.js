window.onload = function () {
	document.onmouseover = function(e) {
		var target = event.target;
		var dataToggleId = target.getAttribute('data-tooltip');
		if (!dataToggleId) {
			return
		};
		divAlertElem = document.createElement('div');
		document.body.append(divAlertElem);
		divAlertElem.className = "divalert"
		divAlertElem.innerHTML = dataToggleId;
	};

	document.onmouseout = function (e) {
		var target = event.target;
		var dataToggleId = target.getAttribute('data-tooltip');
		if (dataToggleId) {
			divAlertElem.remove();
		};
	}; 
};