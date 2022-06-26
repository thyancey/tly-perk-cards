import styled from 'styled-components';
import { getColor } from '../../../themes';

export const FaceDownCard = styled.div`
  position:absolute;
  width: 20rem;
  height: 34rem;
  left:50%;
  top:50%;
  /* cursor: pointer; */

  background-color: ${getColor('grey_light')};
  border-radius: 2rem;
  border: .5rem solid ${getColor('grey_dark')};

  transform-origin: top;
  transform: scale(.5, .5) translate(-50%, -50%);
`

type Props = {
  offsetIdx?: number
}

export function CardBack({ offsetIdx }: Props) {
  const style = offsetIdx !== undefined ? { left: offsetIdx * .7, top: offsetIdx * 1 } : {};

  return (
    <FaceDownCard style={style} />
  );
}
