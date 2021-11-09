import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.scss']
})
export class ProductslistComponent implements OnInit {

  products: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllProducts().subscribe((data: any) => {
      console.log(data);
      this.products = data;
    })
  }
}
