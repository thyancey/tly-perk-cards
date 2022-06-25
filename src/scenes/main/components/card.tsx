import { useState } from 'react';
import styled from 'styled-components';
import { getColor } from '../../../themes';
import { CardDef } from '../../../types';
import { CardDetails } from './card-details';

export const Container = styled.div`
  display: inline-block;
  width:33%;
  height: 100%;
  color: ${getColor('blue')};

  position:relative;

  padding: 1rem;

`

const CardBody = styled.div`
  position:absolute;
  width: 20rem;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
  height: 34rem;
  cursor: pointer;
  transform-origin: top;
  
  &:hover{
    transform: scale(1.3, 1.3) rotate(-0.005turn) translate(-50%, -50%);
    transition: transform .2s;
  }
`
export const ImageContainer = styled.div`
  position:relative;
  border: .5rem solid red;
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
    border: .5rem solid green;
    background-color:black;
    padding: .5rem;

    >p{
      font-size: 1.5rem;
      text-align:center;
    }
  }
`
export const DescriptionContainer = styled.div`
  border: .5rem solid orange;
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
  cardData: CardDef
}

export function Card({ cardData }: Props) {

  return (
    <Container>
      <CardBody>
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
      </CardBody>
    </Container>
  );
}
