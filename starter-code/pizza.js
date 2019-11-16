// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything( ev ) {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons( ev )
  renderPrice( ev )
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function(el){
    if (state.pepperonni) el.style.visibility = "visible";
    else el.style.visibility = "hidden";
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach( function(el) {
    if (state.mushrooms) el.style.visibility = "visible";
    else el.style.visibility = "hidden";
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach( function(el) {
    if (state.greenPeppers) el.style.visibility = "visible";
    else el.style.visibility = "hidden";
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.crust .sauce').forEach( function(el) {
    if (!state.whiteSauce) el.classList.add('sauce-white')
    else el.classList.remove('sauce-white');
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach( function(el) {
    if (!state.glutenFreeCrust) el.classList.add('crust-gluten-free')
    else el.classList.remove('crust-gluten-free');
  })
}

function renderButtons( ev = {} ) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach( el => {
    if (el == ev.target) el.classList.toggle('active')
  })
}

function renderPrice( ev = {}) {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let pep = {
    HTML: `<li id="pep-price">$1 pepperonni</li>`,
    price: 1,
    present: true 
  };
  let mushPrice = {
    HTML: `<li id="mush-price">$1 mushrooms</li>`,
    price: 1
  };
  let gp = {
    HTML: `<li id ="gp-price">$1 green peppers</li>`,
    price: 1
  };
  let wsPrice = {
    HTML: `<li id="ws-price">$3 white sauce</li>`,
    price: 3
  };
  let gfcPrice = {
    HTML: `<li id="gfc-price">$5 gluten-free crust</li>`,
    price: 5
  };

  document.querySelectorAll('.panel.price>ul>li').forEach( el => {
    if (!state.pepperonni && el.id == "pep-price" ) {
      pep.present = !pep.present
      el.parentNode.removeChild(el)
    }
    else if( !pep.present ) { 
      el.parentElement.insertAdjacentHTML('afterbegin', pep.HTML )
    }
  })  
  }


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function( ev ) {
  state.pepperonni = !state.pepperonni
  renderEverything( ev )
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function( ev ) {
  state.mushrooms = !state.mushrooms;
  renderEverything( ev )
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function( ev ) {
  state.greenPeppers = !state.greenPeppers;
  renderEverything( ev )
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function( ev ) {
  state.whiteSauce = !state.whiteSauce;
  renderEverything( ev )
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function( ev ) {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything( ev )
}