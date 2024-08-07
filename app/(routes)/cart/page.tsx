'use client'

import { useEffect, useState } from 'react'

import Container from '@/components/ui/Container'
import useCart from '@/hooks/useCart'
import CartItem from './components/CartItem'
import Summary from './components/Summary'

export default function CartPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const cart = useCart()

  if (!isMounted) return null

  // TODO: implement way to manage quantities in the cart

  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-16 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-black'>Shopping Cart</h1>
          <div className='mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start'>
            <div className='lg:col-span-7'>
              {cart.items.length < 1 && (
                <p className='text-neutral-500'>No items in the cart.</p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  )
}
