import { Component, inject } from '@angular/core';
import { IxActiveModal, ToastService } from '@siemens/ix-angular';
import { ProductsService } from '../../services/products.service';

@Component({
  templateUrl: './deleteModal.component.html',
})
export default class DeleteModalComponent {
  private activeModal = inject(IxActiveModal);
  private productsService = inject(ProductsService);
  private toastService = inject(ToastService);

  onDismiss() {
    this.activeModal.dismiss();
  }

  onConfirm() {
    this.productsService.deleteProduct(this.activeModal.data);
    this.activeModal.close('deleted');
    this.toastService.show({
      message: `Entries deleted successfully`,
      type: 'success',
    });
  }
}
