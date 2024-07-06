import { Address } from './address.model';

export interface OrderToCreate {
  basketId: string;
  deliveryMethod: number;
  shipToAddress: Address;
}

export interface OrderInterFace {
  id: string;
  buyerEmail: string;
  orderDate: string;
  shipToAddress: Address;
  deliveryMethod: string;
  shippingPrice: number;
  orderItems: OrderItem[];
  subtotal: number;
  total: string;
  status: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  pictureUrl: string;
  price: number;
  quantity: number;
}
