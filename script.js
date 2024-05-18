
let bruh = document.querySelector("#developer");


function devFunc() {

    bruh.textContent = "Hire me";
}


function bruhFuncTwo(){

    bruh.textContent = "Developer";
}





let hireAll = document.querySelectorAll(".hire");
let meAll = document.querySelectorAll(".me");

let hire = document.querySelector(".hire");
let me = document.querySelector(".me");

let hireArray = Array.from(hireAll);
let meArray = Array.from(meAll);



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













bruh.addEventListener("mouseover", devFunc);
bruh.addEventListener("mouseout", bruhFuncTwo);



