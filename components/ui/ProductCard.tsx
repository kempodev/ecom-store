'use client'

import Image from 'next/image'

import type { Product } from '@/types'
import IconButton from '@/components/ui/IconButton'
import { Expand, ShoppingCart } from 'lucide-react'
import Currency from '@/components/ui/Currency'
import Link from 'next/link'
import type { MouseEventHandler } from 'react'
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

  // TODO: poista
  // const handleClick = () => {
  //   router.push(`/products/${data?.id}`)
  // }
  return (
    <Link
      href={`/products/${data?.id}`}
      // onClick={handleClick}
      className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'
    >
      <div className='aspect-square rounded-xl bg-gray-100 relative'>
        <Image
          src={data?.images?.[0]?.url}
          alt='Image'
          fill
          className='aspect-square object-cover rounded-md'
        />
        <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
          <div className='flex gap-x-6 justify-center'>
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
        <p className='font-semibold text-lg'>{data.name}</p>
        <p className='text-sm text-gray-500'>{data.category.name}</p>
      </div>
      <div className='flex items-center justify-between'>
        <Currency value={data?.price} />
      </div>
    </Link>
  )
}
