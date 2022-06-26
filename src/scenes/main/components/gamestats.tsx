import styled from 'styled-components';
import { getColor } from '../../../themes';
import { useAppSelector } from '../../../app/hooks';
import { selectGameStats } from '../slice';


export const Container = styled.div`
  position:absolute;
  width:100%;
  top:0;
  background-color: ${getColor('white')};
  color: ${getColor('black')};
`

export function GameStats() {
  const gameStats = useAppSelector(selectGameStats);
  if(!gameStats) return null;

  return (
    <Container>
      {
        gameStats.map(gs => (
          <p key={gs.stat}>{`${gs.stat}: ${gs.value}`}</p>
        ))
      }
    </Container>
  );
}
