import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';




// hbk  for comparison see /Users/hkon/utdObsolete/180409/grails-angular/client/src/app/customer/customer.component.ts

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})


export class CustomerComponent implements OnInit {
    customers: any;

    constructor(private http: HttpClient) { } // hbk

// see /Users/hkon/utdObsolete/180409/grails-angular/client/src/app/app-routing.module.ts
    ngOnInit() {
        this.http.get('http://localhost:8080/customer').subscribe(data => {
            this.customers = data;
        });
    }

}
