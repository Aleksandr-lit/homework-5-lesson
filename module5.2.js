window.onload = function () {
	var clikButton = document.querySelectorAll(".remove");

	for (var i = 0 ; clikButton.length > i; i++) {
		clikButton[i].addEventListener("click", removeDiv); 
	};

	function removeDiv() {
		var parent = this.parentNode
		parent.parentNode.removeChild(parent);
	};
};