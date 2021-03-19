const anchors = document.querySelectorAll("a[href*='#']");

console.log(anchors);

for(let anchor of anchors){
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
    })
}


let responsive = document.getElementById("responsiveMenu");
let responsiveButton = document.getElementById("responsiveMenuButton");

function responsiveMenu() {
    if(responsive.className === "responsiveMenu"){
        responsive.className += " visible";
    } else {
        responsive.className = "responsiveMenu";
    }

    if(responsiveButton.className !== "responsiveMenuButton"){
        responsiveButton.className = "responsiveMenuButton";
    } else {
        responsiveButton.className += "visible";
    }
}
function responsiveMenuClosing() {
    responsive.className = "responsiveMenu";
    responsiveButton.className += " visible";
}


let arr = [[21, 33], [11, 45], [10, 78]];
let resultNum = 0; 
for(let i = 0; i < arr.length; i++){
    // console.log(arr[i].length)
    for(let j = 0; j < arr[i].length; j++){
        resultNum += arr[i][j];
    }
}
console.log(resultNum);

let resultInt = "";

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        if(i === arr.length - 1 && j === arr[i].length - 1){
            resultInt += `${arr[i][j]}.`;
        } else {
            resultInt += `${arr[i][j]}, `;
        }
    }
}
console.log(resultInt);

let string = "dsdkasdkljaskczmckljskljfsdlknvszsdqzzzz";
let stringArr = string.split('');

let newArr = [];

stringArr.map((itemInArr) => {
    if(!newArr.find(itemInResult => itemInResult == itemInArr)){
        newArr.push(itemInArr);
    }
})
let result = newArr.join('');
console.log(string);
console.log(result);
// console.log(newArr.split("").find(itemInResult => itemInResult == itemInArr));



