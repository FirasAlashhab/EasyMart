import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, map, of, switchMap } from 'rxjs';
import { ProductsService } from '../../../services/products.service';
import { Products } from '../../../shared/models/products.model';
import { Brands } from '../../../shared/models/brands.model';
import { Types } from '../../../shared/models/types.model';
import { BrandsService } from '../../../services/brands.service';
import { TypesService } from '../../../services/types.service';
import { UpdateProduct } from '../../../shared/models/update-product.model';

declare var bootstrap: any;

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent implements OnInit, OnDestroy {
  @ViewChild('deleteConfirmationModal') deleteConfirmationModal!: ElementRef;
  private file?: File;
  fileName: string = '';
  id: string | null = null;
  slug: string | null = null;
  idSubscription!: Subscription;
  productData: UpdateProduct = {
    id: '',
    name: '',
    description: '',
    pictureUrl: '',
    productBrand: '',
    productBrandId: '',
    slug: '',
    productType: '',
    productTypeId: '',
    price: null,
    inStock: true,
  };
  productBrands: Brands[] = [];
  productTypes: Types[] = [];
  private deleteModalInstance: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private brands: BrandsService,
    private types: TypesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllProductBrands();
    this.getAllProductTypes();
    this.idSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.slug = params.get('id');
      },
    });
    this.getProductBySlug();
  }

  ngAfterViewInit() {
    this.deleteModalInstance = new bootstrap.Modal(
      this.deleteConfirmationModal.nativeElement
    );
  }

  getAllProductBrands() {
    this.brands.getProductBrands().subscribe({
      next: (res) => {
        this.productBrands = res;
      },
    });
  }

  getAllProductTypes() {
    this.types.getProductTypes().subscribe({
      next: (res) => {
        this.productTypes = res;
      },
    });
  }

  getProductBySlug() {
    if (this.slug) {
      this.productService.getProductBySlug(this.slug).subscribe({
        next: (res) => {
          this.productData = res;
          this.id = res.id;
        },
      });
    }
  }

  onFileUploadChange(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      const file = element.files[0];
      if (file) {
        this.file = file;
        const fileNameWithExtension = file.name;
        const fileNameWithoutExtension = fileNameWithExtension
          .split('.')
          .slice(0, -1)
          .join('.');
        this.fileName = fileNameWithoutExtension;
      }
    }
  }

  onSubmit() {
    if (this.file && this.fileName !== '') {
      this.productService
        .uploadImage(this.file, this.fileName)
        .pipe(
          map((res) => {
            return res.url;
          }),
          switchMap((imageUrl) => {
            if (imageUrl) {
              this.productData.pictureUrl = imageUrl;
            }
            if (this.id !== null) {
              return this.productService.updateProduct(
                this.id,
                this.productData
              );
            } else {
              return of(null);
            }
          })
        )
        .subscribe({
          next: (response) => {
            this.router.navigate(['/shop']);
          },
        });
    } else {
      if (this.id !== null) {
        this.productService.updateProduct(this.id, this.productData).subscribe({
          next: (res) => {
            this.router.navigate(['/shop']);
          },
        });
      }
    }
  }

  openDeleteModal() {
    this.deleteModalInstance.show();
  }

  deleteProduct() {
    if (this.id) {
      this.productService.deleteProduct(this.id).subscribe({
        next: (res) => {
          this.router.navigate(['/shop']);
          this.deleteModalInstance.hide();
        },
      });
    }
  }

  ngOnDestroy(): void {
    if (this.idSubscription) {
      this.idSubscription.unsubscribe();
    }
  }
}
