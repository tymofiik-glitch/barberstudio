'use client'

import { useLanguage } from '@/components/providers/LanguageProvider'
import { SHOP_INFO, NAV_LINKS } from '@/lib/constants'
import { t } from '@/lib/translations'
import { useModal } from '@/components/providers/ModalProvider'

export function Footer() {
  const { lang } = useLanguage()
  const { open } = useModal()
  const navLabels = t.footer.links[lang]

  return (
    <footer className="border-t py-16"
      style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(26,26,26,0.95)' }}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Logo & Info */}
          <div>
            <div className="font-display text-sm font-black tracking-[0.15em] uppercase text-off-white">Two in One</div>
            <div className="font-body text-[10px] tracking-[0.3em] uppercase text-gold">Barberstudio</div>
            <p className="mt-4 font-body text-xs text-dark-500 leading-relaxed max-w-[200px]">
              {SHOP_INFO.address}, {SHOP_INFO.city}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href={SHOP_INFO.instagram} target="_blank" rel="noopener noreferrer" 
                className="text-dark-500 hover:text-gold transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href={SHOP_INFO.whatsapp} target="_blank" rel="noopener noreferrer"
                className="text-dark-500 hover:text-gold transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-off-white">Navigation</h4>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <a key={link.href} href={link.href}
                  className="font-body text-xs tracking-wide text-dark-500 transition-colors hover:text-off-white w-fit">
                  {navLabels[i]}
                </a>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-off-white mb-4">Experience the difference</h4>
              <button 
                onClick={() => open()}
                className="rounded-xl px-6 py-3 font-display text-[10px] font-black uppercase tracking-[0.2em] text-dark bg-gold transition-all duration-300 hover:bg-gold-light hover:scale-105"
              >
                {t.nav.cta[lang]}
              </button>
            </div>
            <a href={SHOP_INFO.googleMapsLink} target="_blank" rel="noopener noreferrer"
              className="font-body text-xs text-dark-500 hover:text-off-white transition-colors flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              View on Google Maps
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 pt-8 md:flex-row md:items-center md:justify-between"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="font-body text-[10px] text-dark-500 tracking-wider">
            © {new Date().getFullYear()} Two in One Barberstudio. {t.footer.rights[lang]}
          </p>
          <div className="flex gap-6">
            <a href={`tel:${SHOP_INFO.phone.replace(/\s+/g, '')}`} className="font-body text-[10px] text-dark-500 hover:text-gold transition-colors tracking-wider">{SHOP_INFO.phone}</a>
            <span className="font-body text-[10px] text-dark-500 tracking-wider">Rijswijk, Nederland</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
