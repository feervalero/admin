import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { OData,Prod,Category } from "./Classes";
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  data:any;
  component : string = "Product";

  

  constructor(private http:HttpClient) { }

  getProducts():Observable<OData>{
    this.data = this.http.get("http://localhost/api/odata/Products?$expand=Price");
    return this.data;
  }
  addProduct(product:Prod){
    this.http.post("http://localhost/api/odata/Products",product);
  }
  getProductTypes():Observable<OData>{
    this.data = this.http.get("http://localhost/api/odata/PriceTypes");
    return this.data;
  }

  /* CATEGORIES */
  getCategory(resultsPerPage:number):Observable<OData>{
    this.data = this.http.get("http://localhost/api/odata/Categories?$inlinecount=allpages&$top="+resultsPerPage);
    return this.data;
  }

  addCategory(data: Category) : Observable<Category>{
    console.log("Posting....");
    console.dir(data);
    const httpOptions = { headers: new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post<Category>("http://localhost/api/odata/Categories",data,httpOptions);
    
  }
  deleteCategory(CategoryId: string):Observable<number>{
    const httpOptions = { headers: new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.delete<number>("http://localhost/api/odata/Categories(guid'"+CategoryId+"')",httpOptions);
  }
  updateCategory(category:Category):Observable<Category>{
    const httpOptions = { headers: new HttpHeaders({'Content-Type':'application/json'})};
    
    return this.http.patch<Category>("http://localhost/api/odata/Categories(guid'"+category.Id+"')",category,httpOptions);
  }

  /*PAGINATION*/
  getTotalOf(entity:string):Observable<number>{
    const httpOptions = { headers: new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.get<number>("http://localhost/api/odata/"+entity+"?$inlinecount=allpages",httpOptions);
  }
}

