let container = document.getElementById("container")


let a = document.getElementById("green")
a.onclick = function(){
	conatiner.style.backgroundColor="green";
}

let b = document.getElementById("red")
b.onclick = function(){
	container.style.backgroundColor="red";
}

let c = document.getElementById("blue")
c.onclick = function(){
	conatiner.style.backgroundColor="blue";
}

let d = document.getElementById("yellow")
d.onclick = function(){
	conatiner.style.backgroundColor="yellow";
}

let heading = document.getElementById("nav")
heading.onclick=function(){
	heading.innerHTML = "This is some new content";
	heading.style.color = "blue";
