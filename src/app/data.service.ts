import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }


  public getAllProducts() {
    return this.httpClient.get(this.REST_API_SERVER);
  }
}

