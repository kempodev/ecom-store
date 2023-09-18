'use client'

import { currencyFormatter } from '@/lib/utils'
import { useEffect, useState } from 'react'

type CurrencyProps = {
  value?: string | number
}

export default function Currency({ value }: CurrencyProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className='font-semibold'>
      {currencyFormatter.format(Number(value))}
    </div>
  )
}
