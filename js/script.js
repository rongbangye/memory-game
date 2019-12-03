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