$(document).ready(function(){

let cards = document.querySelectorAll('.card');
let cardsOpen = document.querySelectorAll('.open');
let arrOpenCards = [];

let allMatchedCards = document.querySelectorAll('.match');
let arrAllMatchedCards = [];

const cardDeck = document.querySelector('.deck');
const cardArray = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"];

let moves = 0

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


// the while loop for child removal from url = https://siongui.github.io/2012/09/26/javascript-remove-all-children-of-dom-element/, God bless!
function childRemoval() {

  while (cardDeck.hasChildNodes()) {
cardDeck.removeChild(cardDeck.lastChild);
}
}

function makeDeck() {

  overlayOff();
  shuffle(cardArray);
  childRemoval();

  const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

    for (let i = 0; i < cardArray.length; i++) {
        let newLi = document.createElement('li');
        let newLiClass = newLi.classList.add('card');
        let newI = document.createElement('i');
        let newIClass = newI.classList = cardArray[i];

        newLi;
        newLiClass;
        fragment.appendChild(newLi);

        newI;
        newIClass;
        newLi.appendChild(newI);
        }

      cardDeck.appendChild(fragment);

}

// reset grid on click
let restart = document.querySelector('.fa-repeat');

restart.addEventListener('click', function(){
    makeDeck();
    startTiming();
});

let button = document.querySelector('.button');

button.addEventListener('click', function(){
    button.style.display = "none";
    makeDeck();
    startTiming();

});

// * Add event Listener to card deck with delegation to its child nodes
cardDeck.addEventListener('click', function(event){

          turnCard();
          listOpenCards();


        if(arrOpenCards.length === 2){
            checkMatch();
          }

      })

function checkMatch(){
      if(arrOpenCards[0].innerHTML !== arrOpenCards[1].innerHTML) {
          noMatch();
      } else {
          match();
          listMatchedCards();
      }
}

function turnCard() {
    event.target.classList.add('open', 'show');
    moveCount();
}

function listOpenCards() {
  cardsOpen = document.querySelectorAll('.open');
  arrOpenCards = [];

  arrOpenCards.push(...cardsOpen);
}

  function match(){
      arrOpenCards[0].classList.remove('open', 'show');
      arrOpenCards[1].classList.remove('open', 'show');
      arrOpenCards[0].classList.add('match');
      arrOpenCards[1].classList.add('match');
      };

function noMatch(){
    setTimeout(function(){
      arrOpenCards[0].classList.remove('open', 'show');
      arrOpenCards[1].classList.remove('open', 'show');
    }, 650);
}


function listMatchedCards(){
  allMatchedCards = document.querySelectorAll('.match');
  arrAllMatchedCards = [];

  arrAllMatchedCards.push(...allMatchedCards);

  if(arrAllMatchedCards.length === 16) {
    overlayOn();
}}

function overlayOn(){
    overlay = document.querySelector('#overlay');
    button = document.querySelector('.button');

    overlay.style.display = "block";
    button.style.display = "inline-block";

    document.querySelector(".stats_time").textContent = document.querySelector('.time').textContent

    document.querySelector(".stats_moves").textContent = moves + " Moves";

    // HOW TO REFERENCE THE STARS HERE???
    let starHTML = document.querySelectorAll('.fa fa-star').innerHTML
    document.querySelector(".stats_stars").insertAdjacentHTML('beforeend', starHTML)



}

function overlayOff(){

    overlay.style.display = "none";
}

function moveCount(){
    moves = moves + 1;

    document.querySelector(".moves").textContent = moves;

    let movesTitle = document.querySelector(".movesTitle");

      if(moves == 1) {
        movesTitle.textContent = "Move";
      } else{
        movesTitle.textContent = "Moves";
      }

}

  if(moves % 10 === 0 && moves > 20) {
    let stars = document.querySelector('.fa-star');
    stars.removeChild(stars.lastChild);
  }


function startTiming(start){
  var start = new Date;
  let time = document.querySelector('.time')
  setInterval(function() {

  time.textContent = ((new Date - start) / 1000 + " Seconds");
}, 1000);
}

// ANIMATIONS//

$('.card').hover(
      function(event) {
          $(this).addClass( "hover" );
        }, function() {
          $(this).removeClass( "hover" );
        }
      )


$('.button').hover(
    function(event){
      $(this).addClass('button_hover');
    }, function() {
      $(this).removeClass('button_hover');
    }
  )

})

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
