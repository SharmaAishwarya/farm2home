import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Product } from '../model/product';
import { UploadFileService } from '../upload/upload-file.service';
import { LoginService } from '../services/login.service';
import { ProductnameService } from '../productname.service';
import { NotifierService } from '../../../node_modules/angular-notifier';




@Component({
  selector: 'app-product-farmer',
  templateUrl: './product-farmer.component.html',
  styleUrls: ['./product-farmer.component.css']
})
export class ProductFarmerComponent implements OnInit {
  VEGETABLES: string[] = [];
  FRUITS: string[] = [];

  productControl = new FormControl('', [Validators.required]);
  typeControl = new FormControl('', [Validators.required]);
  products: string[];
  product: Product;

  //initialise vegetable and fruits
  initializedProducts: Product[];

  //for delete
  productDelete: Product;
  productUpdate: Product;

  file: File;
  imageList: File[];

  //type array
  type: string[] = ['kilos', 'pieces'];

  //table
  productList: Product[];
  displayedColumns: string[] = ['name', 'description', 'price', 'category', 'quantity', 'quality', 'Update Link', 'Delete'];
  dataSource = this.productList;

  //alerts
  private readonly notifier: NotifierService;


  constructor(private productService: ProductService,
    private formBuilder: FormBuilder,
    private uploadFileService: UploadFileService,
    private userService: LoginService,
    private productNameService: ProductnameService,
    private notifierService: NotifierService) {
      this.notifier=notifierService;
     }

  ngOnInit() {
    this.initialiseVegetableAndFruit();
    this.product = new Product();
    this.displayListForFarmer();
    

  }


  createProduct(product: Product): void {

    product.farmer_id = this.userService.emailId;
    
    this.productService.createProduct(product).subscribe(
      data => { this.product = data.response, console.log(data)
       if(data.statusCode === '201')
       {
        this.notifier.notify( 'success', 'Product Added SuccessFully' );
       }
       else if(data.statusCode ==='200' )
       {
         this.notifier.notify('false' , 'Something went wrong please try again')
       }
      });
    
  }

  updateProduct(product: Product): void {

    product.id = product.name + product.farmer_id + product.quality;


    this.productService.updateProduct(product).subscribe(
      data => { this.product = data.response, console.log(this.product)
      if(data.statusCode == '301')
    {
      this.notifier.notify( 'success', 'Product Updated SuccessFully' );
    } 
    else if(data.statusCode == '300')
    {
      this.notifier.notify('false','Try again')
    }
  }
    );
  }
  onSelectRadio(category: string): void {

    if (category === "vegetables") {
      this.products = this.VEGETABLES;
      this.product.category = "vegetable"
      console.log(this.products);

    }
    if (category === "fruits") {
      this.products = this.FRUITS;
      this.product.category = "fruits"
      console.log(this.products);
    }

  }
  onSelectType(type: string): void {
    if (type == 'kilos') {
      this.product.type = 'k'
    }
    if (type == 'pieces') {
      this.product.type = 'p'
    }
  }

  onSelectDropDown(name: string): void {
    this.product.name = name;
    this.uploadFileService.setName(name);
  }

  displayListForFarmer(): void {

    this.productService.displayListForFarmer(this.userService.emailId).subscribe(products => {
      this.productList = products.response;
    },
      err => {
        console.log(err);
      });
  }




  deleteProduct(id: string): void {
    this.productService.deleteProduct(id).subscribe(data => 
      { this.productDelete = data.response, console.log(this.product)
      if(data.statusCode == "101")
    {
      this.notifier.notify( 'success', 'Product deleted successFully' );
    }
    else if(data.statusCode == '100')
    {
      this.notifier.notify('false' , 'Could not delete the product')
    } 
  }
    );
  }

  displayProduct(id: string) {
    console.log(id);
    this.productService.getProduct(id).subscribe(data => {
      this.productUpdate = data.response, console.log(this.productUpdate);
    })
  }

  initialiseVegetableAndFruit() {

    this.productNameService.list().subscribe(data => {
    this.initializedProducts = data.response;
      console.log(this.initializedProducts)

      this.initializedProducts.forEach(product => {
        if (product.category == 'Vegetable') {
          this.VEGETABLES.push(product.name);

        }
        else if (product.category == 'Fruits') {
          this.FRUITS.push(product.name);
        }
      });
    });
  }

}
