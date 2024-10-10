import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IxModule } from '@siemens/ix-angular';
import { AppComponent } from './app.component';
import { AgGridAngular } from 'ag-grid-angular';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';
import AddModalComponent from './products/modals/addModal.component';
import DeleteModalComponent from './products/modals/deleteModal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddModalComponent,
    DeleteModalComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    IxModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    AgGridAngular,
    FormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
