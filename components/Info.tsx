'use client'

import type { MouseEventHandler } from 'react'
import { ShoppingCart } from 'lucide-react'

import type { Product } from '@/types'
import Currency from '@/components/ui/Currency'
import { Button } from '@/components/ui/button'
import useCart from '@/hooks/useCart'
import usePreviewModal from '@/hooks/usePreviewModal'
import { Badge } from '@/components/ui/badge'

type InfoProps = {
  data: Product
}

export default function Info({ data }: InfoProps) {
  const cart = useCart()
  const previewModal = usePreviewModal()

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = () => {
    cart.addItem(data)
    previewModal.onClose()
  }

  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-900'>{data.name}</h1>
      <div className='mt-3 flex items-end justify-between'>
        <div className='text-2xl text-gray-900'>
          <Currency value={data.price} />
        </div>
      </div>
      {data.quantity < 1 && (
        <Badge variant='destructive' className='mt-3 uppercase'>
          Sold Out
        </Badge>
      )}
      <hr className='my-4' />
      <div className='flex flex-col gap-y-6'>
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'>Size:</h3>
          <div>{data.size.name}</div>
        </div>
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'>Color:</h3>
          <div
            className='h-6 w-6 rounded-full border border-gray-600'
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>
      <div className='mt-10 flex items-center gap-x-3'>
        <Button
          onClick={onAddToCart}
          disabled={data.quantity < 1}
          className='flex items-center gap-x-2 disabled:cursor-not-allowed'
        >
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  )
}
