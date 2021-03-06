import s from 'styled-components'

import {
  DARK_GRAY,
  BLACK,
  SLATE,
  WHITE,
  WHITE_ALPHA,
} from '../constants/colors'

export const Title = s.h2`
  color: ${({ white }) => (white ? WHITE : BLACK)};
  ${({ big }) => big && 'font-size: 200%;'}
  margin-bottom: 1.5rem;
  font-weight: 500;
`

export const Text = s.p`
  line-height: 1.45;
  color: ${({ white, color }) => {
    if (white) return WHITE
    if (color) return color
    return DARK_GRAY
  }};
  ${({ translucent }) => translucent && 'opacity: 0.9;'}
  ${({ big }) => big && 'font-size: 125%;'}
  ${({ small }) => small && 'font-size: 75%;'}
  ${({ marginBottom }) => marginBottom && (`margin-bottom: ${marginBottom};`)}
  ${({ medium }) => medium && 'font-weight: 500;'}
`

export const TextList = s.ul`
  color: ${({ white }) => (white ? WHITE : DARK_GRAY)};
`

export const MediumText = s(Text)`
  color: ${({ color, white }) => color || (white && WHITE) || BLACK};
  font-weight: 500;
`

export const StrongText = s(Text)`
  color: ${({ white }) => (white ? WHITE : BLACK)};
  font-weight: 700;
`

export const Preheading = s.h4`
  margin-bottom: 2.675rem;
  font-weight: 500;
  color: ${({ white }) => (white ? WHITE_ALPHA(0.8) : SLATE)};
`

export const Blockquote = s.blockquote`
  opacity: 0.6;

  ::before {
    content: "“";
    position: absolute;
    transform: translateX(-100%);
    font-size: 125%;
  }

  ::after {
    content: "”";
    position: absolute;
    font-size: 125%;
  }
`
