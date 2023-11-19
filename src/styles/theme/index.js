const colors = {
  primary: "#FF0000",
  second: "#F6F6F6",
  background: "#000000",
};

const font = {
  family: "'Inter', sans-serif",
  weight: {
    400: '400',
    600: '600',
    700: '700'
  },
  size: {
    9: '0.9rem',
    10: '1rem',
    12: '1.2rem',
    14: '1.4rem',
    16: '1.6rem',
    18: '1.8rem',
    20: '2rem',
    24: '2.4rem',
    28: '2.8rem',
    32: '3.2rem'
  },
  lineHeight: {
    8: '0.8rem',
    16: '1.6rem',
    24: '2.4rem',
    28: '2.8rem',
    32: '3.2rem',
    40: '4.0rem',
    48: '4.8rem',
    56: '5.6rem'
  }
}

const border = {
  radius: {
    2: '0.25rem',
    4: '0.4rem',
    8: '0.8rem',
    16: '1.6rem',
    500: '50rem'
  }
}

const spacing = {
  2: '0.2rem',
  4: '0.4rem',
  8: '0.8rem',
  16: '1.6rem',
  24: '2.4rem',
  32: '3.2rem',
  40: '4rem',
  48: '4.8rem',
  56: '5.6rem',
  64: '6.4rem',
  80: '8rem',
  120: '12rem',
  160: '16rem',
  200: '20rem',
  300: '30rem',
  350: '35rem',
  400: '40rem',
}

const transition = {
  default: '0.3s ease-in-out',
  normal: '0.5s ease-in-out',
  fast: '0.1s ease-in-out'
}

const zIndex = {
  hide: -1,
  default: 0,
  dropdown: 1000,
  sticky: 1100,
  overlay: 1300,
  modal: 1400,
  toast: 1700
}

export const theme = {
  colors,
  font,
  border,
  spacing,
  transition,
  zIndex
}
