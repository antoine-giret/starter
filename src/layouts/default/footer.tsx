import React from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'

function Footer() {
  return (
    <Wrapper>
      <Typography variant="body1">Footer</Typography>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 24px;
`

export default Footer
