import { createContext, useContext, useEffect, useState } from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'

export const SearchCreateContext = createContext()

export const useGetTextSeach = () => {
  const [searchParams] = useSearchParams()
  const inputValue = searchParams.get('search') || ''
  const [textSearch, setTextSearch] = useState(inputValue)
  const location = useLocation()

  useEffect(() => {
    setTextSearch(searchParams.get('search') || '')
  }, [location])

  return textSearch
}

export const useSeachContext = () => {
  return useContext(SearchCreateContext)
}

export const SearchContext = ({ children }) => {
    const textSearch = useGetTextSeach()

    return (
      <SearchCreateContext.Provider value={{ textSearch }}>
        {children}
      </SearchCreateContext.Provider>
    )
}
