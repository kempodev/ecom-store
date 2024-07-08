import { cn } from '@/lib/utils'

type IconButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  icon: React.ReactElement
  className?: string
  disabled?: boolean
}

export default function IconButton({
  onClick,
  icon,
  className,
  disabled,
}: IconButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'flex items-center justify-center rounded-full border bg-white p-2 shadow-md transition hover:scale-110 disabled:cursor-not-allowed',
        className
      )}
    >
      {icon}
    </button>
  )
}
