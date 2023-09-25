import { cn } from '@/lib/utils'

type IconButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  icon: React.ReactElement
  className?: string
}

export default function IconButton({
  onClick,
  icon,
  className,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center justify-center rounded-full border bg-white p-2 shadow-md transition hover:scale-110',
        className
      )}
    >
      {icon}
    </button>
  )
}
