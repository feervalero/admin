export class Product{
    Module:{
        Description:string;
    };
    Price:{
        MSRP:string,
        Discount:string
    };
    ModelNumber:string;
    Description:string;
}

export class OData{
    value: any;
}
export class Prod{
    PriceId:string;
    ProductFeatureId:string;
    ModuleId:string;
    ModelNumber:string;
    Variant:string;
    Description:string;
    Active:string;
  }
  export class ProductTypes{
      Id:string;
      Value:string;
      Active:string;
  }
  export class Category{
    Id:string;
	Name:string;
	ParentCategoryId:string;
}
export class Pagination{
    resultsPerPage: number;
    maxCount:number;
    numberOfPages:number;
  }