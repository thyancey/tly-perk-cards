import styled, { css } from 'styled-components';
import { CARD_HEIGHT, CARD_WIDTH, getColor } from '../../../themes';
import { CardDef, CardScaleDef, StackType } from '../../../types';
import { CardDetails } from './card-details';


type ContainerProps = {
  size: CardScaleDef;
}

export const Container = styled.div<ContainerProps>`
  position:absolute;
  width: ${CARD_WIDTH};
  height: ${CARD_HEIGHT};
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
  transform: scale(${p => p.size.normal[0]}, ${p => p.size.normal[1]}) translate(-50%, -50%);
  cursor: pointer;
  transform-origin: top;
  z-index:1;

  &:hover{
    transform: scale(${p => p.size.zoom[0]}, ${p => p.size.zoom[1]}) rotate(-0.005turn) translate(-50%, -50%);
    transition: transform .2s;
    z-index:10;
  }
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
      font-size: 1.5rem;
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
interface Props {
  cardIdx?: number;
  cardData: CardDef;
  offsetIdx?: number;
  isFaceDown?: boolean;
  onCardSelected?: Function;
  size?: CardScaleDef;
  onClickCard?: Function;
  stackType?: StackType;
}

export function Card({ size, cardIdx, cardData, onCardSelected, offsetIdx, stackType }: Props) {
  let style = {};
  if(offsetIdx !== undefined){
    if(stackType === 'side-by-side'){
      style = { left: offsetIdx * 100 };
    }else{
      style = { left: offsetIdx * 2, top: offsetIdx * 4 };
    }
  }

  console.log('stackType', stackType)

  const onClick = () => {
    if(cardIdx !== undefined && onCardSelected){
      onCardSelected(cardIdx);
    }
  }

  const anySize = {
    normal: [ 1, 1 ],
    zoom: [ 1.3, 1.3 ],
    ...size
  } as CardScaleDef;

  return (
    <Container size={anySize} style={style} onClick={onClick}>
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
