import { createContext, useContext } from 'react'
import { useSearchParams } from 'react-router-dom'

export const SearchCreateContext = createContext()

export const useSeachContext = () => {
  return useContext(SearchCreateContext)
}

export const SearchContext = ({ children }) => {
    const [searchParams] = useSearchParams()
    const inputValue = searchParams.get('search') || ''

    return (
      <SearchCreateContext.Provider value={{ textSearch: inputValue }}>
        {children}
      </SearchCreateContext.Provider>
    )
}
