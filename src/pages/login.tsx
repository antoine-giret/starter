import React from 'react'
import styled from 'styled-components'

import Layout from '../layouts/default'
import LoginForm from '../components/forms/login'

interface IProps {
  error: Error | null
  login: ({ email, password }: { email: string; password: string }) => void
}

function Login({ error, login }: IProps) {
  return (
    <Layout>
      <StyledContainer>
        <LoginForm error={error} login={login} />
      </StyledContainer>
    </Layout>
  )
}

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`

export default Login
