import { listProduct, permission } from '../data'

type TPermissions = { [key: string]: string }

export const getPerMission = async (role: string): Promise<TPermissions> => {
  switch (role) {
    case 'admin':
      return Promise.resolve(permission.admin)
    case 'customerService':
      return Promise.resolve(permission.customerService)
    case 'customer':
      return Promise.resolve(permission.customer)

    default:
      return Promise.resolve({})
  }
}

export const getProductList = async (): Promise<TProduct[]> => {
  // switch (role) {
  //   case 'admin':
  //     return Promise.resolve(permission.admin)
  //   case 'customerService':
  //     return Promise.resolve(permission.customerService)
  //   case 'customer':
  //     return Promise.resolve(permission.customer)

  //   default:
  //     return Promise.resolve({})
  // }
  return Promise.resolve(listProduct)
}
