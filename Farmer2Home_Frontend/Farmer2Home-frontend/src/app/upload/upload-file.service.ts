import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

import { BASE_URL } from '../model/constant';
import { ServerResponse } from '../model/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  product : Product;
  name : string;
   formdata: FormData = new FormData();
   post_url :string = BASE_URL+"/image/post";
   get_file :string = BASE_URL+"/image/files/";
   delete_file :string = BASE_URL+"/image/delete/";
   getFilesFarmer : string = BASE_URL+"/image/files/"
  constructor(private http: HttpClient, private loginService : LoginService , private productService : ProductService) {
    
    // this.productService.getProduct(this.name+this.loginService.emailId).subscribe(data =>
    //   {this.product = data.response;
    //     console.log(this.product);
    //   });
   }
  pushFileToStorage(file :File ): Observable<HttpEvent<{}>> {
    // const formdata: FormData = new FormData();
 
    this.formdata.append('file', file);
    this.formdata.append('farmer_id',this.loginService.emailId);
    console.log("lof"+this.formdata.get('product_name'));

    const req = new HttpRequest('POST', this.post_url, this.formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }
 
  getFiles(): Observable<any> {
    return this.http.get('http://localhost:3330/image/getallfiles');
  }
  setName(name){
    console.log("wefr"+name)
    this.name=name;
    this.formdata.append('product_name',this.name);
    console.log("lo"+this.formdata.get('product_name'));
    
    
  }
  
  getFilesForFarmer(id: string ): Observable<any> {
    return this.http.get(this.getFilesFarmer+id);
  }
    deleteImage(id: string ,name :string): Observable<ServerResponse> {
      return this.http.delete<ServerResponse>( this.delete_file+ id+"/"+name);
    
  }
}
