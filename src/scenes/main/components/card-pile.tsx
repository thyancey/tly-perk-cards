import styled from 'styled-components';
import { Card } from './card';
import { CardDef } from '../../../types';
import { CardBack } from './card-back';

export const Container = styled.div`
  position:relative;
  margin-top:10rem;
`

type Props = {
  cards: CardDef[];
  isFaceDown?: boolean;
}

export function CardPile({ cards, isFaceDown }: Props) {
  return (
    <Container>
      { 
        cards.map((cardDef:CardDef, idx: number) => {
          return isFaceDown ? (
            <CardBack key={idx} offsetIdx={idx} />
          ) : (
            <Card key={idx} offsetIdx={idx} cardData={cardDef} />
          );
        })
      }
    </Container>
  );
}
