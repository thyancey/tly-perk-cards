export const ALL_CARDS_MAP: any = {
  "DORITO_SNAKE": {
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
  "SPACE_BANANA": {
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
  },
  "BLOOD_DRAGON": {
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
};

export const DECK_DATA: any = [
  {
    id: 'DORITO_SNAKE',
    idx: 0,
    count: 5
  },
  {
    id: 'SPACE_BANANA',
    idx: 1,
    count: 2
  },
  {
    id: 'BLOOD_DRAGON',
    idx: 2,
    count: 1
  }
];