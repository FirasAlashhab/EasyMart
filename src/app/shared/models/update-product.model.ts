export interface UpdateProduct {
  id: string;
  name: string;
  description: string;
  pictureUrl: string;
  productBrandId: string;
  productBrand: string;
  productTypeId: string;
  productType: string;
  price: number | null;
  inStock: boolean;
  slug: string;
}
