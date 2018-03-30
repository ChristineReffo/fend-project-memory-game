/*
 * Create a list that holds all of your cards
 */
const cardDeck = document.querySelector('.deck');
const allCards = document.querySelectorAll('.card');
let openCards = [];
let cardArray = [];

for(let i = 0; i<allCards.length; i++) {
  cardArray.push(allCards[i]);
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
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

//**Destructure the array of shuffled cards to get to their HTML**//



// needs to be tested in console//

function makeDeck(cardArray) {
    const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

    cardDeck.empty();

    for (let i = 0; i < cardArray.length; i++) {
          return cardArray[i];

          fragment.appendChild(cardArray[i]);

}
          cardDeck.appendChild(fragment);
}



// reset grid on click
let restart = document.querySelector('.restart')

restart.addEventListener('click', shuffle());



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