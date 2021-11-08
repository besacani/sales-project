import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Annup", "Kumar", "anupkumar@l2code.com",32009),  
    new SalesPerson("Jon","Doe", "jdoe@l2code.com",3000),
    new SalesPerson("Besa", "Cani", "besacani@gmail.com",300000),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
