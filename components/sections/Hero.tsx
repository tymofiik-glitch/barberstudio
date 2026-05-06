'use client'

import { motion } from 'framer-motion'
import { useModal } from '@/components/providers/ModalProvider'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { t } from '@/lib/translations'
import { SHOP_INFO } from '@/lib/constants'

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }

export function Hero() {
  const { open } = useModal()
  const { lang } = useLanguage()
  const tx = t.hero

  return (
    <section id="hero" className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80')" }} />
      <div className="absolute inset-0 bg-dark/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={item} className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-gold" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold font-medium">
              {tx.eyebrow[lang]}
            </span>
          </motion.div>

          <motion.h1 variants={item}
            className="font-display font-black text-off-white leading-[1.02] tracking-tight"
            style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
          >
            {tx.line1[lang]}
            <br />
            <span className="gold-text">Premium</span>
            <br />
            {tx.line2[lang]}
          </motion.h1>

          <motion.p variants={item}
            className="mt-5 max-w-md font-body text-base md:text-lg text-off-white/60 leading-relaxed"
          >
            {tx.sub[lang]}
          </motion.p>

          <motion.div variants={item} className="mt-5 flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#B5714A">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="font-body text-sm text-off-white/60">{tx.rating[lang]}</span>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3 md:mt-10 md:gap-4">
            <button onClick={() => open()}
              className="group relative overflow-hidden rounded-full bg-gold px-6 py-3.5 md:px-8 md:py-4 font-body text-sm font-semibold tracking-wide text-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(181,113,74,0.35)] active:scale-95"
            >
              <span className="relative z-10">{tx.cta[lang]}</span>
              <div className="absolute inset-0 bg-gold-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
            
            <div className="flex items-center gap-2 md:gap-3">
              <a href={SHOP_INFO.whatsapp} target="_blank" rel="noopener noreferrer"
                className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-off-white/20 text-off-white/70 transition-all duration-300 hover:border-gold/60 hover:bg-gold/10 hover:text-gold active:scale-95"
                aria-label="WhatsApp"
                style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.04)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.435 5.63 1.435h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a href={SHOP_INFO.instagram} target="_blank" rel="noopener noreferrer"
                className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-off-white/20 text-off-white/70 transition-all duration-300 hover:border-gold/60 hover:bg-gold/10 hover:text-gold active:scale-95"
                aria-label="Instagram"
                style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.04)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>

            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full border border-off-white/20 px-6 py-3.5 md:px-8 md:py-4 font-body text-sm font-semibold tracking-wide text-off-white/80 transition-all duration-300 hover:border-gold/60 hover:text-off-white active:scale-95"
              style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.04)' }}
            >
              {tx.secondary[lang]}
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.25em] uppercase text-off-white/30">{tx.scroll[lang]}</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(240,235,229,0.3)" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
