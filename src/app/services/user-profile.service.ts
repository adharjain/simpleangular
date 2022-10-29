import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  baseUrl: string = 'https://localhost:44387/api/userprofile/getuserprofiles'
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.baseUrl);
  }
}
