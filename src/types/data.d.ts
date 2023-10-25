type TCart = {
  id: string
  userId: string
}

type TItemOfCart = {
  id: string
  idCart: string
  idProduct: string
}

type TProduct = {
  id: string
  name: string
  price: number
  imageUrl: string
}

type TAccount = {
  id: string
  name: string
  numberPhone: string
  email: string
  address: string
  block: boolean
}
