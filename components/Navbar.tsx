import Link from 'next/link'

import Container from '@/components/ui/Container'
import MainNav from '@/components/MainNav'
import getCategories from '@/actions/getCategories'
import NavbarActions from '@/components/NavbarActions'
import getStore from '@/actions/getStore'

export default async function Navbar() {
  const store = await getStore()
  const categories = await getCategories()

  return (
    <div className='border-b'>
      <Container>
        <div className='relative flex h-16 items-center px-4 sm:px-6 lg:px-8'>
          <Link href={'/'} className='ml-4 flex gap-x-2 lg:ml-0'>
            <p className='text-xl font-bold'>{store.name.toUpperCase()}</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  )
}
