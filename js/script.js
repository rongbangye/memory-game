// display 12 cards

// card data
const cardsArray = [
    {
      name: 'shell',
      img: 'img/blueshell.png',
    },
    {
      name: 'star',
      img: 'img/star.png',
    },
    {
      name: 'bobomb',
      img: 'img/bobomb.png',
    },
    {
      name: 'mario',
      img: 'img/mario.png',
    },
    {
      name: 'luigi',
      img: 'img/luigi.png',
    },
    {
      name: 'peach',
      img: 'img/peach.png',
    },
    {
      name: '1up',
      img: 'img/1up.png',
    },
    {
      name: 'mushroom',
      img: 'img/mushroom.png',
    },
    {
      name: 'thwomp',
      img: 'img/thwomp.png',
    },
    {
      name: 'bulletbill',
      img: 'img/bulletbill.png',
    },
    {
      name: 'coin',
      img: 'img/coin.png',
    },
    {
      name: 'goomba',
      img: 'img/goomba.png',
    },
  ]

  // grab the div with the an id of root - game
  const game = document.getElementById('game')

  // create a section with a class of grind
  const grid = document.createElement('section')
  grid.setAttribute('class', 'grid')

  // Append the grid section to the game div
  game.appendChild(grid)

  // for each item in the cardsArray
  // cardsArray.forEach(item => {
  //   const card = document.createElement('div')

  //   card.classList.add('card')

  //   // set the data-name attribute of the div to the cardsArray name
  //   card.dataset.name = item.name

  //   card.style.backgroundImage = `url(${item.img})`

  //   // append the div to the grind section
  //   grid.appendChild(card)
  // })

  // duplicate the cardsArray array that match for each card
  let gameGrid = cardsArray.concat(cardsArray)

  // Randomize the display of cards 
  // shuffle the array using sort() and Math.random()
  gameGrid.sort(() => Math.random() - 0.5);


  // for reach item in the gameGrib array
  gameGrid.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('card')
    // set the data-name attribute of the div to the cardsArray name
    card.dataset.name = item.name
    // Version 9: In order to implement the flip, each div will need to consist of three divs
    const front = document.createElement('div')
    front.classList.add('front')

    // create back of card
    const back = document.createElement('div')
    back.classList.add('back')



    card.style.backgroundImage = `url(${item.img})`

    // append the div to the grind section
    grid.appendChild(card)
    card.appendChild(front)
    card.appendChild(back)
  })

// Only allow two cards to be selected at a time
// we need to store the guesses and counter
let count = 0
// add a place to store the first and second guessess 
let firstGuess = ''
let secondGuess = ''
// to fix click on the same element twice, use previousTarget
let previousTarget = null
 
let delay = 1200

// add an event listener to the entire grid.
// anytime an element is clicked, the selected class will be apply
grid.addEventListener('click', function(event) {
  // the event target is our clicked item
  let clicked = event.target

  // add the check to our return 
  if (clicked.nodeName === 'SECTION' || 
      clicked === previousTarget ||
      clicked.parentNode.classList.contains('selected')
  ){
    return
  }

  // Do not allow the grid section itself to be selected
  // only select divs inside the grid
  if (clicked.nodeName === 'SECTION') {
    return
  }

  // add selected class
  // clicked.classList.add('selected')

  // modify the event listener to have an if statement that counts to two
  if(count < 2) {
    count ++
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name
      console.log(firstGuess)
      clicked.parentNode.classList.add('selected')
    } else {
      secondGuess = clicked.parentNode.dataset.name
      console.log(secondGuess)
      clicked.parentNode.classList.add('selected')
    }
    // if bot guessess are not empty
    if (firstGuess !== '' && secondGuess !== '') {
      // if the first guess match the second guess
      if (firstGuess === secondGuess) {
        // run match function
        match();
        resetGuessess();
      } else {
        resetGuessess();
      }
    }

    // add delay
    if (firstGuess === secondGuess) {
      setTimeout(match, delay)
      setTimeout(resetGuessess, delay)
    } else {
      setTimeout(resetGuessess, delay)
    }
      // assign the clicked value to the previousTarget after the first click
      previousTarget = clicked;
  }
})


// function for matching elements, loop through all selected elements when called, then add match class
const match = () => {
  var selected = document.querySelectorAll('.selected')
  selected.forEach(card => {
    card.classList.add('match')
  })
}

// function to reset the guess count after two guessess. 
const resetGuessess = () => {
  firstGuess = ''
  secondGuess = ''
  count = 0

  var selected = document.querySelectorAll('.selected')
  selected.forEach(card => {
    card.classList.remove('selected')
  })
}



