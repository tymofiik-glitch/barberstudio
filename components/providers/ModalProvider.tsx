'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface ModalContextType {
  isOpen: boolean
  serviceId: string | null
  open: (serviceId?: string) => void
  close: () => void
}

const ModalContext = createContext<ModalContextType | null>(null)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [serviceId, setServiceId] = useState<string | null>(null)

  const open = useCallback((id?: string) => {
    if (id) setServiceId(id)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    setServiceId(null)
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.width = ''
  }, [])

  return (
    <ModalContext.Provider value={{ isOpen, serviceId, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within ModalProvider')
  return ctx
}
