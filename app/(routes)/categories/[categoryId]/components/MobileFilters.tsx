'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Plus, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import IconButton from '@/components/ui/IconButton'
import type { Color, Size } from '@/types'
import Filter from './Filter'

type MobileFiltersProps = {
  sizes: Size[]
  colors: Color[]
}

export default function MobileFilters({ sizes, colors }: MobileFiltersProps) {
  const [open, setOpen] = useState(false)
  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  return (
    <>
      <Button onClick={onOpen} className='flex items-center gap-x-2 lg:hidden'>
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as='div'
        className='relative z-40 lg:hidden'
        onClose={onClose}
      >
        {/* Background */}
        <div className='fixed inset-0 bg-black bg-opacity-25' />
        {/* Dialog position */}
        <div className='fixed inset-0 z-40 flex'>
          <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
            {/* Close button */}
            <div className='flex items-center justify-end px-4'>
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>

            {/* Render filters */}
            <div className='p-4'>
              <Filter valueKey='sizeId' name='Sizes' data={sizes} />
              <Filter valueKey='colorId' name='Colors' data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
