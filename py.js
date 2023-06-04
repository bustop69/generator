var css = document.querySelector("h3")
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")

console.log(body)


function setgradient (){
	body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+ ","
	 + color2.value 
	 +")";

	 css.textContent = body.style.background + ";";
}
color1.addEventListener("input",setgradient)

color2.addEventListener("input",setgradient)


//input Fires when the value of an <input>, <select>, or <textarea> element has been changed. 
//Note that this is actually fired on the HTMLElement interface and also applies to contenteditable elements, 
//but we've listed it here because it is most commonly used with form input elements.

