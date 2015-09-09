var button = document.getElementsByTagName("button")[0];
var p = document.createElement("p");
var section = document.getElementsByTagName("section")[0];
button.onclick = function(){
  section.appendChild(p);
  p.innerHTML += "Hello, world again! <br>";	
}	
