 
 /** The status of a particular note, in the context of a key/scale/notation.
  * 
  * root: root note of the scale
  * 
  * scale: valid note within the current key/scale
  * 
  * invalid: note outside of the current key/scale
  * 
  * inactive: not applicable here?
  * */

 
export type CardFrame = {
  overlayImg: string;
  bgImg: string;
}

 /** A basic card 
  *
  *
  * */
export type CardDef = {
  title: string;
  description: string;
  img?: string;
  frame: CardFrame;
  modifiers: CardModifier[];
  deckIdx?: number;
}

export type CardStatus = {
  id: string;
  deckIdx: number;
  dealt: boolean;
  dealtAt: number; 
  active: boolean;
  lane?: number;
}

export type ModifierType = 'add' | 'boolean';
export type CardModifier = {
  type: ModifierType;
  effect: CardBooleanStat | CardValueStat;
}

export type RawCardDef = {
  title: string;
  description: string;
  img?: string;
  frame: CardFrame;
  modifiers: RawCardModifier[];
  deckIdx?: number;
}


export type RawCardModifier = {
  type: ModifierType;
  stat: string;
  value: number | boolean;
}

export type CardValueStat = {
  type: 'value';
  stat: string;
  value: number;
}

export type CardBooleanStat = {
  type: 'boolean';
  stat: string;
  value: boolean;
}

export type GameStats = {
  [key: string]: CardValueStat | CardBooleanStat;
}

export type CardDefMap = {
  [key: string]: CardDef
}