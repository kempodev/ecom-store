'use client'

import Image from 'next/image'
import { X } from 'lucide-react'
import type { Product } from '@/types'
import IconButton from '@/components/ui/IconButton'
import Currency from '@/components/ui/Currency'
import useCart from '@/hooks/useCart'

type CartItemProps = {
  data: Product
}

export default function CartItem({ data }: CartItemProps) {
  const cart = useCart()

  const onRemove = () => {
    cart.removeItem(data.id)
  }

  return (
    <li className='flex border-b py-6'>
      <div className='relative h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48'>
        <Image
          fill
          src={data.images[0].url}
          alt=''
          className='object-cover object-center'
        />
      </div>
      <div className='relative ml-4 flex flex-1 flex-col justify-between'>
        <div className='absolute right-0 top-0 z-10'>
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
          <div className='flex justify-between'>
            <p className='text-lg font-semibold text-black'>{data.name}</p>
          </div>
          <div className='mt-1 flex text-sm'>
            <p className='text-gray-500'>{data.color.name}</p>
            <p className='border-1 ml-4 border-gray-200 pl-4 text-gray-500'>
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  )
}
