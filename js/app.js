$(document).ready(function () {

    let cards = document.querySelectorAll('.card');
    let cardsOpen = document.querySelectorAll('.open');
    let arrOpenCards = [];

    let allMatchedCards = document.querySelectorAll('.match');
    let arrAllMatchedCards = [];

    var timerId;
    var closeTimer;
    var startTime;
    var moves = 0;
    var stars =[];

    const cardDeck = document.querySelector('.deck');
    const cardArray = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"];



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

        arrOpenCards = [];
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

    restart.addEventListener('click', function () {
        init();
    });

    let button = document.querySelector('.button');

    button.addEventListener('click', function () {
        button.style.display = "none";
        init();

    });

// * Add event Listener to card deck with delegation to its child nodes
    cardDeck.addEventListener('click', function (event) {
        // Ignore clicks on the deck
        if (event.target.id == "deck") {
            return;
        }

        // Check for previously open cards
        if (arrOpenCards.length === 2) {
            clearInterval(closeTimer);
            clearCards();
        }

        turnCard();
        listOpenCards();

        // Check for first move
        if (moves === 0 && arrOpenCards.length === 1) {
            timerId = startTiming();
        }

        if (arrOpenCards.length === 2) {
            moves++;
            updateMovesDisplay()
            checkMatch();
        }

    })

    function checkMatch() {
        if (arrOpenCards[0].innerHTML !== arrOpenCards[1].innerHTML) {

            arrOpenCards[0].classList.add('flash');
            arrOpenCards[1].classList.add('flash');

            closeTimer = noMatch();
        } else {
            match();
            listMatchedCards();
        }
    }

    function turnCard() {
        event.target.classList.add('open', 'show');
    }

    function listOpenCards() {
        cardsOpen = document.querySelectorAll('.open');
        arrOpenCards = [];

        arrOpenCards.push(...cardsOpen
    )
        ;
    }

    function match() {
        arrOpenCards[0].classList.remove('open', 'show');
        arrOpenCards[1].classList.remove('open', 'show');
        arrOpenCards[0].classList.add('match');
        arrOpenCards[1].classList.add('match');
        arrOpenCards = [];
    };

    function noMatch() {
        return setTimeout(function () {
            clearCards();
        }, 1800);
    }

    function clearCards() {
          arrOpenCards[0].classList.remove('open', 'show');
          arrOpenCards[1].classList.remove('open', 'show');

          arrOpenCards[0].classList.remove('flash');
          arrOpenCards[1].classList.remove('flash');

          arrOpenCards = [];
    }

    function listMatchedCards() {
        allMatchedCards = document.querySelectorAll('.match');
        arrAllMatchedCards = [];

        arrAllMatchedCards.push(...allMatchedCards);

        if (arrAllMatchedCards.length === 16) {
            overlayOn();
        }
    }

    function overlayOn() {
        overlay = document.querySelector('#overlay');
        button = document.querySelector('.button');

        overlay.style.display = "block";
        button.style.display = "inline-block";

        document.querySelector(".stats_time").textContent = document.querySelector('.time').textContent

        document.querySelector(".stats_moves").textContent = moves + " Moves";

        overlayStars();
        }


    function overlayStars (){
      let stars = document.querySelectorAll('.fa-star');

        for (let i = 0; i < stars.length; i++) {
            let statsStar = document.querySelector(".stats_stars");
            let starHTML = document.createElement('i');

            starHTML;
            starHTML.classList.add('fa', 'fa-star');
            statsStar.appendChild(starHTML);
        }

        for (let i = 0; i < (5 - stars.length); i++){
            let statsStar = document.querySelector(".stats_stars");
            let starHTMLo = document.createElement('i');

            starHTMLo;
            starHTMLo.classList.add('fa', 'fa-star-o');
            statsStar.appendChild(starHTMLo);

        }
    }

    function overlayOff() {
        overlay.style.display = "none";
    }

    function updateMovesDisplay(){
        document.querySelector(".moves").textContent = moves;

        let movesTitle = document.querySelector(".movesTitle");

        if (moves == 1) {
            movesTitle.textContent = "Move";
        } else {
            movesTitle.textContent = "Moves";
        }

        if (moves % 5 === 0 && moves > 10) {
            let stars = document.querySelectorAll('.fa-star');
            if(stars.length>0) {
                let lastStar = stars[stars.length - 1];
                lastStar.classList.remove('fa-star');
                lastStar.classList.add('fa-star-o');
            }
        }
    }

    function startTiming() {
        start = new Date;
        let time = document.querySelector('.time');
        timerId = setInterval(function () {
            time.textContent = (Math.round((new Date - start) / 1000) + " Seconds");
        }, 1000);

        return timerId;
    }

    function resetStars(){
        let emptyStars = document.getElementsByClassName('fa-star-o');
            for (let i = 0; i < emptyStars.length; i++) {

            emptyStars[i].classList.add('fa-star');
            emptyStars[i].classList.remove('fa-star-o');
            }

    }


    function init() {
        // Reset moves
        moves = 0;
        updateMovesDisplay();

        // Reset timer
        clearInterval(timerId);
        document.querySelector('.time').textContent = "0 Seconds";

        // Reset cards
        makeDeck();

        //Reset stars
        resetStars();

        //reset popup window
        let statsStar = document.querySelector('.stats_stars');

        while (statsStar.hasChildNodes()) {
                statsStar.removeChild(statsStar.lastChild);
            }


    }

    init();
})
