import { cn } from '@/lib/utils'

interface GoldDividerProps {
  className?: string
  centered?: boolean
}

export function GoldDivider({ className, centered = false }: GoldDividerProps) {
  return (
    <div className={cn('flex items-center gap-3', centered && 'justify-center', className)}>
      <div className="h-px w-8 bg-gold-dark" />
      <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <div className="h-px w-16 bg-gold-gradient-h bg-gold" />
      <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <div className="h-px w-8 bg-gold-dark" />
    </div>
  )
}
