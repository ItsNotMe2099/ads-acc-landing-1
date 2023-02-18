import { createContext, useContext, useState } from 'react'

interface IState {
  isMobile: boolean | null
  isDesktop: boolean
}

const defaultValue: IState = {
  isMobile: false,
  isDesktop: true,
}

const AppContext = createContext<IState>(defaultValue)

interface Props {
  children: React.ReactNode
  isMobile?: boolean
}

export function AppWrapper(props: Props) {

  const [isMobile, setIsMobile] = useState<boolean | null>(props.isMobile ?? null)

  const value: IState = {
    ...defaultValue,
    isMobile: isMobile,
    isDesktop: !props.isMobile,
  }


  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
