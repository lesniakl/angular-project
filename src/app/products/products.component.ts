import { Component, inject, ViewChild } from '@angular/core';
import { CellValueChangedEvent, ColDef } from 'ag-grid-community';
import { columnDefs, ProductsService } from '../services/products.service';
import { AgGridAngular } from 'ag-grid-angular';
import { ModalService } from '@siemens/ix-angular';
import AddModalComponent from './modals/addModal.component';
import DeleteModalComponent from './modals/deleteModal.component';

@Component({
  selector: 'app-content',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  @ViewChild('productsGrid') grid!: AgGridAngular;
  private readonly modalService = inject(ModalService);
  private productsService = inject(ProductsService);

  products = this.productsService.productList;
  columnDefs: ColDef[] = columnDefs;

  onEdit(event: CellValueChangedEvent) {
    this.productsService.updateProduct(event.data);
  }

  async openAddModal() {
    await this.modalService.open({
      content: AddModalComponent,
    });
  }

  async openDeleteModal() {
    const selected = this.grid.api.getSelectedRows();
    if (!selected.length) {
      return;
    }
    await this.modalService.open({
      content: DeleteModalComponent,
      data: selected,
    });
  }
}
