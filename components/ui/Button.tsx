import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        disabled={disabled}
        ref={ref}
        className={cn(
          'w-auto rounded-full border-transparent bg-black px-5 py-3 font-semibold text-white transition hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
