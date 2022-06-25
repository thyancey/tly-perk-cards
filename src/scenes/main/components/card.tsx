import { useState } from 'react';
import styled, { css } from 'styled-components';
import { getColor } from '../../../themes';
import { CardDef } from '../../../types';
import { CardDetails } from './card-details';

type ContainerProps = {
  isTiny?: boolean
}

export const FaceDownCard = styled.div<ContainerProps>`
  position:absolute;
  width: 20rem;
  height: 34rem;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transform-origin: top;

  background-color: ${getColor('blue')};
  border-radius: 2rem;
  border: .5rem solid ${getColor('grey')};
  
  ${p => p.isTiny && css`
    transform: scale(.5, .5) translate(-50%, -50%);

    &:hover{
      transform: scale(.5, .5) translate(-50%, -50%);
    }
  `}
`

export const Container = styled.div<ContainerProps>`
  position:absolute;
  width: 20rem;
  height: 34rem;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transform-origin: top;

  background-color: ${getColor('white')};
  border-radius: 2rem;
  border: .5rem solid ${getColor('grey')};
  
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
    background-color:black;
    padding: .5rem;

    >p{
      font-size: 1.5rem;
      text-align:center;
    }
  }
`
export const DescriptionContainer = styled.div`
  height:45%;
  width:100%;
  padding:1rem 1rem;
`
type CardImageProps = {
  url: string
}

export const CardImage = styled.div<CardImageProps>`
  width:100%;
  height:100%;
  background: url(${p => p.url}) no-repeat center;
  background-size:cover;
  
  border-radius: 2rem 2rem 0 0;
`

export const CardFrame = styled.div`
  border-radius: 1rem;
  background-color: ${getColor('white')};
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  z-index:-1;
`

type Props = {
  cardData: CardDef,
  offsetIdx?: number,
  isFaceDown?: boolean
}

export function Card({ cardData, offsetIdx, isFaceDown }: Props) {
  const style = offsetIdx !== undefined ? { left: offsetIdx * 5, top: offsetIdx * 5 } : {};

  if(isFaceDown){
    return (
      <FaceDownCard style={style} isTiny={offsetIdx !== undefined}/>
    )
  }

  return (
    <Container style={style} isTiny={offsetIdx !== undefined}>
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
      <CardFrame />
    </Container>
  );
}
