import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationResponse } from '../models/authentication-response';
import { AuthenticationRequest } from '../models/authentication-request';
import { RegisterRequest } from '../models/register-request';
import { VerificationRequest } from '../models/verification-request';
import { PasswordReset } from '../models/passwordReset';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private baseUrl = 'http://localhost:8081/api/auth'

  constructor(private http:HttpClient) { }

  resetPassword(passwordResetRequest: PasswordReset, token: string): Observable<string> {
    const endpoint = '/reset-password?token=' + token;
    return this.http.post<string>(`${this.baseUrl}${endpoint}`, passwordResetRequest);
  }


  resetPasswordRequest(passwordResetRequest:PasswordReset):Observable<string>{
    const endpoint = '/password-reset-request';
    return this.http.post<string>(`${this.baseUrl}${endpoint}`, passwordResetRequest);
  }


  //signup/please-verify
  verifyEmail(token: string): Observable<string> {
    const url = `${this.baseUrl}/verifyEmail?token=${token}`;
    return this.http.get<string>(url);
  }

   register(registerRequest: RegisterRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/register`, registerRequest);
  }

  login(
    authRequest: AuthenticationRequest
  ) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/authenticate`, authRequest);
  }
  
  verifyCode(verificationRequest: VerificationRequest) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/verify`, verificationRequest);
  }

  
  






}
