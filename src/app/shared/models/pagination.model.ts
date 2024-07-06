import { Products } from './products.model';

export interface Pagination {
  pageNumber: number;
  pageSize: number;
  count: number;
  data: Products[];
}
