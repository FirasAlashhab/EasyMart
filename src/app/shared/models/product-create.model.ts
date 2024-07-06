export interface ProductCreate {
  name: string;
  description: string;
  pictureUrl: string;
  productBrandId: string;
  productTypeId: string;
  price: number | null;
  inStock: boolean;
  slug: string;
}
