import React, { useState, PropsWithChildren } from 'react'
interface appStateValue {
  username: string
  shoppingCart: { items: { id: number; name: string }[] }
}

const defaultContextValue: appStateValue = {
  username: 'HillBridge',
  shoppingCart: { items: [] },
}
export const AppContext = React.createContext(defaultContextValue)

export const AppSetStateContext =
  React.createContext<React.Dispatch<React.SetStateAction<appStateValue>> | undefined>(
    undefined
  )

export const AppStateProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const children = React.Children.toArray(props.children)
  const [state, setState] = useState(defaultContextValue)
  return (
    <AppContext.Provider value={state}>
      <AppSetStateContext.Provider value={setState}>
        {children[0]}
      </AppSetStateContext.Provider>
    </AppContext.Provider>
  )
}