
let bruh = document.querySelector("#developer");
let hireAll = document.querySelectorAll(".hire");
let meAll = document.querySelectorAll(".me");

let hire = document.querySelector(".hire");
let me = document.querySelector(".me");

let hireArray = Array.from(hireAll);
let meArray = Array.from(meAll);



function devFunc() {

    bruh.textContent = "Hire me";
}


function bruhFuncTwo(){

    bruh.textContent = "Developer";
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


bruh.addEventListener("mouseover", devFunc);
bruh.addEventListener("mouseout", bruhFuncTwo);





let panelGroup = Array.from(document.querySelectorAll(".panels")); //Array of panels


let originalChildren = [];

for (let i of panelGroup) {
    originalChildren.push(i.lastChild);
}


console.log(originalChildren);


////////////////////////////////////////////////////////

let githubActualObject = {

    img: "placeholder",
    description: "Briefly describes project",
    
}


//////////////////////////////////////////////////////////

function actionFunc() {
    let replacementParagraph = document.createTextNode("github actual"); //replacemnt text node "github actual"
    

    console.log(this.lastChild);
    this.lastChild.replaceWith(replacementParagraph);

}

function unactionFunc() {

    /*if (some panel identifyer) is in originalChildren,

    then original child = that Element.*/

  

    let originalChild = document.createTextNode("github preview");


    console.log(this.lastChild);

    this.lastChild.replaceWith(originalChild);

    

}


for (let i of panelGroup) {

    i.addEventListener("mouseover", actionFunc);
    i.addEventListener("mouseout", unactionFunc);


}




