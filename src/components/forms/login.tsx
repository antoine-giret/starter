import React from 'react'
import { Trans, withI18n, withI18nProps } from '@lingui/react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from '@material-ui/core'
import { Formik } from 'formik'
import styled from 'styled-components'

interface IValues {
  email: string
  password: string
}

interface IErrors {
  email?: string
}

const INITIAL_VALUES: IValues = { email: '', password: '' }

interface IProps {
  login: ({ email, password }: { email: string; password: string }) => void
}

type TProps = withI18nProps & IProps

function LoginForm({ i18n, login }: TProps) {
  function validate(values: IValues): IErrors {
    let errors: IErrors = {}

    if (!values.email) errors.email = 'Required'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    return errors
  }

  function handleSubmit({ email, password }: IValues) {
    login({ email, password })
  }

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Card>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <Typography component="h2" gutterBottom variant="h6">
                <Trans id="login_form.title">Connexion</Trans>
              </Typography>
              <TextField
                fullWidth
                inputProps={{ 'aria-label': 'email', name: 'email' }}
                margin="dense"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={i18n._('login_form.email')}
                type="email"
                value={values.email}
                variant="outlined"
              />
              <TextField
                fullWidth
                inputProps={{ 'aria-label': 'password', name: 'password' }}
                margin="dense"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={i18n._('login_form.password')}
                type="password"
                value={values.password}
                variant="outlined"
              />
            </CardContent>
            <StyledCardActions>
              <Button
                color="primary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </StyledCardActions>
          </form>
        </Card>
      )}
    </Formik>
  )
}

const StyledCardActions = styled(CardActions)`
  justify-content: flex-end;
`

export default withI18n()(LoginForm)
