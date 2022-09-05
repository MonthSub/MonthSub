import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      gray_1: string
      gray_2: string
      gray_3: string
      gray_4: string
      main_coral: string
      border: string
      background: string
    }

    fontSize: {
      tiny_12: string
      small_14: string
      base_16: string
      medium_18: string
      large_24: string
      xLarge_32: string
    }

    device: {
      tablet: string
      mobile: string
      mobileS: string
    }
  }
}
