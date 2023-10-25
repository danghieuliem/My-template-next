import Image from 'next/image'
import React from 'react'

type TProps = {
  data: TProduct
}

export const ProductCard = (props: TProps) => {
  const { id, name, price, imageUrl } = props.data
  return (
    <div
      className='product-card grid w-fit cursor-pointer grid-cols-3 items-center gap-2 rounded-md border p-4 hover:bg-sky-400'
      key={id}
    >
      <div className=' row-span-2 flex justify-center'>
        <Image src={imageUrl} alt={name}></Image>
      </div>
      <p>Name</p> <p>{name}</p>
      <p>Price</p> <p>{price}</p>
    </div>
  )
}
