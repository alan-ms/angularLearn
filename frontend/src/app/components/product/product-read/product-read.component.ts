import { ProductService } from './../product.service';
import { Product } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  displayedColumns = ['id', 'name', 'price', 'action'];

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  deleteProduct(id: number) {
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Produto excluído!');
      this.getProducts();
    });
  }

  getProducts(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
    });
  }
}
