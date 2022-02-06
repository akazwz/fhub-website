import { ChangeEvent, useState } from 'react'
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack,
  HTMLChakraProps,
} from '@chakra-ui/react'
import { useAuth } from '../../hooks/useAuth'
import { PasswordField } from './PasswordField'

export const LoginForm = (props: HTMLChakraProps<'form'>) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { setStateLogin } = useAuth()

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
        setStateLogin(email)
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