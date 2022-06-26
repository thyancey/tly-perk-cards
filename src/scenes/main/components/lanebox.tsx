import styled, { css } from 'styled-components';
import { getColor } from '../../../themes';
import { CardDef } from '../../../types';
import { CardPile } from './card-pile';

interface LaneBoxProps {
  selectionActive?: boolean;
}
export const Container = styled.div<LaneBoxProps>`
  border: .25rem dashed ${getColor('white')};
  display:inline-block;
  height:100%;
  width:33%;

  ${p => p.selectionActive && css`
    cursor:pointer;
    &:hover{
      border-color: ${getColor('brown_dark')};
      background-color: ${getColor('brown_light')};
    }
  `}
` 
interface Props {
  selectionActive?: boolean;
  onLaneSelected: Function;
  cards: CardDef[];
  laneId: number;
}

const getLaneText = (laneId:number) => {
  switch(laneId){
    case 1: return 'TOP LANE';
    case 2: return 'MIDDLE LANE';
    case 3: return 'BOTTOM LANE';
    default: return '??';
  }
}

export function LaneBox({ selectionActive, onLaneSelected, cards, laneId }: Props) {
  const laneText = getLaneText(laneId);

  console.log('lane', laneId, cards);

  return (
    <Container selectionActive={selectionActive} onClick={() => onLaneSelected(laneId)}>
      {laneText}
      <CardPile stackType="spread" cards={cards} />
    </Container>
  );
}
