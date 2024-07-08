import Container from '@/components/ui/Container'
// import Billboard from '@/components/Billboard'
import getProducts from '@/actions/getProducts'
import ProductList from '@/components/ProductList'
import getBillboards from '@/actions/getBillboards'
// import BillboardCarousel from '@/components/BillboardCarousel'
import Billboard from '@/components/Billboard'

export const revalidate = 0

// TODO: add carousel instead of billboard

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true })
  const filteredProducts = products.filter((product) => product.quantity > 0)
  const billboards = await getBillboards()
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        {billboards.length > 0 && (
          <Billboard
            data={billboards[Math.floor(Math.random() * billboards.length)]}
          />
        )}
        {/* <BillboardCarousel data={billboards} /> */}
        <div className='flex flex-col gap-y-8 px-4 pt-2 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' items={filteredProducts} />
        </div>
      </div>
    </Container>
  )
}
