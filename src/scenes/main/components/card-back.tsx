import styled, { css } from 'styled-components';
import { CARD_HEIGHT, CARD_WIDTH, getColor, mixinFontFamily } from '../../../themes';
import { CardScaleDef } from '../../../types';

type FaceDownCardProps = {
  size: CardScaleDef;
  isDisabled?: boolean;
}

export const FaceDownCard = styled.div<FaceDownCardProps>`
  position:absolute;
  width: ${CARD_WIDTH};
  height: ${CARD_HEIGHT};
  left:50%;
  top:50%;
  border-radius: 2rem;
  transform-origin: top;
  cursor: pointer;

  transform: scale(${p => p.size.normal[0]}, ${p => p.size.normal[1]}) translate(-50%, -50%);

  background-color: ${getColor('green')};
  border: .5rem solid ${getColor('grey_dark')};

  >span{
    ${mixinFontFamily('display')};
    display:block;
    transform: rotate(-90deg);
    font-size:5rem;
    font-weight: bold;
    color: ${getColor('brown_light')};
    margin-top:11rem;
  }

  &:hover{
    background-color: ${getColor('green_light')};

    >span{
      color: ${getColor('brown_dark')};
    }
  }

  ${p => p.isDisabled && css`
    pointer-events:none;
    background-color: ${getColor('grey')};
    border: .5rem solid ${getColor('grey_dark')};

    >span{
      color: ${getColor('grey_light')};
    }
  `}
`

interface Props {
  offsetIdx?: number;
  size?: CardScaleDef;
  onClickCard?: Function,
  isDisabled?: boolean,
}

export function CardBack({ size, offsetIdx, onClickCard, isDisabled }: Props) {
  const style = offsetIdx !== undefined ? { left: offsetIdx * .7, top: offsetIdx * 1 } : {};

  const anySize = {
    normal: [ 1, 1 ],
    zoom: [ 1.3, 1.3 ],
    ...size
  } as CardScaleDef;

  return (
    <FaceDownCard style={style} size={anySize} isDisabled={isDisabled} onClick={() => onClickCard ? onClickCard() : {}}>
      {!isDisabled && <span>{'DRAW'}</span>}
    </FaceDownCard>
  );
}
