import { motion } from 'framer-motion'
import { useModal } from '@/components/providers/ModalProvider'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { t } from '@/lib/translations'

interface ServiceCardProps {
  id: string
  name: string
  description: string
  price: string
  duration: string
  icon: string
  index: number
}

export function ServiceCard({ id, name, description, price, duration, icon, index }: ServiceCardProps) {
  const { open } = useModal()
  const { lang } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col rounded-2xl p-7 transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(181,113,74,0.5), transparent)' }}
      />
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-xl transition-all duration-300 group-hover:scale-110"
        style={{ background: 'rgba(181,113,74,0.08)', border: '1px solid rgba(181,113,74,0.15)' }}
      >
        <span className="text-gold">{icon}</span>
      </div>
      <h3 className="mb-2 font-display text-lg font-bold text-off-white">{name}</h3>
      <p className="flex-1 font-body text-sm leading-relaxed text-dark-500">{description}</p>
      
      <div className="mt-6 flex flex-col gap-4 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-end justify-between">
          <p className="font-display text-2xl font-bold text-gold">{price}</p>
          <span className="font-body text-xs text-dark-500 tracking-wide">{duration}</span>
        </div>
        
        <button
          onClick={() => open(id)}
          className="w-full rounded-xl py-3 font-body text-xs font-bold uppercase tracking-[0.1em] text-off-white transition-all duration-300 hover:bg-gold hover:text-dark border border-off-white/10 hover:border-gold"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          {t.sticky.cta[lang]}
        </button>
      </div>
    </motion.div>
  )
}
