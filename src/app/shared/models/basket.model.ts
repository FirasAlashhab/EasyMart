export interface Basket {
  id: string;
  items: BasketItems[];
  clientSecret?: string;
  paymentIntentId?: string;
  deliveryMethodId?: number;
  shippingPrice?: number;
}

export interface BasketItems {
  id: string;
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
  brand: string;
  type: string;
}

export interface BasketTotals {
  shipping: number;
  subtotal: number;
  total: number;
}
