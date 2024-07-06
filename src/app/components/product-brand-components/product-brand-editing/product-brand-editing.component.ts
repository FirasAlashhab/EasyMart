import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Brands } from '../../../shared/models/brands.model';
import { BrandsService } from '../../../services/brands.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

declare var bootstrap: any;

@Component({
  selector: 'app-product-brand-editing',
  templateUrl: './product-brand-editing.component.html',
  styleUrl: './product-brand-editing.component.css',
})
export class ProductBrandEditingComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @ViewChild('deleteConfirmationModal') deleteConfirmationModal!: ElementRef;
  private deleteModalInstance: any;
  idSubscription!: Subscription;
  productBrand: Brands = {
    id: '',
    name: '',
    slug: '',
  };
  id: string | null = null;
  slug: string | null = null;

  constructor(
    private productBrandService: BrandsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.slug = params.get('id');
      },
    });
    this.getProductBrandBySlug();
  }

  ngAfterViewInit() {
    this.deleteModalInstance = new bootstrap.Modal(
      this.deleteConfirmationModal.nativeElement
    );
  }

  getProductBrandBySlug() {
    if (this.slug) {
      this.productBrandService.getProductBrandBySlug(this.slug).subscribe({
        next: (res) => {
          this.productBrand = res;
          this.id = res.id;
        },
      });
    }
  }

  onSubmit() {
    if (this.id) {
      this.productBrandService
        .updateProductBrand(this.id, this.productBrand)
        .subscribe({
          next: (res) => {
            this.router.navigate(['/admin/product-brands']);
          },
        });
    }
  }

  openDeleteModal() {
    this.deleteModalInstance.show();
  }

  onDelete() {
    if (this.id) {
      this.productBrandService.deleteProductBrand(this.id).subscribe({
        next: (res) => {
          this.router.navigate(['/admin/product-brands']);
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
