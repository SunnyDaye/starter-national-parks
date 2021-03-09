//console.log(document); returns whole document object

/*const heading = document.querySelector("h1");
console.log(heading); //prints national parks heading with tags


const value = document.querySelector(".value");
console.log(value); //prints

const button = document.querySelector("button");
console.log(button); //prints

const area = document.querySelector(".area");
console.log(area); //prints

const div = document.querySelector(".stat div");
console.log(div); //prints

const hello = document.querySelector(".hello");
console.log(hello); //prints*/

/*const buttons = document.querySelectorAll("button");
console.log(buttons);

const ratings = document.querySelectorAll("section .stats .rating");

for(let el of ratings.values()){
    console.log(el);
}

const areas = document.querySelectorAll("section .stats .area");

for(let i=0;i<areas.length;i++){
    console.log(areas[i]);
}*/

// const descriptions = document.querySelectorAll(".description");

// for(let desc of descriptions.values()){

//     desc.innerHTML += '<a href="#">...</a>';

//   console.log(desc.innerHTML);
// }
let ratings = document.querySelectorAll(".rating .value").values();
for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);
  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
  }
}
