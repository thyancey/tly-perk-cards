import styled from 'styled-components';
import { getColor } from '../../themes';
import { Card } from './components/card';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { dealCards, initCards, selectDealtHand, selectDiscardPile, selectDrawPile } from './slice';
import { useEffect } from 'react';
import { CardDef } from '../../types';
import { CardPile } from './components/card-pile';

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
  border: 1rem solid white;
`

export const Titletext = styled.div`
  height:8%;
  width:100%;
  text-align:center;
`
export const CardContainer = styled.div`
  width:100%;
  height:80%;
`
export const DetailContainer = styled.div`
  height:12%;
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
  color: ${getColor('white')};
  font-weight: bold;
  font-size: 3rem;

  border-radius: 2rem;

  cursor: pointer;
  &:hover{
    background-color: ${getColor('blue')};
  }
  &:active{
    background-color: ${getColor('purple')};
  }
`
export const CardWrapper = styled.div`
  display: inline-block;
  width:33%;
  height: 100%;
  color: ${getColor('blue')};

  position:relative;

  padding: 1rem;
`
export const DrawPile = styled.div`
  position: absolute;
  left:0;
  width:10rem;
  height:20rem;
`
export const DiscardPile = styled.div`
  position: absolute;

  right:0;
  width:10rem;
  height:20rem;
`


export function Main() {
  const dispatch = useAppDispatch();
  const dealtHand = useAppSelector(selectDealtHand);
  const drawPile = useAppSelector(selectDrawPile);
  const discardPile = useAppSelector(selectDiscardPile);

  console.log('discarded', discardPile)

  useEffect(() => {
    dispatch(initCards());
  }, []);
  
  const onDealButton = () => {
    dispatch(dealCards());
  }

  return (
    <Container>
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
            <CardWrapper>
              <Card key={idx} cardData={cardDef}/>
            </CardWrapper>
          )) }
        </CardContainer>
        <DetailContainer><p>{'Something something extra text.. details?'}</p></DetailContainer>
      </Modal>
      <DealButton onClick={onDealButton}>{'DEAL'}</DealButton>
    </Container>
  );
}
