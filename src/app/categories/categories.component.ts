import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Category, Pagination } from '../Classes';

@Component({
  selector: 'admin-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:Category[];
  component:string =  "Categories";
  addCategory:Category;
  pagination:Pagination;
  numbers:string[] = [];
  constructor(private service:ProductsService) { }

  ngOnInit() {
    this.pagination = {
      maxCount:0,resultsPerPage:2,numberOfPages:0
    };
    this.addCategory = new Category();
    this.service.getCategory(this.pagination.resultsPerPage).subscribe( data => {
      this.categories = data.value;
      this.pagination.maxCount = data["odata.count"];
      this.pagination.numberOfPages = Math.ceil(this.pagination.maxCount / this.pagination.resultsPerPage);
      for(var i=1;i<=this.pagination.numberOfPages;i++){
        this.addNumber(i.toString());
      }
    });
    
    
  }
  addNumber(value: string){
    this.numbers.push(value);
  }
  add(){
    this.service.addCategory(this.addCategory).subscribe(); 
  }
  delete(category:Category){
    this.addCategory = category;
  }
  confirmDelete(){
    this.service.deleteCategory(this.addCategory.Id).subscribe();    
    this.addCategory = new Category();
  }
  update(category:Category){
    this.addCategory = category;
  }
  confirmUpdate(){
    this.service.updateCategory(this.addCategory).subscribe(x=>{
    this.addCategory = new Category();
    });
    
  } 

  

}
