import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetAPI implements OnInit {
  userList: any[] = [];
  productList: any[] = [];
  rolesList: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(): void {
    this.http.get<any>('https://dev-api.veenpos.com/api/v1/roles-permissions').subscribe({
      next: (res) => {
        this.rolesList = res.data ?? [];
        console.log('Roles list:', this.rolesList);
      },
      error: (err) => console.error(err),
    });
  }

  getPermissionEntries(permission: any): [string, string[]][] {
    return permission ? Object.entries(permission) : [];
  }

  getUsers(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe((result) => {
      this.userList = result;
    });
  }

  getProducts(): void {
    this.http
      .get<any[]>('https://fake-store-api.mock.beeceptor.com/api/products')
      .subscribe((result) => {
        this.productList = result;
      });
  }
}
