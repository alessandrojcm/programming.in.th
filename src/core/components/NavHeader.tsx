import React, { FunctionComponent } from 'react'

import { Layout } from 'antd'
import styled from 'styled-components'
import { Nav } from './Nav'

const StyledHeader = styled(Layout.Header)`
  background: white;
  position: fixed;
  z-index: 100;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

const NavHeader: FunctionComponent<{ className?: string }> = ({
  className
}) => {
  return (
    <StyledHeader>
      <Nav />
    </StyledHeader>
  )
}

export default NavHeader
