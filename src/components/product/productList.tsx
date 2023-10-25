import React from 'react'
import { ProductCard } from './productCard'

type TProps = {
  data: TProduct[]
}

export const ProductList = (props: TProps) => {
  const { data } = props
  return (
    <div className='list-product mx-12 flex flex-wrap gap-4'>
      {data.map((items) => (
        <ProductCard data={items} key={items.id} />
      ))}
    </div>
  )
}
