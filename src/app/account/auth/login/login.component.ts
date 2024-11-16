
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { AuthenticationResponse } from '../models/authentication-response';
import { VerificationRequest } from '../models/verification-request';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {


  error = '';
  returnUrl: string;

  loginForm: FormGroup;
  authResponse: AuthenticationResponse = {};
  otpCode = '';
  message = '';
  year: number = new Date().getFullYear();

// Déclaration de la propriété userService
  userService: UserService;
  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private router: Router,
    private authService:AuthentificationService , 
    userService:UserService ) {
      this.userService = userService;
     }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    const formData = this.loginForm.value
    this.authService.login(formData)
      .subscribe({
        next: (response) => {
          this.authResponse = response;
           console.log(this.authResponse)
          if (!this.authResponse.mfaEnabled) {
            localStorage.setItem('token', response.accessToken as string);
            // Enregistrez uniquement les informations spécifiées dans le stockage local
             localStorage.setItem('UserConnected', JSON.stringify({
            id: response.id,
            firstname: response.firstname,
            lastname: response.lastname,
            email: response.email,
            role: response.role,
            sexe:response.sexe
             }));

            switch (this.authResponse.role) {
                case 'ADMINISTRATEUR':
                  // Gérer le cas pour l'administrateur
                  this.router.navigate(['/dashboard']);
                  break;

                case 'TECHNICIEN':
                  // Gérer le cas pour le technicien
                  this.router.navigate(['/affectation-intervention']);
                  break;

                case 'CLIENT':
                  // Gérer le cas pour le client
                  this.router.navigate(['/abonnement/offre']);
                  break;

                default:
                  // Gérer le cas par défaut ou d'autres rôles non spécifiés
                  console.error('Rôle non reconnu :', this.authResponse.role);
                  break;
              }
          }
        },
        error: (err) => {
          console.error('Erreur lors de l\'authentification :', err.error.message);
          // Store the error message in a variable
          this.message = err.error.message;
        }
      }); 
  }

  verifyCode(){
    const verifyRequest: VerificationRequest = {
      email: this.loginForm.get('email').value,
      code: this.otpCode
    };
    console.log(verifyRequest);
      
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          localStorage.setItem('token', response.accessToken as string);
          // Enregistrez uniquement les informations spécifiées dans le stockage local
           localStorage.setItem('UserConnected', JSON.stringify({
          id: response.id,
          firstname: response.firstname,
          lastname: response.lastname,
          email: response.email,
          role: response.role,
          sexe:response.sexe
           }));
           console.log(this.authResponse.role);
          switch (this.authResponse.role) {
              case 'ADMINISTRATEUR':
                // Gérer le cas pour l'administrateur
                this.router.navigate(['/dashboard']);
                break;

              case 'TECHNICIEN':
                // Gérer le cas pour le technicien
                this.router.navigate(['/affectation-intervention']);
                break;

              case 'CLIENT':
                // Gérer le cas pour le client
                this.router.navigate(['/abonnement/offre']);
                break;

              default:
                // Gérer le cas par défaut ou d'autres rôles non spécifiés
                console.error('Rôle non reconnu :', this.authResponse.role);
                break;
            }
        }       
      });
  }


  isControlValid(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }
  
  isControlInvalid(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }
  
  isControlTouched(controlName): boolean {
    const control = this.loginForm.controls[controlName];
    return control.dirty || control.touched;
  }


}
