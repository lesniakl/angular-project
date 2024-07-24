import { Component, inject } from '@angular/core';
import { IxActiveModal, ToastService } from '@siemens/ix-angular';
import { ProductsService } from '../../services/products.service';
import { NgForm } from '@angular/forms';
import { Guid } from 'guid-typescript';

@Component({
  templateUrl: './addModal.component.html',
})
export default class AddModalComponent {
  activeModal = inject(IxActiveModal);
  private productsService = inject(ProductsService);
  private toastService = inject(ToastService);

  wasValidated = false;
  data = {
    id: '',
    product_name: '',
    price: 0,
    quantity_in_stock: 0,
    manufacturer: '',
    release_date: '',
  };

  close() {
    this.activeModal.close('My close response');
  }

  onSubmit(form: NgForm) {
    this.wasValidated = true;

    if (form.valid) {
      this.data.id = Guid.create().toString();
      this.productsService.addProduct(this.data);
      this.wasValidated = false;
      this.activeModal.close('Product added');
      this.toastService.show({
        message: `Product ${this.data.product_name} added successfully`,
        type: 'success',
      });
      this.data = {
        id: '',
        product_name: '',
        price: 0,
        quantity_in_stock: 0,
        manufacturer: '',
        release_date: '',
      };
      return;
    }
  }
}
