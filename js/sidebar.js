/* set width of sidebar and left margin to 250px and add low opacity black over content */
function openNav() {
	document.getElementById("navSidebar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* set width of sidebar and lefr margin to 0 and replace background with white */
function closeNav() {
	document.getElementById("navSidebar").style.width = "0px";
	document.getElementById("main").style.marginLeft = "0px";
	document.body.style.backgroundColor = "rgb(255,255,255)";
}