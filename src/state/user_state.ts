import { atom, selector } from 'recoil'

export const tokenState = atom<string | null>({
  key: 'token',
  default: null,
})

export const isAuthState = selector({
  key: 'isAuthState',
  get: ({ get }) => {
    const token = get(tokenState)
    return !!token
  }
})