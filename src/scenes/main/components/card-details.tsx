import styled from 'styled-components';
import { getColor } from '../../../themes';
import { CardModifier } from '../../../types';

export const Container = styled.div`
  padding: 4rem 2rem;
`

export const CardDescription = styled.p`
  color: ${getColor('black')};
  text-align:center;
`

export const ModifierContainer = styled.ul`
  padding: 1rem;
  border-radius:.5rem;
  box-shadow: -.25rem -.25rem solid black;
`

export const Modifier = styled.li`
  span{
    font-size:1.3rem;
  }

  span:first-child{
    color:red;
    font-weight: bold;
  }

  span:last-child{
    color:green;
    margin-left:1rem;
  }
`

type Props = {
  description: string,
  modifiers: CardModifier[]
}

export function CardDetails({ description, modifiers }: Props) {
  const showModifier = false;

  return (
    <Container>
      <CardDescription>{description}</CardDescription>
      {showModifier && (<ModifierContainer>
        {modifiers.map((m, i) => (
          <Modifier key={m.effect.stat}>
            <div>
              <span>{`${m.effect.stat}:`}</span>
              <span>{m.effect.value}</span>
            </div>
          </Modifier>
        ))}
      </ModifierContainer>)}
    </Container>
  );
}
