// 'use client'

// import * as React from 'react'

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   // CarouselNext,
//   // CarouselPrevious,
// } from '@/components/ui/carousel'
// import Autoplay from 'embla-carousel-autoplay'

// import type { Billboard as BillboardType } from '@/types'
// import Billboard from './Billboard'
// import useEmblaCarousel from 'embla-carousel-react'
// import type { EmblaOptionsType } from 'embla-carousel'

// type Props = {
//   data: BillboardType[]
// }

// const OPTIONS: EmblaOptionsType = {
//   loop: true,
// }

// export default function BillboardCarousel({ data }: Props) {
// const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()])
// return (
// null
// <Carousel className='w-full' plugins={[Autoplay()]} ref={emblaRef}>
//   <CarouselContent>
//     {data.map((billboard) => (
//       <CarouselItem key={billboard.id}>
//         <Billboard data={billboard} />
//       </CarouselItem>
//     ))}
//   </CarouselContent>
//   {/* <CarouselPrevious />
//   <CarouselNext /> */}
// </Carousel>
// )
// }
