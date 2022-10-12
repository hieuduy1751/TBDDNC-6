import { useReducer } from "react"
import Context from "./context"
import StoreReducer, { initialState } from "./StoreReducer"

const Provider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}