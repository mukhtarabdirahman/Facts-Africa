import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Invoice } from 'src/app/_models/invoice';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  // getPost() {
  //   // return this.http.post<any>(`${environment.apiUrl}`);
  //   return this.http.post<Invoice>((`${environment.apiUrl}`),)
  // }
}
