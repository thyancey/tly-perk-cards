import styled from 'styled-components';
import { getColor } from '../../themes';
import { Card } from './components/card';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { initCards, selectHand } from './slice';
import { useEffect } from 'react';
import { CardDef } from '../../types';

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

export function Main() {
  const dispatch = useAppDispatch();
  const hand = useAppSelector(selectHand);
  useEffect(() => {
    dispatch(initCards());
  }, []);
  
  return (
    <Container>
      <Modal>
        <Titletext>
          <h2>{'CHOOSE SOME CARDS'}</h2>
        </Titletext>
        <CardContainer>
          { hand.map((cardDef:CardDef, idx: number) => (
            <Card key={idx} cardData={cardDef}/>
          )) }
        </CardContainer>
        <DetailContainer><p>{'Something something extra text.. details?'}</p></DetailContainer>
      </Modal>
    </Container>
  );
}
