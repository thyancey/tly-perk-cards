import styled from 'styled-components';
import { getColor } from '../../themes';
import { Card } from './components/card';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { augmentStats, chooseCard, dealCards, initCards, selectDealtHand, selectDiscardPile, selectDrawPile } from './slice';
import { useEffect, useState } from 'react';
import { CardDef } from '../../types';
import { CardPile } from './components/card-pile';
import { GameStats } from './components/gamestats';
import { LaneZones } from './components/lanezones';

export const Container = styled.div`
  position:absolute;
  left:0;
  top:0;
  bottom:0;
  right:0;
  background-color: ${getColor('black')};
  color: ${getColor('white')};
  z-index:-1;
  padding-top:10rem;
  z-index:1;
`

export const Modal = styled.div`
  width:80%;
  height:80%;
  position:absolute;
  left:10%;
  top:10%;
  border: .5rem solid ${getColor('grey_dark')};
  background-color: ${getColor('brown_dark')};

  border-radius: 1rem;
`

export const Titletext = styled.div`
  height:5%;
  width:100%;
  text-align:center;

  color: ${getColor('brown_light')}
`
export const CardContainer = styled.div`
  width:100%;
  height:60%;
`
export const DetailContainer = styled.div`
  height:5%;
  width:100%;
  text-align:center;
`
export const LaneContainer = styled.div`
  height:30%;
  width:100%;
  text-align:center;
`

export const DealButton = styled.button`
  position:absolute;
  bottom:2rem;
  width: 80%;
  left: 10%;
  background: none;
  border: none;

  padding: 1rem 2rem;

  background-color: ${getColor('green')};
  color: ${getColor('brown_light')};
  border: .5rem solid ${getColor('grey_dark')};
  font-weight: bold;
  font-size: 3rem;

  border-radius: 1rem;

  cursor: pointer;
  &:hover{
    background-color: ${getColor('green_light')};
    color: ${getColor('brown_dark')};
  }
  &:active{
    background-color: ${getColor('green')};
  }
`
export const CardWrapper = styled.div`
  display: inline-block;
  width:33%;
  height: 100%;

  position:relative;

  padding: 1rem;
`
export const DrawPile = styled.div`
  position: absolute;
  left:0;
  width:10rem;
  height:20rem;
  z-index:1;
`
export const DiscardPile = styled.div`
  position: absolute;

  right:5rem;
  width:10rem;
  height:20rem;
  z-index:1;
`


export function Main() {
  const dispatch = useAppDispatch();
  const [ heldCardIdx, setHeldCardIdx ] = useState(-1);
  const dealtHand = useAppSelector(selectDealtHand);
  const drawPile = useAppSelector(selectDrawPile);
  const discardPile = useAppSelector(selectDiscardPile);


  useEffect(() => {
    dispatch(initCards());
  }, []);
  
  const onDealButton = () => {
    dispatch(dealCards());
  }

  const onCardSelected = (cardIdx: number) => {
    setHeldCardIdx(cardIdx);
  }

  const onLaneSelected = (laneId: number) => {
    console.log('selectedLane', laneId)
    setHeldCardIdx(-1);
    if(heldCardIdx > -1){
      const heldCard = dealtHand[heldCardIdx];
      for(let i = 0; i < heldCard.modifiers.length; i++){
        dispatch(augmentStats(heldCard.modifiers[i]));
        dispatch(chooseCard({
          handIdx: heldCard.deckIdx, 
          laneId: laneId
        }));
      }
    }
  }

  return (
    <Container>
      <GameStats />
      <DrawPile>
        <CardPile cards={drawPile} isFaceDown={true} />
      </DrawPile>
      <DiscardPile>
        <CardPile cards={discardPile} />
      </DiscardPile>
      <Modal>
        <Titletext>
          <h2>{'CHOOSE SOME CARDS'}</h2>
        </Titletext>
        <CardContainer>
          { dealtHand.map((cardDef:CardDef, idx: number) => (
            <CardWrapper key={idx}>
              <Card cardIdx={idx} cardData={cardDef} onCardSelected={onCardSelected} />
            </CardWrapper>
          )) }
        </CardContainer>
        <DetailContainer><p>{
          heldCardIdx > -1 ? 'SELECT A LANE' : ''
        }</p></DetailContainer>
        <LaneContainer>
          <LaneZones selectionActive={heldCardIdx > -1} onLaneSelected={onLaneSelected} />
        </LaneContainer>
      </Modal>
      <DealButton onClick={onDealButton}>{'DEAL'}</DealButton>
    </Container>
  );
}
