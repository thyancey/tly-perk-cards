export const ALL_CARDS_MAP: any = {
  "RACCOON_BITE": {
    title: 'CURSED MASK',
    description: 'Raccoon bites in this lane do +2 damage.',
    img: 'assets/cards/raccoon-trapper/status-card-contents1.png',
    frame:{
      overlayImg: 'assets/cards/raccoon-trapper/status-card-frame.png',
      bgImg: 'assets/cards/raccoon-trapper/status-card-frame-opaque.png',
    },
    modifiers:[
      {
        type: 'add',
        stat: 'biteDamage',
        value: 2
      }
    ]
  },
  "RACCOON_LOVE": {
    title: 'RACCOON LOVE',
    description: 'Raccoons in this lane stay tame for 1 second longer.',
    img: 'assets/cards/raccoon-trapper/status-card-contents2.png',
    frame:{
      overlayImg: 'assets/cards/raccoon-trapper/status-card-frame.png',
      bgImg: 'assets/cards/raccoon-trapper/status-card-frame-opaque.png',
    },
    modifiers:[
      {
        type: 'add',
        stat: 'loveDuration',
        value: 1
      }
    ]
  },
  "RACCOON_JUMP": {
    title: 'RACCOON LOVE',
    description: 'Raccoons in this lane can hop.',
    img: 'assets/cards/raccoon-trapper/status-card-contents3.png',
    frame:{
      overlayImg: 'assets/cards/raccoon-trapper/status-card-frame.png',
      bgImg: 'assets/cards/raccoon-trapper/status-card-frame-opaque.png',
    },
    modifiers:[
      {
        type: 'boolean',
        stat: 'canJump',
        value: true
      }
    ]
  },
  "RACCOON_CORPSE_BUFFET": {
    title: 'ROTTING BUFFET',
    description: 'Raccoons corpses in this lane act as food bowls.',
    img: 'assets/cards/raccoon-trapper/status-card-contents4.png',
    frame:{
      overlayImg: 'assets/cards/raccoon-trapper/status-card-frame.png',
      bgImg: 'assets/cards/raccoon-trapper/status-card-frame-opaque.png',
    },
    modifiers:[
      {
        type: 'boolean',
        stat: 'corpseBuffet',
        value: true
      }
    ]
  },
  "RACCOON_FEED": {
    title: 'CHOW DOWN',
    description: 'Raccoons in this lane eat 20% faster.',
    img: 'assets/cards/raccoon-trapper/status-card-contents5.png',
    frame:{
      overlayImg: 'assets/cards/raccoon-trapper/status-card-frame.png',
      bgImg: 'assets/cards/raccoon-trapper/status-card-frame-opaque.png',
    },
    modifiers:[
      {
        type: 'add',
        stat: 'feedSpeed',
        value: .2
      }
    ]
  },
  "RACCOON_SPAWNRATE": {
    title: 'CROWDED NURSERY',
    description: '30% more raccoons in this lane.',
    img: 'assets/cards/raccoon-trapper/status-card-contents6.png',
    frame:{
      overlayImg: 'assets/cards/raccoon-trapper/status-card-frame.png',
      bgImg: 'assets/cards/raccoon-trapper/status-card-frame-opaque.png',
    },
    modifiers:[
      {
        type: 'add',
        stat: 'spawnRate',
        value: .3
      }
    ]
  },
  "REDRACCOON_SPAWN": {
    title: 'RED RACCOONS',
    description: 'Tanukis spawn in this lane.',
    img: 'assets/cards/raccoon-trapper/status-card-contents7.png',
    frame:{
      overlayImg: 'assets/cards/raccoon-trapper/status-card-frame.png',
      bgImg: 'assets/cards/raccoon-trapper/status-card-frame-opaque.png',
    },
    modifiers:[
      {
        type: 'boolean',
        stat: 'feedSpeed',
        value: true
      }
    ]
  },
  "RACCOON_GIBS": {
    title: 'GIBBED',
    description: 'Gibbed raccoons in this lane scare away others.',
    img: 'assets/cards/raccoon-trapper/status-card-contents8.png',
    frame:{
      overlayImg: 'assets/cards/raccoon-trapper/status-card-frame.png',
      bgImg: 'assets/cards/raccoon-trapper/status-card-frame-opaque.png',
    },
    modifiers:[
      {
        type: 'boolean',
        stat: 'gibbedRaccons',
        value: true
      }
    ]
  }
};

export const DECK_DATA: any = [
  {
    id: 'RACCOON_BITE',
    idx: 0,
    count: 5
  },{
    id: 'RACCOON_LOVE',
    idx: 0,
    count: 4
  },{
    id: 'RACCOON_JUMP',
    idx: 0,
    count: 1
  },{
    id: 'RACCOON_CORPSE_BUFFET',
    idx: 0,
    count: 2
  },{
    id: 'RACCOON_FEED',
    idx: 0,
    count: 5
  },{
    id: 'RACCOON_SPAWNRATE',
    idx: 0,
    count: 5
  },{
    id: 'REDRACCOON_SPAWN',
    idx: 0,
    count: 1
  },{
    id: 'RACCOON_GIBS',
    idx: 0,
    count: 2
  }
];