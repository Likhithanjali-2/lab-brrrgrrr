// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

function totalCost(){
  cost = wholeWheatBun;
  for ( var i in ingredients)
    if(ingredients.hasOwnProperty(i))
      cost += ingredients[i];
  return cost;
}

total_price = totalCost()+wholeWheatBun;
console.log("total",total_price);

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  //renderButtons();
  //renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let $patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    $patty.style.display = "inherit";
  } else {
    $patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let $cheese = document.querySelector("#cheese");
  //you can also use getElementById
  if (state.Cheese) {
    $cheese.style.display = "inherit";
  } else {
    $cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let $tomato = document.querySelector("#tomato");
  //you can also use getElementById
  if (state.Tomatoes) {
    $tomato.style.display = "inherit";
  } else {
    $tomato.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let $onions = document.querySelector("#onion");
  //you can also use getElementById
  if (state.Onions) {
    $onions.style.display = "inherit";
  } else {
    $onions.style.display = "none";
  }
}

function renderLettuce() {
  let $lettuce = document.querySelector("#lettuce");
  //you can also use getElementById
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  if (state.Lettuce){
    $lettuce.style.display = "inherit";
  } else {
    $lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderPatty();
  renderButtons(document.querySelector(".btn-patty"));
  renderIngredientsBoard(document.getElementById("ingredient-patty"));
  total_price -= ingredients['Patty'];
  renderPrice();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderCheese();
  renderButtons(document.querySelector(".btn-cheese"));
  renderIngredientsBoard(document.getElementById("ingredient-cheese"));
  total_price -= ingredients['Cheese'];
  renderPrice();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderTomatoes();
  renderButtons(document.querySelector(".btn-tomatoes"));
  renderIngredientsBoard(document.getElementById("ingredient-tomatoes"));
  total_price -= ingredients['Tomatoes'];
  renderPrice();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderOnions();
  renderButtons(document.querySelector(".btn-onions"));
  renderIngredientsBoard(document.getElementById("ingredient-onions"));
  total_price -= ingredients['Onions'];
  renderPrice();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderLettuce();
  renderButtons(document.querySelector(".btn-lettuce"));
  renderIngredientsBoard(document.getElementById("ingredient-lettuce"));
  total_price -= ingredients['Lettuce'];
  renderPrice();
};

renderAll();
//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons(el) {
  el.classList.toggle("active");
}
//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard(el){
  if(el.style.display=='none')
    el.style.display= '';
  else
    el.style.display = 'none';
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice(){
  document.getElementById("price-details").textContent = 'INR '+ total_price;
}