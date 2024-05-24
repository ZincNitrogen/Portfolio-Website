
let developer = document.querySelector("#developer");
let hireAll = document.querySelectorAll(".hire");
let meAll = document.querySelectorAll(".me");

let hire = document.querySelector(".hire");
let me = document.querySelector(".me");

let hireArray = Array.from(hireAll);
let meArray = Array.from(meAll);



function devFunc() {

    developer.textContent = "Hire me";
}


function devFuncTwo(){

    developer.textContent = "Developer";
}


function hireFuncColor(){


    this.style.color = "blue";
    this.style.opacity = "100";

}

function hireFuncNonColor (){

    this.style.color = "var(--grey_light)";
    this.style.opacity = "5%";

}

function meFuncColor(){

    this.style.color = "orange";
    this.style.opacity = "100";

}

function meFuncNonColor (){

    this.style.color = "grey";
    this.style.opacity = "5%";

}




for (i of hireArray) {
    i.addEventListener("mouseover", hireFuncColor);
    i.addEventListener("mouseout", hireFuncNonColor);
}

for (i of meArray) {
    i.addEventListener("mouseover", meFuncColor);
    i.addEventListener("mouseout", meFuncNonColor);
}


developer.addEventListener("mouseover", devFunc);
developer.addEventListener("mouseout", devFuncTwo);






const panels = document.querySelector("#projectsection");
let child;

panels.addEventListener("mouseover", (event) => {


   if (event.target.tagName === "A") {
    child = event.target.firstChild;
    event.target.firstChild.replaceWith("github actual");
   }

})



panels.addEventListener("mouseout", (event) => {
    if (event.target.tagName === "A") {
        event.target.firstChild.replaceWith(child);
    }
})

