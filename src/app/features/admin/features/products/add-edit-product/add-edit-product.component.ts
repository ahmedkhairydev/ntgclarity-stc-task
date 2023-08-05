import { Component, Inject, Optional, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'core/interfaces';
import { ProductsService } from 'core/services';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent {
  private fb = inject(FormBuilder);
  private title = inject(Title);
  private productsServices = inject(ProductsService);
  private dialogRef = inject(MatDialogRef<AddEditProductComponent>);
  private destroy$ = new Subject<boolean>();

  isEdit = false;
  pageTitle!: string;
  productId!: string;
  productForm!: FormGroup; // Pick<Product, 'id' | 'title' | 'category' | 'description' | 'image'>
  product!: Product;

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: { activatedRoute: ActivatedRoute; }) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isEdit = this.data.activatedRoute.snapshot.firstChild?.data['isEdit'];
    this.pageTitle = this.data.activatedRoute.snapshot.firstChild?.data['pageTitle'];
    this.productId = this.data.activatedRoute.snapshot.paramMap.get('productId') || '';

    this.title.setTitle(`${this.title.getTitle()} | ${this.isEdit ? 'Edit' : 'Add'}`);

    if (this.isEdit) {
      this.getProductById();
    } else {
      this.initAddressForm();
    }
  }

  getProductById() {
    this.productsServices.getProductById(this.productId).subscribe(product => {
      this.product = product;
      this.initAddressForm();      
    });
  }

  initAddressForm() {
    this.productForm = this.fb.group({
      id: "",
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required, this.isValidUrl]],
    });

    if (this.isEdit && this.product) this.productForm.patchValue(this.product);
  }

  submit() {
    if (this.isEdit) {
      this.productsServices.update(this.productForm.value).subscribe(() => {
        this.dialogRef.close();
      });
    } else {
      this.productsServices.add(this.productForm.value).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }

  private isValidUrl(formControl: FormControl) {
    const isURLValid = formControl.value.match(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/);

    if (isURLValid) return null;
    return {
      isURLValid
    };
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
