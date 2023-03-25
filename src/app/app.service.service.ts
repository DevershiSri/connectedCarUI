import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private url = 'https://test-sapient.azurewebsites.net/safetyconcern/test';
  
  constructor(private httpClient: HttpClient) { 
  }
  
  getPosts(){
    return this.httpClient.get(this.url, {responseType: 'text'});
  }
}
