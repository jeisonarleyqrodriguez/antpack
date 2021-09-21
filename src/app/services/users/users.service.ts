import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        reject(err);
      })
    });
  }
}
