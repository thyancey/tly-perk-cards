 
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
export type ModifierType = 'health' | 'damage';
 
 /** A basic card 
  *
  *
  * */
export type CardDef = {
  title: string,
  description: string,
  img?: string,
  modifiers: CardModifier[]
}

export type CardStatus = {
  id: string,
  deckIdx: number,
  dealt: boolean,
  active: boolean
}

export type CardModifier = {
  type: ModifierType,
  value: number
}

export type GameStats = {
  [key: string]: CardModifier
}