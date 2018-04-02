$(document).ready(function(){
/*
 * Create a list that holds all of your cards
 */
// Add timer to turn around cards again
// add timer to not allow more than 2 cards


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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

const cardDeck = document.querySelector('.deck');
// the while loop for child removal from url = https://siongui.github.io/2012/09/26/javascript-remove-all-children-of-dom-element/, God bless!
function childRemoval() {

  while (cardDeck.hasChildNodes()) {
cardDeck.removeChild(cardDeck.lastChild);
}
}

function makeDeck() {
  const cardArray = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"];


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
let restart = document.querySelector('.fa-repeat')

restart.addEventListener('click', makeDeck);


cardDeck.addEventListener("click", function(event){

    event.target.classList.add('open', 'show');
})

// *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
function arrayClickedCards() {
  let cardsOpen = document.querySelectorAll('.open');
  let arrOpen = [];

  arrClickedCards.push(...cardsOpen);

}

function displayCards(){
  arrClickedCards.toggle('open', 'show');
}

function matchedCards(){
  arrClickedCards.toggle('open', 'show', 'match');
}

function noMatch(){
  arrClickedCards.toggle('open', 'show');
}

function endOfGame(){
let allMatchedCards = document.querySelectorAll('match')
let arrAllMatchedCards = [];

  arrAllMatchedCards.push(...allMatchedCards);

  if(arrAllMatchedCards.length === "16") {
    // display message with final score
  }

  // else (continue game)

}

// function matchCards(){
//     if(arrOpen.length === 2 && arrOpen[i] == $(this)){
//     // add  class match to the two items
//
//     else if(arrOpen.length === 2 && arrOpen[i] !== $(this) {
//       // toggle open class to the open Cards
//     }
//
//     else (arrOpen.length === 1)

      // add class Open to the card --> call function openCards??

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
