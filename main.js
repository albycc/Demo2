let cat = "Felix";
let dog = "Jake";
let bird = "Skrawk";
let fish = "sharky";
const display = document.getElementById("animal-display");

//create and add animals on list
const animalList = [];
animalList.push(cat);
animalList.push(dog);
animalList.push(bird);


//printing out animals in index
animalList.forEach(x =>{
    let para = document.createElement("p");
    para.textContent = x;
    display.appendChild(para);
})