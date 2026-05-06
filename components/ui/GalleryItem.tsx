'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/LanguageProvider'

interface GalleryItemProps {
  src: string
  alt: string
  label: { nl: string; en: string }
  index: number
}

export function GalleryItem({ src, alt, label, index }: GalleryItemProps) {
  const { lang } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-dark-200"
    >
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-all duration-500 group-hover:brightness-75"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </motion.div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-100 md:opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Label — always visible on mobile, hover-reveal on desktop */}
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 opacity-100 transition-all duration-300 md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="font-display text-xs md:text-sm font-bold tracking-[0.1em] uppercase text-gold">{label[lang]}</p>
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-off-white/60 hidden md:block">{alt}</p>
      </div>
    </motion.div>
  )
}
