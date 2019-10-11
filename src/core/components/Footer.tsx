import React from 'react'

import { Layout } from 'antd'
import styled from 'styled-components'

const CustomFooter = () => {
  const { Footer } = Layout

  return <Footer>IPST ©2019</Footer>
}

export default styled(CustomFooter)`
  text-align: center;
`
