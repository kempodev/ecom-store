import Image from 'next/image'
import { Tab } from '@headlessui/react'

import { cn } from '@/lib/utils'

import type { Image as ImageType } from '@/types'

type GalleryTabProps = {
  image: ImageType
}

export default function GalleryTab({ image }: GalleryTabProps) {
  return (
    <Tab className='relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white'>
      {({ selected }) => (
        <div>
          <span className='absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md'>
            <Image
              fill
              src={image.url}
              alt=''
              className='object-cover object-center'
            />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent'
            )}
          />
        </div>
      )}
    </Tab>
  )
}
