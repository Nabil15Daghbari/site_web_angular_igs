import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm:FormGroup
  submitted = false;
  error = '';
  token :any ;

  constructor(  
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthentificationService) { }

  ngOnInit(): void {
      
    this.token = this.route.snapshot.queryParams['token'];

    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required, this.passwordMatchValidator.bind(this)]],
    });
  }

  get f() { return this.resetPasswordForm.controls; }


  onSubmit() {
    const formData = this.resetPasswordForm.value ;
    this.authService.resetPassword(formData, this.token)
    .subscribe((response: string) => {
     
        
      console.log(response);
      
    });
    this.resetPasswordForm.reset();
    setTimeout(() => {
      this.router.navigate(['/account/login']);
    }, 3000)  
    }


    
  isControlValid(controlName: string): boolean {
    const control = this.resetPasswordForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }
  
  isControlInvalid(controlName: string): boolean {
    const control = this.resetPasswordForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }
  
  isControlTouched(controlName): boolean {
    const control = this.resetPasswordForm.controls[controlName];
    return control.dirty || control.touched;
  }

  
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (!this.resetPasswordForm) {
      return null; // Retourne null si le formulaire n'est pas encore initialisé
    }

    const newPassword = this.resetPasswordForm.get('newPassword').value;
    const confirmPassword = control.value;

    return newPassword === confirmPassword ? null : { 'passwordMismatch': true };
  }

}
