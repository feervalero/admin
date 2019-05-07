import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product,ProductTypes,Prod } from '../Classes';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  newProduct:Prod;
  component = "Product"
  productTypes: ProductTypes[];
  constructor(private productService:ProductsService) { }

  ngOnInit() {
    this.newProduct = {
      Description:"",
      ModelNumber:"",
      Active:"1",
      ModuleId:"null",
      PriceId:"null",
      Variant:"MTG",
      ProductFeatureId:"null"
    }
    this.productService.getProducts().subscribe(data =>{ this.products = data.value});
    this.productService.getProductTypes().subscribe(data => {this.productTypes = data.value});
  }

  add(){
    console.log(this.newProduct)
  }
}
