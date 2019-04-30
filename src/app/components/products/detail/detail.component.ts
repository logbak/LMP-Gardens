import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product: Product;

  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._productService.getProduct(routeData.get('id')).subscribe((singleProduct: Product) => {
        this.product = singleProduct;
      });
    });
  }

}
