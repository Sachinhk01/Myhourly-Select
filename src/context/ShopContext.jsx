import { createContext, useContext, useState, useCallback, useMemo } from 'react'

const ShopContext = createContext(null)

export function ShopProvider({ children }) {
  const [bag, setBag] = useState([])
  const [wish, setWish] = useState([])
  const [drawer, setDrawer] = useState(null) // 'bag' | 'wish' | null

  const addToBag = useCallback((name) => {
    setBag((b) => [...b, name])
    setDrawer('bag')
  }, [])
  const saveToWish = useCallback((name) => {
    setWish((w) => (w.includes(name) ? w : [...w, name]))
  }, [])
  const openDrawer = useCallback((k) => setDrawer(k), [])
  const closeDrawer = useCallback(() => setDrawer(null), [])

  const value = useMemo(
    () => ({ bag, wish, drawer, addToBag, saveToWish, openDrawer, closeDrawer }),
    [bag, wish, drawer, addToBag, saveToWish, openDrawer, closeDrawer]
  )
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export const useShop = () => useContext(ShopContext)
