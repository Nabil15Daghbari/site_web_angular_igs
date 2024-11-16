import { AuthenticationResponse } from './../models/authentication-response';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { RegisterRequest } from '../models/register-request';
import { VerificationRequest } from '../models/verification-request';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerRequest: RegisterRequest = {};
  authResponse: AuthenticationResponse = {};
  message = '';
  otpCode = '';
  signupForm: FormGroup;
  submitted = false;
  error = '';
  successmsg = false;
  messageError='';
  verifiyEmail=false ;
  email:string

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
     private authService:AuthentificationService , private sharedImageService : SharedService) { }





  year: number = new Date().getFullYear();



  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role:['CLIENT'],
      status:['0'],
      mfaEnabled: [''],
      sexe:['', Validators.required],
      isEnableds:['0']
    });
  }
   
  get f() { return this.signupForm.controls; }

 

  onSubmit() {
    this.message = '';
    const emailValue = this.signupForm.get('email').value;
    this.sharedImageService.sendEmail(emailValue);
    const formData =  this.signupForm.value;
    this.authService.register(formData) 
      .subscribe({
        next: (response) => {
          this.authResponse = response;
          if (this.authResponse.mfaEnabled) {
           this.authResponse.mfaEnabled 
           setTimeout(() => {
            this.router.navigate(['/account/verify-email']);
          }, 10000)
          } else {
            this.router.navigate(['/account/verify-email']);
            /*  
             this.message = "Compte créé avec succès\nVous serez redirigé(e) vers la page de connexion dans 3 secondes";
            setTimeout(() => {
              this.router.navigate(['/account/login']);
            }, 3000)*/
          }
        }, 
        error: (err) => {
          console.error('Erreur lors de l inscription:', err.error.message);
          this.messageError = err.error.message;
        }
      });

  }


  verifyTfa() {
    this.message = '';
    const verifyRequest: VerificationRequest = {
      email: this.signupForm.get('email').value,
      code: this.otpCode
    };
    console.log(verifyRequest);
      
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          this.message = "Compte créé avec succès\nVous serez redirigé(e) vers la page de connexion dans 3 secondes";
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
          
          setTimeout(() => {
            this.router.navigate(['/abonnement/offre']);
          }, 3000);
        }
      });
  }
           
  isControlValid(controlName: string): boolean {
    const control = this.signupForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }
  
  isControlInvalid(controlName: string): boolean {
    const control = this.signupForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }
  
  isControlTouched(controlName): boolean {
    const control = this.signupForm.controls[controlName];
    return control.dirty || control.touched;
  }





}
