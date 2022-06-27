import styled, { css } from 'styled-components';
import { CARD_HEIGHT, CARD_WIDTH, getColor } from '../../themes';
import { Card } from './components/card';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { augmentStats, chooseCard, dealCards, initCards, selectDealtHand, selectDiscardPile, selectDrawPile } from './slice';
import { useEffect, useMemo, useState } from 'react';
import { CardDef, CardScaleDef } from '../../types';
import { CardPile } from './components/card-pile';
import { GameStats } from './components/gamestats';
import { LaneZones } from './components/lanezones';

const Container = styled.div`
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
interface ModalProps {
  isLaneMode?: boolean;
}
const LaneModeCover = styled.div<ModalProps>`
  opacity:0;
  pointer-events:none;
  
  display:block;
  position:fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  z-index:1;
  ${p => p.isLaneMode && css`
    pointer-events:all;

    background-color: ${getColor('black')};
    opacity: .8;
    transition: opacity .2s ease-out;
  `}
`

const Modal = styled.div<ModalProps>`
  width:80%;
  height:80%;
  position:absolute;
  left:10%;
  top:10%;
  border: .5rem solid ${getColor('grey_dark')};
  background-color: ${getColor('brown_dark')};

  ${p => p.isLaneMode && css`
    border: .5rem solid ${getColor('grey_dark')};
    background-color: ${getColor('black')};
  `}

  border-radius: 1rem;
`
const CardContainer = styled.div`
  width:40%;
  height:75%;

  z-index:1;
`
const DetailContainer = styled.div`
  height:10%;
  width:100%;
  text-align:center;
`
const LaneContainer = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:90%;
  width:60%;
  text-align:center;
`

type CardWrapperProps = {
  size: CardScaleDef;
}
const CardWrapper = styled.div<CardWrapperProps>`
  display: inline-block;
  width: 50%;
  height: 83%;

  width: ${CARD_WIDTH};
  height: ${CARD_HEIGHT};
  
  transform: scale(${p => p.size.normal[0]}, ${p => p.size.normal[1]});

  position:relative;

  padding: 1rem;
  margin-bottom:-5rem;

  &:hover{
    z-index:1;
  }
`

const CardStacks = styled.div`
  width:40%;
  height:15%;

  >div{
    padding:2rem;
    display:inline-block;
    vertical-align: bottom;
    width:50%;
  }
`
const DrawPile = styled.div`
  width:10rem;
  height:20rem;
`
const DiscardPile = styled.div`
  width:10rem;
  height:20rem;
`
const Header = styled.div`
  height:10%;
  width:60%;
  margin-left:40%;
  text-align:center;

  color: ${getColor('brown_light')};

  >h2{
    position:fixed;
    z-index:3;
  }
`
const Body = styled.div`
  height:90%;
  width:100%;
  position:relative;
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

  const isLaneMode = useMemo(() => heldCardIdx > -1, [ heldCardIdx ]);


  const tableCardSize = {
    normal: [ 0.9, 0.9 ],
    zoom: [ 1.3, 1.3 ]
  } as CardScaleDef;

  return (
    <Container>
      <GameStats />
      <Modal isLaneMode={isLaneMode}>
        <Header>
          {isLaneMode ? (
            <h2>{'SELECT A LANE'}</h2>
          ):(
            <h2>{'CHOOSE SOME CARDS'}</h2>
          )}
        </Header>
        <Body>
          <CardStacks>
            <DrawPile>
              <CardPile cards={drawPile} isFaceDown={true} onClickCard={onDealButton} isDisabled={dealtHand.length > 0}/>
            </DrawPile>
            <DiscardPile>
              <CardPile cards={discardPile} />
            </DiscardPile>
          </CardStacks>
          <CardContainer>
            { dealtHand.map((cardDef:CardDef, idx: number) => (
              <CardWrapper key={idx} size={tableCardSize}>
                <Card cardIdx={idx} cardData={cardDef} onCardSelected={onCardSelected} size={tableCardSize} />
              </CardWrapper>
            )) }
          </CardContainer>
          <DetailContainer><p>{
            'Some details can go here?'
          }</p></DetailContainer>
          <LaneModeCover isLaneMode={isLaneMode} />
          <LaneContainer>
            <LaneZones selectionActive={isLaneMode} onLaneSelected={onLaneSelected} />
          </LaneContainer>
        </Body>
      </Modal>
    </Container>
  );
}
