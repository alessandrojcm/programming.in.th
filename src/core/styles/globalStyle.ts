import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  #root {
    width: 1020px;
    margin-left: auto;
    margin-right: auto;
  }

  .divider {
    margin-top: 25px;
    padding: 7px 0;
    color: var(--info);

    p {
      font-size: 24px;
      font-weight: bolder;
    }
}
`