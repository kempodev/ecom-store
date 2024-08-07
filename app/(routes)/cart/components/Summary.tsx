'use client'

import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import Currency from '@/components/ui/Currency'
import useCart from '@/hooks/useCart'

import type { Product } from '@/types'

export default function Summary() {
  const searchParams = useSearchParams()
  const items: Product[] = useCart((state) => state.items)
  const removeAll = useCart((state) => state.removeAll)

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed!')
      removeAll()
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.')
    }
  }, [searchParams, removeAll])

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0)

  const handleCheckout = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    )

    window.location = res.data.url
  }

  return (
    <div className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
      <h2 className='text-lg font-medium text-gray-900'>Order Summary</h2>
      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
          <div className='text-base font-medium text-gray-900'>Order Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        disabled={items.length < 1}
        onClick={handleCheckout}
        className='mt-6 w-full'
      >
        Checkout
      </Button>
    </div>
  )
}
