'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Expand, ShoppingCart } from 'lucide-react'
import type { MouseEventHandler } from 'react'

import type { Product } from '@/types'
import IconButton from '@/components/ui/IconButton'
import Currency from '@/components/ui/Currency'
import usePreviewModal from '@/hooks/usePreviewModal'
import useCart from '@/hooks/useCart'

type ProductCardProps = {
  data: Product
}

export default function ProductCard({ data }: ProductCardProps) {
  const cart = useCart()
  const previewModal = usePreviewModal()

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    // Prevent Link navigation
    e.preventDefault()
    previewModal.onOpen(data)
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    // Prevent Link navigation
    e.preventDefault()
    cart.addItem(data)
  }

  return (
    <Link
      href={`/products/${data?.id}`}
      className='group cursor-pointer space-y-4 rounded-xl border bg-white p-3'
    >
      <div className='relative aspect-square rounded-xl bg-gray-100'>
        <Image
          src={data?.images?.[0]?.url}
          alt='Image'
          fill
          className='aspect-square rounded-md object-cover'
        />
        <div className='absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100'>
          <div className='flex justify-center gap-x-6'>
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className='text-gray-600' />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className='text-gray-600' />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className='text-lg font-semibold'>{data.name}</p>
        <p className='text-sm text-gray-500'>{data.category.name}</p>
      </div>
      <div className='flex items-center justify-between'>
        <Currency value={data?.price} />
      </div>
    </Link>
  )
}
