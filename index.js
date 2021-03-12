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
// let ratings = document.querySelectorAll(".rating .value").values();
// for (let rating of ratings) {
//   let ratingValue = parseFloat(rating.innerText);
//   if (ratingValue > 4.7) {
//     rating.classList.add("high-rating");
//   }
// }

/*************Adding an element to the DOM****************/
//  const parks =  document.querySelectorAll(".park");
//  const numOfParks =  parks.length; //Node list can be treated like arrays

//  let newElement = document.createElement("div"); //Think of divs as variables. They are used to hold single data values or a group of values like an object with

//  //Since createElement returns an HTMLElement object, we can add the data we want to present in the document in the innerHTML or innerText property
//  newElement.innerText = `${numOfParks} fantastic parks to explore!`; 

//  //If you want the element to be styled, create an css class and add it to the element class
//  newElement.classList.add("header-statement");

//  //The next and final step is to add the element where you want to on the page
//  // 1: grab the destination element from the DOM. This is where you will insert your new element into
//  let destinationElement = document.querySelector("header");
//  //2: add your new element as a child 
//  destinationElement.appendChild(newElement);


/*************Removing an element from the DOM*************/
//Remove the first park

//Get the parent element
// const parent = document.querySelector("main");

// //get the child element
// const child = document.querySelector(".park");

// //remove the child element

// parent.removeChild(child);


/********Park Sorter by Name**********/
// Function for sorting by name
const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  };

//Function to sort by ratings
const sortByRating = (parkA, parkB) => {
    //grab the rating value
    const parkARating = parkA.querySelector(".rating .value").innerText;
    const parkBRating = parkB.querySelector(".rating .value").innerText;
    //Compare values to be sorted
    if(parkARating < parkBRating){
        return -1;
    }else if(parkARating > parkBRating){
        return 1;
    }else{
        return 0;
    }
};
  
  // Function for handling the `nameSorter` click
  const nameSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park");
  
    // 3. Empty the main
    main.innerHTML = "";
  
    // 4. Create an array
    const parksArray = Array.from(parksList);
  
    // 5. Sort the array
    parksArray.sort(sortByName);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };

  const ratingSorterClickHandler = (event) => {
    event.preventDefault();

    //1.get the parent which is margin
    const main = document.querySelector("main");

    //2. get the parks listener
    const parks = main.querySelectorAll(".park");

    //3. empty main
    main.innerHTML = "";

    //4. make parks into an arrays
    const parksArray = Array.from(parks);

    //5.sort the array by ratings
    parksArray.sort(sortByRating);

    //add each park to margin
    parksArray.forEach(park => main.appendChild(park));

  };
  
const main = () => { //function to run code when the DOM is finished loading
    // Select the `nameSorter` link
    const nameSorter = document.querySelector("#nameSorter");
    const ratingSorter = document.querySelector("#ratingSorter");
  
    // Add an event listener
    nameSorter.addEventListener("click", nameSorterClickHandler);
    ratingSorter.addEventListener("click", ratingSorterClickHandler);
}

window.addEventListener("DOMContentLoaded", main); //Pu

 


 


