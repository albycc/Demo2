let cat = "Felix";
let dog = "Jake";
let bird = "Skrawk";
const display = document.getElementById("animal-display");

const animalList = [];
animalList.push(cat);
animalList.push(dog);
animalList.push(bird);

animalList.forEach(x =>{
    let para = document.createElement("p");
    para.textContent = x;
    display.appendChild(para);
})