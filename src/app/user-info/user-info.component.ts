 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
  
    name = 'Name';
    email = 'name.example@yahoo.com';
    id = '123';
    // avatar: 'ig.png'  //poza

    constructor(){}

    ngOnInit():void{
    }
}

// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// interface User {
//   name: string;
//   email: string;
//   id: string;
//   // img avatar
// }

// @Component({
//   selector: 'app-user-info',
//   templateUrl: './user-info.component.html',
//   styleUrls: ['./user-info.component.css']
// })
// export class UserInfoComponent implements OnInit {
//   name!: string;
//   email!: string;
//   id!: string;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.getUserInfo().subscribe(user => {
//       this.name = user.name;
//       this.email = user.email;
//       this.id = user.id;
//     });
//   }

//   getUserInfo(): Observable<User> {
//     // url server
//     return this.http.get<User>('http://localhost:4200/user-info');
//   }
// }
