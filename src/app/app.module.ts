import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule
} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, FormGroup, FormControl, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthService } from './services/auth.service';
import { ProductsService } from './services/products.service';
import { DetailComponent } from './components/products/detail/detail.component';
import { DeleteComponent } from './components/products/delete/delete.component';

const routes = [
  { path: 'products', children: [
      { path: '', component: ProductsComponent },
      { path: 'detail/:id', component: DetailComponent},
      { path: 'delete/:id', component: DeleteComponent}
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: AboutComponent }
];




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProductsComponent,
    LoginComponent,
    ContactComponent,
    DetailComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,

    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [
    ProductsService
  ],

  providers: [
    AuthService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
