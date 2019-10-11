import React, { FunctionComponent } from 'react'

import { Layout } from 'antd'
import styled from 'styled-components'

import { GlobalStyle } from '../styles/globalStyle'

import CustomContent from './CustomContent'
import NavHeader from './NavHeader'
import CustomFooter from './Footer'

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`

const CustomLayout: FunctionComponent<{ className?: string }> = ({
  children,
  ...rest
}) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      <NavHeader />
      <CustomContent>{children}</CustomContent>
      <CustomFooter />
    </StyledLayout>
  )
}

export default CustomLayout
