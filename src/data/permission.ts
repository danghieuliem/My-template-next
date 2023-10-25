const customer = {
  Account_Detail: 'Account_Detail',
  Account_update: 'Account_update',

  Cart_detail: 'Cart_detail',
  Order_List: 'Order_List',
  Order_Detail: 'Order_Detail',
  Order_create: 'Order_create',

  Product_List: 'Product_List',
  Product_detail: 'Product_detail',
}

const customerService = {
  Account_List: 'Account_ManagerList',
  Account_Detail: 'Account_Detail',
  Account_update: 'Account_update',
}

const admin = {
  Account_List: 'Account_ManagerList',
  Account_Detail: 'Account_Detail',
  Account_create: 'Account_create',
  Account_update: 'Account_update',
  Account_delete: 'Account_delete',

  Order_List: 'Order_List',
  Order_Detail: 'Order_Detail',
  Order_create: 'Order_create',
  Order_update: 'Order_update',
  Order_delete: 'Order_delete',

  Product_List: 'Product_List',
  Product_detail: 'Product_detail',
  Product_create: 'Product_create',
  Product_update: 'Product_update',
  Product_delete: 'Product_delete',
}

export const permission = {
  admin,
  customerService: customerService,
  customer,
}
