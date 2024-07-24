import { Injectable, signal } from '@angular/core';
import { PRODUCTS } from '../../db/PRODUCTS';
import { PRODUCT } from './models';
import { ColDef } from 'ag-grid-community';

export const columnDefs: ColDef[] = [
  {
    field: 'id',
    headerName: 'Product ID',
    resizable: true,
    flex: 1,
  },
  {
    field: 'product_name',
    headerName: 'Product name',
    filter: 'agTextColumnFilter',
    checkboxSelection: true,
    resizable: true,
    sortable: true,
    editable: true,
    flex: 2,
  },
  {
    field: 'price',
    headerName: 'Price (€)',
    resizable: true,
    sortable: true,
    filter: true,
    editable: true,
    flex: 1,
  },
  {
    field: 'quantity_in_stock',
    headerName: 'Quantity in stock',
    resizable: true,
    sortable: true,
    filter: 'agNumberColumnFilter',
    editable: true,
    flex: 1,
  },
  {
    field: 'manufacturer',
    headerName: 'Manufacturer',
    resizable: true,
    sortable: true,
    filter: 'agNumberColumnFilter',
    editable: true,
    flex: 1,
  },
  {
    field: 'release_date',
    headerName: 'Release date',
    resizable: true,
    sortable: true,
    filter: 'agDateColumnFilter',
    editable: true,
    flex: 1,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = signal<PRODUCT[]>(PRODUCTS);

  get productList() {
    return this.products.asReadonly();
  }

  addProduct(product: PRODUCT) {
    this.products.set([...this.products(), product]);
  }

  deleteProduct(data: PRODUCT[]) {
    data.forEach((selected) =>
      this.products.set(
        this.products().filter((product) => product.id !== selected.id)
      )
    );
  }
  updateProduct(data: PRODUCT) {
    const index = this.products().findIndex(
      (product) => product.id === data.id
    );
    this.products().splice(index, 1, data);
  }
}
