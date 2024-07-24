import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IxModule } from '@siemens/ix-angular';
import { AppComponent } from './app.component';
import { AgGridAngular } from 'ag-grid-angular';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './routing.module';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import AddModalComponent from './products/modals/addModal.component';
import DeleteModalComponent from './products/modals/deleteModal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UsersComponent,
    AddModalComponent,
    DeleteModalComponent,
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
