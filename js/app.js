/*
 * Create a list that holds all of your cards
 */

const cardDeck = document.querySelector('.deck');
const allCards = document.querySelectorAll('.card');
const allSymbols = document.querySelectorAll('.i');
let symbolArray = [];
let openCards = [];
let cardArray = [];

for(let i = 0; i<allCards.length; i++) {
  cardArray.push(allCards[i]);
}

for(let i = 0; i<allSymbols.length; i++) {
  symbolArray.push(allSymbols[i]);
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976


// Issues with identifiers, work only sporadically


function shuffle(cardArray) {
    var currentIndex = cardArray.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cardArray[currentIndex];
        cardArray[currentIndex] = cardArray[randomIndex];
        cardArray[randomIndex] = temporaryValue;
    }

    return cardArray;
    makeDeck(cardArray);
}



// needs to be tested in console --> only remakes the deck not the cards;
function makeDeck(cardArray) {
  const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

// remove the HTML structure of the cards in order to add the shuffled ones
  cardDeck.remove('i');

// by removing the i tags, the entire list container is removed as well, so I need to add that back in
  document.querySelector('.score-panel').insertAdjacentHTML('afterend', "<ul class = 'deck'></ul>");

//  looping through the array of cards to extract the HTML structure including the symbol, to then add it to the HTML
    for (let i = 0; i < cardArray[i].length; i++) {

          let cardHTML = cardArray[i].outerHTML;

          fragment.insertAdjacentHTML('beforeend', "cardHTML");
        }

      document.cardDeck.appendChild(fragment);

}




// reset grid on click !!! ONLY CONSOLE LOG TEST WORKS at the moment
let restart = document.querySelector('.fa-repeat')

restart.addEventListener('click', function shuffle(cardArray) {
  console.log("the button was clicked");
});



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
