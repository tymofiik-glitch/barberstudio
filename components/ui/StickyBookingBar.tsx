'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useModal } from '@/components/providers/ModalProvider'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { t } from '@/lib/translations'

export function StickyBookingBar() {
  const { open, isOpen } = useModal()
  const { lang } = useLanguage()
  const tx = t.sticky
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => {
      // Show after scrolling past 80% of viewport height (past the hero)
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <AnimatePresence>
      {visible && !isOpen && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="fixed bottom-0 inset-x-0 z-30 px-4 pb-4 md:hidden"
        >
          <div
            className="flex items-center justify-between rounded-2xl px-5 py-3.5 gap-4"
            style={{
              background: 'rgba(28, 28, 28, 0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 -8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(181,113,74,0.08)',
            }}
          >
            <div>
              <p className="font-display text-sm font-bold text-off-white leading-tight">{tx.title[lang]}</p>
              <p className="font-body text-xs text-dark-500 mt-0.5">{tx.sub[lang]}</p>
            </div>
            <button
              onClick={() => open()}
              className="flex-shrink-0 rounded-full bg-gold px-5 py-2.5 font-body text-sm font-semibold text-dark tracking-wide transition-all duration-200 active:scale-95 hover:bg-gold-light"
            >
              {tx.cta[lang]}
            </button>
          </div>
        </motion.div>
      )}

      {/* Desktop version — corner button */}
      {visible && !isOpen && (
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 60, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="fixed bottom-8 right-8 z-30 hidden md:flex"
        >
          <button
            onClick={() => open()}
            className="group relative flex items-center gap-3 overflow-hidden rounded-xl bg-gold px-7 py-4 font-display text-sm font-bold uppercase tracking-widest text-dark shadow-[0_10px_40px_rgba(181,113,74,0.3)] transition-all duration-300 hover:bg-gold-light hover:shadow-[0_15px_50px_rgba(181,113,74,0.4)] active:scale-95"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-dark animate-pulse" />
            {tx.cta[lang]}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
