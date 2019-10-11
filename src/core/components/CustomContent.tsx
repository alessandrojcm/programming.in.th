import React, { FunctionComponent } from 'react'

import { Layout } from 'antd'
import styled from 'styled-components'

const CustomContent: FunctionComponent<{ className?: string }> = ({
  children,
  className
}) => {
  const { Content } = Layout

  return <Content className={className}>{children}</Content>
}

export default styled(CustomContent)`
  margin-top: 64px;
`
