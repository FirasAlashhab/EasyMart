import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../shared/models/products.model';
import { BrandsService } from '../../services/brands.service';
import { Brands } from '../../shared/models/brands.model';
import { Types } from '../../shared/models/types.model';
import { TypesService } from '../../services/types.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  @ViewChild('search', { static: false }) searchTerm!: ElementRef;
  products: Products[] = [];
  productBrands: Brands[] = [];
  productTypes: Types[] = [];
  brandNameSelected: string = '';
  typeNameSelected: string = '';
  sortSelected: string = 'name';
  sortOrderSelected: string = 'asc';
  pageNumber: number = 1;
  pageSize: number = 9;
  totalCount!: number;
  loading = false;
  productViewLength!: number;
  searchQuery: string = '';
  sortOptions: any = [
    { name: 'Alphabetical', value: 'name', order: 'asc' },
    { name: 'Price: Low to High', value: 'price', order: 'asc' },
    { name: 'Price: High to Low', value: 'price', order: 'desc' },
  ];

  constructor(
    private productService: ProductsService,
    private brandService: BrandsService,
    private typeService: TypesService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllProductBrands();
    this.getAllProductTypes();
  }

  getAllProducts() {
    this.loading = true;
    this.productService
      .getProducts(
        this.brandNameSelected,
        this.typeNameSelected,
        this.sortSelected,
        this.sortOrderSelected,
        this.pageSize,
        this.pageNumber,
        this.searchQuery
      )
      .pipe(delay(1000))
      .subscribe({
        next: (res) => {
          if (res) {
            this.products = res.data;
            this.pageNumber = res.pageNumber;
            this.pageSize = res.pageSize;
            this.totalCount = res.count;

            this.productViewLength = this.products.length;
          }
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }

  getAllProductBrands() {
    this.brandService.getProductBrands().subscribe({
      next: (res) => {
        this.productBrands = res;
      },
    });
  }

  getAllProductTypes() {
    this.typeService.getProductTypes().subscribe({
      next: (res) => {
        this.productTypes = res;
      },
    });
  }

  onBrandSelected(brandName: string) {
    this.pageNumber = 1;
    this.brandNameSelected = brandName;
    this.getAllProducts();
  }

  onTypeSelected(typeName: string) {
    this.pageNumber = 1;
    this.typeNameSelected = typeName;
    this.getAllProducts();
  }

  resetBrandFilter() {
    this.brandNameSelected = '';
    this.getAllProducts();
  }

  resetTypeFilter() {
    this.typeNameSelected = '';
    this.getAllProducts();
  }

  onSortSelected(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedIndex = target.selectedIndex;
    const sortOption = this.sortOptions[selectedIndex];

    if (sortOption) {
      this.pageNumber = 1;
      this.sortSelected = sortOption.value;
      this.sortOrderSelected = sortOption.order;
      this.getAllProducts();
    }
  }

  onPageChanged(event: any) {
    this.pageNumber = event;
    this.getAllProducts();
  }

  onSearch() {
    this.pageNumber = 1;
    this.searchQuery = this.searchTerm.nativeElement.value;
    this.getAllProducts();
  }

  clearSearchInput(input: HTMLInputElement) {
    this.searchQuery = '';
    this.searchTerm.nativeElement.value = '';
    this.getAllProducts();
    input.focus();
  }

  reset() {
    this.searchTerm.nativeElement.value = '';
    this.brandNameSelected = '';
    this.typeNameSelected = '';
    this.sortSelected = 'name';
    this.sortOrderSelected = 'asc';
    this.searchQuery = '';
    this.pageNumber = 1;
    this.getAllProducts();
  }
}
