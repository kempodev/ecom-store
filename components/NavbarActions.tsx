'use client'

import { useEffect, useState } from 'react'
import { ShoppingBag } from 'lucide-react'

import useCart from '@/hooks/useCart'
import Link from 'next/link'

export default function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const cart = useCart()

  if (!isMounted) return null

  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <Link
        // onClick={() => router.push('/cart')}
        href={'/cart'}
        className='flex items-center rounded-full bg-black px-4 py-2'
      >
        <ShoppingBag size={20} color='white' />
        <span className='ml-2 text-sm font-medium text-white'>
          {cart.items.length}
        </span>
      </Link>
    </div>
  )
}
