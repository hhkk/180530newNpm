import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Greeter } from '../utilhk/greeter';

//
// console.log("======== loading /Users/hkon/utd/180530newNpm/todo/client/src/app/customer/customer.component.ts");
// let greeter2 = new Greeter("outer");

//  console.log ("==================================" + greeter2.greet());

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
            //
            // async function demo() {
            //     console.log('Taking a break...');
            //     await sleep(2000);
            //     console.log('Two second later');
            // }
            console.log ("in client/src/app/customer/customer.component.ts ngOnInit");
            //let greeter2 = new Greeter("world2");

            this.customers = data;

            console.log ("==================================" + new Greeter("world5").greet());

            let greeter3 = new Greeter("ngOnInit");

            console.log ("==================================" + greeter3.greet());

        });
    }

}
