import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  columnNames = ['Image', 'Price', 'Name', 'Description', 'Details'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe((products: Product[]) => {
      this.dataSource = new MatTableDataSource<Product>(products);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
