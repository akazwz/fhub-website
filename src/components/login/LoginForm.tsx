import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
} from '@chakra-ui/react'
import * as React from 'react'
import { PasswordField } from './PasswordField'
import { ChangeEvent, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useRouter } from 'next/router'

export const LoginForm = (props: HTMLChakraProps<'form'>) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { login } = useAuth()
  const router = useRouter()

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setEmail(value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setPassword(value)
  }

  return (
    <chakra.form
      onSubmit={(e) => {
        e.preventDefault()
        if (password.length < 6) {
          alert('password length must < 6')
          return
        }
        // your login logic here
        console.log(email + ':' + password)
        login(email + password)
        router.push('/account', '/account', { locale: router.locale }).then()
      }}
      {...props}
    >
      <Stack spacing="6">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </FormControl>
        <PasswordField
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Sign in
        </Button>
      </Stack>
    </chakra.form>
  )
}