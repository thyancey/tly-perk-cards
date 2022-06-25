import styled from 'styled-components';
import { getColor } from '../../../themes';
import { CardDef } from '../../../types';

export const Container = styled.div`
  display: inline-block;
  margin: 6rem;
  width: 20rem;
  height: 30rem;
  color: ${getColor('blue')};
  box-shadow: .1rem .1rem .25rem .25rem white;

  cursor: pointer;

  &:hover{
    box-shadow: .1rem .1rem .25rem .25rem ${getColor('green')};
  }
`
export const CardTitle = styled.h1`
`
export const CardDescription = styled.p`
`

type Props = {
  cardData: CardDef
}

export function Card({ cardData }: Props) {
  return (
    <Container>
      <CardTitle>{cardData.title}</CardTitle>
      <CardDescription>{cardData.description}</CardDescription>
    </Container>
  );
}
