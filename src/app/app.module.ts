import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IxModule } from '@siemens/ix-angular';
import { AppComponent } from './app.component';
import { AgGridAngular } from 'ag-grid-angular';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './routing.module';
import { UsersComponent } from './users/users.component';
import AddProductComponent from './products/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import AddModalComponent from './products/add-product/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UsersComponent,
    AddProductComponent,
    AddModalComponent,
  ],
  imports: [
    BrowserModule,
    IxModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    AgGridAngular,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
