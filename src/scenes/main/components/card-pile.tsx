import styled from 'styled-components';
import { Card } from './card';
import { CardDef } from '../../../types';

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
      { cards.map((cardDef:CardDef, idx: number) => (
        <Card offsetIdx={idx} key={idx} cardData={cardDef} isFaceDown={isFaceDown}/>
      )) }
    </Container>
  );
}
