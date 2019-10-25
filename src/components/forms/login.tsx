import React, { useEffect, useRef } from 'react'
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
  error: Error | null
  login: ({ email, password }: { email: string; password: string }) => void
}

type TProps = withI18nProps & IProps

function LoginForm({ i18n, error, login }: TProps) {
  const formikRef = useRef(null)

  useEffect(() => {
    if (error && formikRef.current) {
      // @ts-ignore
      formikRef.current.setErrors({
        email: i18n._('login_form.errors.invalid_credentials'),
      })
    }
  }, [error])

  function validate(values: IValues): IErrors {
    let errors: IErrors = {}

    if (!values.email) errors.email = i18n._('login_form.errors.email_required')
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = i18n._('login_form.errors.invalid_email')
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
      ref={formikRef}
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
              {errors && errors.email && (
                <Typography color="error" variant="caption">
                  {errors.email}
                </Typography>
              )}
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
                color="secondary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
              >
                <Trans id="user.actions.login">Se connecter</Trans>
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
