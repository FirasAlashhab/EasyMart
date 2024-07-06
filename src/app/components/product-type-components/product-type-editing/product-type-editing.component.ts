import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { TypesService } from '../../../services/types.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Types } from '../../../shared/models/types.model';

declare var bootstrap: any;

@Component({
  selector: 'app-product-type-editing',
  templateUrl: './product-type-editing.component.html',
  styleUrl: './product-type-editing.component.css',
})
export class ProductTypeEditingComponent {
  @ViewChild('deleteConfirmationModal') deleteConfirmationModal!: ElementRef;
  private deleteModalInstance: any;
  idSubscription!: Subscription;
  productType: Types = {
    id: '',
    name: '',
    slug: '',
  };
  id: string | null = null;
  slug: string | null = null;

  constructor(
    private productTypeService: TypesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.slug = params.get('id');
      },
    });
    this.getProductTypeBySlug();
  }

  ngAfterViewInit() {
    this.deleteModalInstance = new bootstrap.Modal(
      this.deleteConfirmationModal.nativeElement
    );
  }

  getProductTypeBySlug() {
    if (this.slug) {
      this.productTypeService.getProductTypeBySlug(this.slug).subscribe({
        next: (res) => {
          this.productType = res;
          this.id = res.id;
        },
      });
    }
  }

  onSubmit() {
    if (this.id) {
      this.productTypeService
        .updateProductType(this.id, this.productType)
        .subscribe({
          next: (res) => {
            this.router.navigate(['/admin/product-types']);
          },
        });
    }
  }

  openDeleteModal() {
    this.deleteModalInstance.show();
  }

  onDelete() {
    if (this.id) {
      this.productTypeService.deleteProductType(this.id).subscribe({
        next: (res) => {
          this.router.navigate(['/admin/product-types']);
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
