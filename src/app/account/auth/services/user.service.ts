import { Router } from '@angular/router';
import { AuthenticationResponse } from './../models/authentication-response';
import { AuthentificationService } from './authentification.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserConnected } from '../models/user';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/models';
import { ChangePasswordRequest } from '../models/changePasswordRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl(){
    return 'http://localhost:8081/api/user' 
  }

  constructor(
    private authentificationService :AuthentificationService ,
    private router:Router ,
    private http: HttpClient
    ) { 

  }

  setConnectedUser(authenticationResponse:AuthenticationResponse){
    localStorage.setItem('connectedUser' , JSON.stringify(authenticationResponse))
  }

   isUserLoggedAndAccessTokenValid():boolean{
    if(localStorage.getItem('token')){
      return true;
    }
    this.router.navigate(["/account/login"])
    return false ;
  }


  save(user: UserConnected): Observable<UserConnected> {
    return this.create(user)
  }

  create(UserConnected: UserConnected): Observable<UserConnected> {
    let url = this.baseUrl();
    return this.http.post<UserConnected>(url, UserConnected);
  }

  update(id: number, UserConnected: UserConnected): Observable<UserConnected> {
    let url = `${this.baseUrl()}/${id}`;
    return this.http.put<UserConnected>(url, UserConnected);
  }

  findById(id: number): Observable<UserConnected> {
    let url = `${this.baseUrl()}/${id}`;
    return this.http.get<UserConnected>(url);
  }

  findAll(): Observable<Array<UserConnected>> {
    let url = this.baseUrl();
    return this.http.get<Array<UserConnected>>(url);
  }

  findPage(pageNumber: number, pageSize: number, filter: string): Observable<Page<UserConnected>> {
    let url = this.baseUrl() + '/page';
    let params = new HttpParams();
    params = params.append('pageNumber', pageNumber);
    params = params.append('pageSize', pageSize);
    params = params.append('filter', filter);
    return this.http.get<Page<UserConnected>>(url, {params});
  }

  delete(id: number): Observable<boolean> {
    let url = `${this.baseUrl()}/${id}`;
    return this.http.delete<boolean>(url);
  }

  putStatusUsers(idUser,idStatus,data): Observable<any> {
    let url =this.baseUrl() 
    return this.http.put(url + "/accepterOrRefuser/"+ idUser + "/" + idStatus,data);
  }

  changePassword(changePasswordRequest: ChangePasswordRequest): Observable<any> {
    let url =this.baseUrl() + '/change-password';

    return this.http.patch(url, changePasswordRequest);
  }



}
