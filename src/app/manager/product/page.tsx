'use client'

import { getProductList } from '@/apis'
import { ProductList } from '@/components/product/productList'
import { logError } from '@/utils/console'
import React, { useEffect, useState } from 'react'

const Product = () => {
  const [data, setData] = useState<TProduct[]>([])

  useEffect(() => {
    getProductList()
      .then((res) => {
        setData(res)
      })
      .catch((err: Error) => logError({ message: err.message }))
  }, [])

  return (
    <div>
      <p>hello Product</p>
      <ProductList data={data} />
    </div>
  )
}
export default Product
