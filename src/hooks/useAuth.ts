import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { isAuthState, tokenState } from '../state/user_state'

export function useAuth () {
  const [token, setToken] = useRecoilState(tokenState)
  const isAuth = useRecoilValue(isAuthState)
  /*
  the useAuth need to wait until client loaded and then
  useEffect to set the real auth state, so set ready state to tell which call
  this hook that ready or not
   */
  const [isReady, setIsReady] = useState<boolean>(false)

  /* need to get token from local storage when the client side is ready */
  useEffect(() => {
    const tokenLocal = localStorage.getItem('token')
    if (tokenLocal) {
      setToken(tokenLocal)
    }
    setIsReady(true)
  }, [setToken])

  const setStateLogout = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  const setStateLogin = (token: string) => {
    localStorage.setItem('token', token)
    setToken(token)
  }
  return {
    isReady,
    isAuth,
    token,
    setStateLogin,
    setStateLogout,
  }
}

export function useAuthValue<TAuth = unknown, TNotAUth = unknown> (authValue: TAuth, notAuthValue: TNotAUth) {
  const { isAuth } = useAuth()
  return isAuth ? authValue : notAuthValue
}