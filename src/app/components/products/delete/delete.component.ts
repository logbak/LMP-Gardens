import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  product: Product;

  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductsService, private _router: Router) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._productService.getProduct(routeData.get('id')).subscribe((singleProduct: Product) => {
        this.product = singleProduct;
      });
    });
  }

  onDelete() {
    // this.product passes through find but pulling out inidividual parameters returns "undefined"
    console.log(this.product)
    console.log(this.product.ProductId);
    this._productService.deleteProduct(this.product.ProductId).subscribe(() => {
      this._router.navigate(['/products']);
    });
  }

}

