import { Theme } from '@emotion/react'

const theme: Theme = {
  color: {
    gray_1: '#333333',
    gray_2: '#777777',
    gray_3: '#909090',
    gray_4: '#EEEEEE',
    main_coral: '#F89880',
    border: '#E0E0E0',
    background: '#F9F9F9',
  },

  fontSize: {
    tiny_12: '0.75rem',
    small_14: '0.875rem',
    base_16: '1rem',
    medium_18: '1.125rem',
    large_24: '1.5rem',
    xLarge_32: '2rem',
  },

  device: {
    tablet: `screen and (max-width: ${1140 - 1}px)`,
    mobile: `screen and (max-width: ${768 - 1}px)`,
    mobileS: `screen and (max-width: ${480 - 1}px)`,
  },
}

export default theme
