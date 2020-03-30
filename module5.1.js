window.onload = function () {
	var linkOpCl = this.document.querySelector("#linkOpenClose");
	var displayNone = this.document.querySelector(".display-none");
	var cancelHandler = this.document.querySelector("#cancelhandler")

	linkOpCl.addEventListener("click", displayBlock);

	cancelHandler.addEventListener("click", function() {
		linkOpCl.removeEventListener("click", displayBlock)
	});

	function displayBlock(e) {
		displayNone.classList.toggle("display-block");
		e.preventDefault()
	};
};