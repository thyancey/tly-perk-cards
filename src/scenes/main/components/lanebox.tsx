import styled, { css } from 'styled-components';
import { getColor } from '../../../themes';
import { CardDef, CardScaleDef } from '../../../types';
import { Card } from './card';

interface LaneBoxProps {
  selectionActive?: boolean;
}
export const Container = styled.div<LaneBoxProps>`
  position:relative;
  display:inline-block;
  height:33%;
  width:100%;

  ${p => p.selectionActive && css`
    cursor:pointer;
    &:hover{
      ${Bg}{
        /* border-color: ${getColor('black')}; */
        background-color: ${getColor('brown_light')};
      }
    }
  `}
` 

const Bg = styled.div`
  position:absolute;
  border:.25rem dashed ${getColor('white')};
  top:0;
  right:0;
  bottom:0;
  left:0;

  z-index:-1;
`

const CardContainer = styled.div`
  position: relative;
  width:calc(100%-5rem);
  margin-left:5rem;
  height:100%;
`

const Label = styled.div`
  right:1rem;
  top:.5rem;
  position:absolute;
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

  const cardSize = {
    normal: [ .5, .5 ],
    zoom: [ 1, 1 ]
  } as CardScaleDef;

  console.log('lane', laneId, cards);

  return (
    <Container selectionActive={selectionActive} onClick={() => onLaneSelected(laneId)}>
      <Label><span>{laneText}</span></Label>
      <CardContainer>
        {cards.map((cardDef:CardDef, idx: number) => (
          <Card key={idx} offsetIdx={idx} stackType="side-by-side" cardData={cardDef} size={cardSize} />
        ))}
      </CardContainer>
      <Bg/>
    </Container>
  );
}
