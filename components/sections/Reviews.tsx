'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { REVIEWS, SHOP_INFO } from '@/lib/constants'
import { t } from '@/lib/translations'

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.45, ease } },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.3, ease } }),
}

export function Reviews() {
  const { lang } = useLanguage()
  const tx = t.reviews
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const next = useCallback(() => { setDirection(1); setCurrent(p => (p + 1) % REVIEWS.length) }, [])
  const prev = useCallback(() => { setDirection(-1); setCurrent(p => (p - 1 + REVIEWS.length) % REVIEWS.length) }, [])
  const goTo = useCallback((i: number) => { setDirection(i > current ? 1 : -1); setCurrent(i) }, [current])
  const startInterval = useCallback(() => { intervalRef.current = setInterval(next, 7000) }, [next])
  const stopInterval  = useCallback(() => { if (intervalRef.current) clearInterval(intervalRef.current) }, [])

  useEffect(() => { startInterval(); return stopInterval }, [startInterval, stopInterval])

  return (
    <section id="reviews" className="section-padding bg-dark">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionReveal className="mb-16 md:mb-20">
          <GoldDivider className="mb-6" />
          <div>
            <h2 className="font-display font-black text-off-white leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              {tx.heading[lang]}
            </h2>
            <p className="mt-4 max-w-lg font-body text-base text-dark-500 leading-relaxed">
              {tx.sub[lang]}
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="relative overflow-hidden" onMouseEnter={stopInterval} onMouseLeave={startInterval}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div key={current} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit">
                <ReviewCard {...REVIEWS[current]} />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, i) => (
                <button key={i} onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-gold' : 'w-1.5 bg-dark-400 hover:bg-dark-500'}`}
                  aria-label={`${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              {[{ fn: prev, label: tx.prev[lang], d: 'M15 18l-6-6 6-6' }, { fn: next, label: tx.next[lang], d: 'M9 18l6-6-6-6' }].map(({ fn, label, d }) => (
                <button key={label} onClick={fn} aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-dark-400 text-off-white/50 transition-all duration-200 hover:border-gold hover:text-gold"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={d} />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>
        <div className="mt-10 flex justify-center">
          <a
            href={SHOP_INFO.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 rounded-2xl border border-off-white/10 bg-white/5 px-6 py-4 md:px-10 md:py-5 transition-all duration-300 hover:bg-white/10 hover:border-gold/50 w-full md:w-auto"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-dark transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.48 10.92v3.28h4.74c-.2 1.06-.9 1.96-1.82 2.59v2.13h2.94c1.71-1.57 2.71-3.9 2.71-6.67 0-.51-.05-1-.14-1.48H12.48z"/><path d="M12.48 21c2.43 0 4.47-.81 5.96-2.18l-2.94-2.13c-.81.55-1.85.87-3.02.87-2.33 0-4.31-1.57-5.02-3.68H4.42v2.21C5.9 19.01 8.98 21 12.48 21z"/><path d="M7.46 13.88c-.18-.54-.28-1.12-.28-1.72s.1-1.18.28-1.72V8.23H4.42C3.81 9.45 3.46 10.84 3.46 12.3s.35 2.85.96 4.07l3.04-2.49z"/><path d="M12.48 7.21c1.32 0 2.51.45 3.44 1.35l2.58-2.58C16.95 4.54 14.9 3.6 12.48 3.6c-3.5 0-6.58 1.99-8.06 4.93l3.04 2.49c.71-2.11 2.69-3.81 5.02-3.81z"/>
              </svg>
            </div>
            <div className="flex-1 flex items-center justify-between gap-6">
              <div className="flex flex-col">
                <span className="font-display text-sm font-black uppercase tracking-[0.1em] text-off-white">
                  {lang === 'nl' ? 'Bekijk 45+ reviews op Google' : 'View 45+ reviews on Google'}
                </span>
                <span className="font-body text-xs text-dark-500 mt-0.5">
                  {lang === 'nl' ? 'Gemiddelde score: 5.0 / 5' : 'Average score: 5.0 / 5'}
                </span>
              </div>
              <div className="flex flex-col items-end flex-shrink-0">
                <span className="font-display text-2xl font-black text-gold leading-none">{SHOP_INFO.rating}</span>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#B5714A">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="font-body text-[10px] text-dark-500 mt-0.5">{SHOP_INFO.reviewCount} {tx.count[lang]}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
