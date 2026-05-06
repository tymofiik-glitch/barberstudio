'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { t } from '@/lib/translations'

export function About() {
  const { lang } = useLanguage()
  const tx = t.about

  return (
    <section id="about" className="py-20 md:py-32 bg-dark-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20 items-center">
          <SectionReveal direction="left" className="relative">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[3/4] max-w-md mx-auto lg:mx-0 shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1593702295094-ada74bc4a1bd?w=800&q=80"
                alt="Two in One Barberstudio" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
            </div>
            
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-right-4 md:right-6 rounded-2xl p-4 shadow-2xl min-w-[200px]"
              style={{ background: 'rgba(28,28,28,0.92)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#B5714A">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="mt-1 font-display text-xl font-black text-gold leading-none">5.0</span>
                  <span className="mt-0.5 font-body text-[10px] uppercase tracking-wider text-dark-500">45+ {tx.reviews[lang]}</span>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="flex flex-col">
                  <span className="font-display text-xl font-black text-off-white leading-none">100%</span>
                  <span className="mt-0.5 font-body text-[10px] uppercase tracking-wider text-dark-500">{tx.satisfaction[lang]}</span>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="right" delay={0.15}>
            <GoldDivider className="mb-6" />
            <h2 className="font-display font-black text-off-white leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              {tx.heading1[lang]}
              <br />
              <span className="gold-text">{tx.heading2[lang]}</span>
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-dark-500 max-w-xl">{tx.p1[lang]}</p>
            <p className="mt-4 font-body text-base leading-relaxed text-dark-500 max-w-xl">{tx.p2[lang]}</p>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tx.barbers.map((barber: any, i: number) => (
                <div key={i} className="group flex flex-col gap-4 rounded-2xl p-5 transition-all duration-300 hover:bg-white/[0.04]"
                  style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-gold font-display text-lg font-bold transition-transform duration-300 group-hover:scale-110"
                      style={{ background: 'rgba(181,113,74,0.1)', border: '1px solid rgba(181,113,74,0.15)' }}
                    >
                      {barber.name[0]}
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-off-white">{barber.name}</h4>
                      <p className="font-body text-[10px] text-gold tracking-[0.2em] uppercase">{barber.title[lang]}</p>
                    </div>
                  </div>
                  <p className="font-body text-sm text-dark-500 leading-relaxed">
                    {barber.desc[lang]}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
