import Container from '@/components/ui/Container'
import getBillboard from '@/actions/getBillboard'
import Billboard from '@/components/Billboard'
import getProducts from '@/actions/getProducts'
import ProductList from '@/components/ProductList'

export const revalidate = 0

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard('5e2a247d-8b67-45e1-b15f-cb424b876bcc')
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  )
}
