import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-confirmation-email',
  templateUrl: './confirmation-email.component.html',
  styleUrls: ['./confirmation-email.component.scss']
})
export class ConfirmationEmailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthentificationService
  ) { }

  ngOnInit(): void {
    // Récupérer le token à partir des paramètres de l'URL
    const token = this.route.snapshot.queryParams['token'];

    // Appeler le service pour vérifier l'e-mail
    this.authService.verifyEmail(token).subscribe(
      (response) => {
       
        // Gérer la réponse réussie ici (par exemple, afficher un message de confirmation)
        console.log(response);
      },
      (error) => {
        // Gérer les erreurs ici (par exemple, afficher un message d'erreur)
        console.error(error);
      }
    );

    setTimeout(() => {
      this.router.navigate(['/account/login']);
    }, 5000)     
  }

  

}
