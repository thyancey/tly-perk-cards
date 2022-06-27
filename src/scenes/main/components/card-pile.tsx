import styled from 'styled-components';
import { Card } from './card';
import { CardDef, CardScaleDef } from '../../../types';
import { CardBack } from './card-back';

export const Container = styled.div`
  position:relative;
`

type Props = {
  cards: CardDef[];
  isFaceDown?: boolean;
  stackType?: string;
  onClickCard?: Function;
  isDisabled?: boolean;
}

export function CardPile({ cards, isFaceDown, onClickCard, isDisabled }: Props) {
  const cardSize = {
    normal: [ .5, .5 ],
    zoom: [ .5, .5 ]
  } as CardScaleDef;

  const onClickCardBack = () => {
    if(!isDisabled && onClickCard) onClickCard();
  }

  return (
    <Container>
      { 
        cards.map((cardDef:CardDef, idx: number) => {
          return isFaceDown ? (
            <CardBack key={idx} offsetIdx={idx} size={cardSize} isDisabled={isDisabled} onClickCard={onClickCardBack}/>
          ) : (
            <Card key={idx} offsetIdx={idx} cardData={cardDef} size={cardSize} onClickCard={onClickCard}/>
          );
        })
      }
    </Container>
  );
}
