import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useAppDispatch } from '../../../app/hooks';
import { getColor } from '../../../themes';
import { CardDef } from '../../../types';
import { augmentStats } from '../slice';
import { CardDetails } from './card-details';

const CARD_WIDTH = '24rem';
const CARD_HEIGHT = '40rem';

type ContainerProps = {
  isTiny?: boolean
}

export const Container = styled.div<ContainerProps>`
  position:absolute;
  width: ${CARD_WIDTH};
  height: ${CARD_HEIGHT};
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transform-origin: top;

  &:hover{
    transform: scale(1.3, 1.3) rotate(-0.005turn) translate(-50%, -50%);
    transition: transform .2s;
  }

  ${p => p.isTiny && css`
    transform: scale(.5, .5) translate(-50%, -50%);

    &:hover{
      transform: scale(.5, .5) translate(-50%, -50%);
    }
  `}
`
export const ImageContainer = styled.div`
  position:relative;
  height:45%;
  width:100%;
  padding:1rem;
`
export const TitleContainer = styled.div`
  position:relative;
  height:10%;
  width:100%;

  >div{
    min-height: 1rem;

    position:absolute;
    width:100%;
    top:50%;
    transform: translateY(-50%);
    padding: .5rem;
    z-index:2;


    >p{
      font-size: 2rem;
      text-align:center;
      font-weight: bold;
      color: ${getColor('black')};
    }
  }
`
export const DescriptionContainer = styled.div`
  height:45%;
  width:100%;
  padding:1rem 1rem;
`
interface CardImageProps {
  url: string;
}
export const CardImage = styled.div<CardImageProps>`
  width:100%;
  height:100%;
  background: url(${p => p.url}) no-repeat center;
  background-size:cover;
`

export const FrameOverlay = styled.div<CardImageProps>`
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  z-index:1;
  background: url(${p => p.url}) no-repeat center;
  background-size:cover;
`

export const FrameBg = styled.div<CardImageProps>`
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  z-index:-1;
  background: url(${p => p.url}) no-repeat center;
  background-size:cover;
`

type Props = {
  cardData: CardDef,
  offsetIdx?: number,
  isFaceDown?: boolean
}

export function Card({ cardData, offsetIdx }: Props) {
  const dispatch = useAppDispatch();
  const style = offsetIdx !== undefined ? { left: offsetIdx * 5, top: offsetIdx * 5 } : {};

  const onCardClick = () => {
    for(let i = 0; i < cardData.modifiers.length; i++){
      dispatch(augmentStats(cardData.modifiers[i]));
    }
  }

  return (
    <Container style={style} isTiny={offsetIdx !== undefined} onClick={onCardClick}>
      <FrameOverlay url={cardData.frame.overlayImg}/>
      <ImageContainer>
        {cardData.img && <CardImage url={cardData.img}></CardImage>}
      </ImageContainer>
      <TitleContainer>
        <div>
          <p>{cardData.title}</p>
        </div>
      </TitleContainer>
      <DescriptionContainer>
        <CardDetails 
          description={cardData.description}
          modifiers={cardData.modifiers}
        />
      </DescriptionContainer>
      <FrameBg url={cardData.frame.bgImg}/>
    </Container>
  );
}
