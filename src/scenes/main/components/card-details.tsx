import styled from 'styled-components';
import { getColor } from '../../../themes';
import { CardModifier } from '../../../types';

export const Container = styled.div`
`

export const CardDescription = styled.p`
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
  return (
    <Container>
      <CardDescription>{description}</CardDescription>
      <ModifierContainer>
        {modifiers.map((m, i) => (
          <Modifier key={m.type}>
            <div>
              <span>{`${m.type}:`}</span>
              <span>{m.value}</span>
            </div>
          </Modifier>
        ))}
      </ModifierContainer>
    </Container>
  );
}
