export const DECK_DATA: any = [
  {
    title: 'CURSED DORITOS',
    description: 'A snake with doritos',
    img: 'assets/cards/alien-doritos.jpg',
    modifiers:[
      {
        type: 'health',
        value: 1.2
      },
      {
        type: 'damage',
        value: -1.3
      }
    ]
  },
  {
    title: 'SPACE BANANA',
    description: `Bananas don't rot in space`,
    img: 'assets/cards/banana-astro.jpg',
    modifiers:[
      {
        type: 'health',
        value: 1.1
      },
      {
        type: 'damage',
        value: -1.4
      }
    ]
  },{
    title: 'ANCIENT SLAYER',
    description: 'Dragons love blood',
    img: 'assets/cards/dragon.jpg',
    modifiers:[
      {
        type: 'health',
        value: 3.1
      },
      {
        type: 'damage',
        value: 50.0
      }
    ]
  }
]