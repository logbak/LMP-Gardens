import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { FormBuilder, FormGroup, FormControl, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';

const routes = [
  { path: 'products', component: ProductsComponent },
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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
