import styled, { css } from 'styled-components';
import { useAppSelector } from '../../../app/hooks';
import { getColor } from '../../../themes';
import { selectLaneCards } from '../slice';
import { LaneBox } from './lanebox';

export const Container = styled.div`
  position:relative;
  width:100%;
  height:100%;
`
interface Props {
  selectionActive?: boolean;
  onLaneSelected: Function;
}

export function LaneZones({ selectionActive, onLaneSelected }: Props) {

  const laneCards = useAppSelector(selectLaneCards);
  console.log('laneCards', laneCards)
  
  return (
    <Container>
      <LaneBox 
        selectionActive={selectionActive}
        onLaneSelected={onLaneSelected}
        cards={laneCards[1]}
        laneId={1} />
      <LaneBox 
        selectionActive={selectionActive}
        onLaneSelected={onLaneSelected}
        cards={laneCards[2]}
        laneId={2} />
      <LaneBox 
        selectionActive={selectionActive}
        onLaneSelected={onLaneSelected}
        cards={laneCards[3]}
        laneId={3} />
    </Container>
  );
}
