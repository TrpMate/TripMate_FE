import { create } from 'zustand'

type User = {
  email: string
  password: string
  name: string
  contact: string
}

type UserState = {
  users: User[]
  currentUser: User | null
  addUser: (user: User) => void
  login: (email: string, password: string) => boolean
}

export const useUserStore = create<UserState>((set, get) => ({
  users: [],
  currentUser: null,

  addUser: (user) =>
    set((state) => ({
      users: [...state.users, user],
    })),

  login: (email, password) => {
    const user = get().users.find((user) => user.email === email && user.password === password)
    if (user) {
      set({ currentUser: user })
      return true
    }
    return false
  },
}))
