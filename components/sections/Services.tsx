'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { useModal } from '@/components/providers/ModalProvider'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { SERVICES } from '@/lib/constants'
import { t } from '@/lib/translations'

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

export function Services() {
  const { lang } = useLanguage()
  const { open } = useModal()
  const tx = t.services

  return (
    <section id="services" className="section-padding bg-dark">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionReveal className="mb-16 md:mb-20">
          <GoldDivider className="mb-6" />
          <h2
            className="font-display font-black text-off-white leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            {tx.heading[lang]}
          </h2>
          <p className="mt-4 max-w-lg font-body text-base text-dark-500 leading-relaxed">
            {tx.sub[lang]}
          </p>
        </SectionReveal>

        <div className="flex flex-col">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease }}
              className="group relative"
            >
              {/* top border — first item only */}
              {index === 0 && (
                <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
              )}

              <div
                className="flex items-center justify-between gap-6 py-6 md:py-7 transition-all duration-300 cursor-pointer"
                onClick={() => open(service.id)}
              >
                {/* Left: name + description */}
                <div className="flex items-baseline gap-5 md:gap-8 min-w-0">
                  <span
                    className="font-display font-black text-dark-400 select-none flex-shrink-0 transition-colors duration-300 group-hover:text-dark-300"
                    style={{ fontSize: 'clamp(0.65rem, 1.2vw, 0.75rem)', letterSpacing: '0.15em' }}
                  >
                    0{index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3
                      className="font-display font-black text-off-white leading-none transition-colors duration-300 group-hover:text-gold"
                      style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
                    >
                      {service.name}
                    </h3>
                    <p className="mt-1.5 font-body text-sm text-dark-500 leading-relaxed hidden md:block max-w-md">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Right: duration + price + arrow */}
                <div className="flex items-center gap-5 md:gap-8 flex-shrink-0">
                  <span className="font-body text-xs text-dark-500 tracking-widest uppercase hidden sm:block">
                    {service.duration}
                  </span>
                  <span
                    className="font-display font-black text-gold leading-none"
                    style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}
                  >
                    {service.price}
                  </span>
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-dark-400 text-dark-500 transition-all duration-300 group-hover:border-gold group-hover:text-gold group-hover:bg-gold/5"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* bottom border */}
              <div
                className="h-px w-full transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.07)' }}
              />

              {/* hover gold line */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-gold origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease }}
              />
            </motion.div>
          ))}
        </div>

        {/* Book all / call CTA */}
        <SectionReveal delay={0.3} className="mt-10 flex items-center gap-6">
          <button
            onClick={() => open()}
            className="rounded-full bg-gold px-8 py-3.5 font-body text-sm font-semibold text-dark tracking-wide transition-all duration-300 hover:bg-gold-light active:scale-95"
          >
            {t.nav.cta[lang]}
          </button>
          <a
            href="tel:+31647747131"
            className="font-body text-sm text-dark-500 transition-colors hover:text-off-white tracking-wide"
          >
            {lang === 'nl' ? 'Of bel direct' : 'Or call us'}
            <span className="ml-2 text-off-white/40">+31 6 47747131</span>
          </a>
        </SectionReveal>
      </div>
    </section>
  )
}
