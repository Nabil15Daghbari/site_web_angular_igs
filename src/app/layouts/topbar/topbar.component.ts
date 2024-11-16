import { Component, OnInit, Output, EventEmitter, Inject, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { AuthenticationService } from '../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../core/services/authfake.service';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from '../../core/services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { ImageModelService } from 'src/app/account/auth/services/image-model.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SharedService } from 'src/app/account/auth/services/shared.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

/**
 * Topbar component
 */
export class TopbarComponent implements OnInit {

  element;
  cookieValue;
  flagvalue;
  countryName;
  valueset;
  userConnected ;
  topbarImageUser: string = '';
  image:any
  imgUrl : string | ArrayBuffer  ;
  userRole:any;
  shopping:boolean;

  constructor(@Inject(DOCUMENT) private document: any, private router: Router, private authService: AuthenticationService,
              private authFackservice: AuthfakeauthenticationService,
              public languageService: LanguageService,
              public translate: TranslateService,
              public _cookiesService: CookieService ,
              private imageService:SharedService,
              private imageModelService : ImageModelService,
              private sanitizer: DomSanitizer,


             
              ) {
  }



  openMobileMenu: boolean;

  @Output() settingsButtonClicked = new EventEmitter();
  @Output() mobileMenuButtonClicked = new EventEmitter();

  ngOnInit() {
    
    this.openMobileMenu = false;
    this.element = document.documentElement;



  
   this.setConnectedUser();
  this.getProfileImage();
  this.getImageTopBar();
  this.loadImage();
  this.conditionAfficheCarte();
  this.getTotaleCostQuantity();
  }

  
  loadImage(): void {
    this.imageModelService.getImageByUserId(this.userConnected.id)
      .subscribe(
        (data: any) => {
          if(data!=null){
            this.image = data; 
            const safeUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${this.image.picByte}`);
            this.image.safeUrl = safeUrl; 
            this.imageService.sendImage(this.image.safeUrl);
          }else{
            console.log("image vide ")
          }
           
        },
        error => {
          console.error('Erreur lors du chargement de l\'image:', error);
        }
      );
  }
  


  getImageTopBar(){
    this.imageService.getImage().subscribe((imageData) => {
      this.topbarImageUser = imageData;
     // 
    });
  }
  /*
  {"id":118,"firstname":"nabil","lastname":"daghbari","email":"nabil@gmail.com","role":"ADMINISTRATEUR"}  ====> type JSON 
   {id: 118, firstname: 'nabil', lastname: 'daghbari', email: 'nabil@gmail.com', role: 'ADMINISTRATEUR'}  ====> JavaScript
  */
  
  setConnectedUser() {
    const userConnectedString = localStorage.getItem('UserConnected');
    if (userConnectedString) {
      this.userConnected = JSON.parse(userConnectedString);
      
    }
  }
  
  conditionAfficheCarte(){
    this.userRole = this.userConnected.role;
    if(this.userRole==='CLIENT'){
      this.shopping=true
    }
  }


  getImageProfilUpload():string{
    if (this.imgUrl) {
      return this.imgUrl.toString();
    }

    if(this.userConnected && this.userConnected.sexe){
      if(this.userConnected.sexe.toLowerCase() === 'femme'){
       this.imgUrl = 'assets/images/users/femme.png' ;
        return 'assets/images/users/femme.png';
      }else if(this.userConnected.sexe.toLowerCase() === 'homme'){
       this.imgUrl = 'assets/images/users/homme.png' ;
        return 'assets/images/users/homme.png';
      }

   }
  return  'assets/images/users/default.png';
  
  }



getProfileImage():string{
     if(this.userConnected && this.userConnected.sexe){
        if(this.userConnected.sexe.toLowerCase() === 'femme'){
          return 'assets/images/users/femme.png';
        }else if(this.userConnected.sexe.toLowerCase() === 'homme'){
          return 'assets/images/users/homme.png';
        }

     }
    return  'assets/images/users/default.png';
}



  /**
   * Logout the user
   */
  logout() {
    localStorage.clear();
    this.router.navigate(['/account/login']);

  }

  totalCost:any;
  quantity:any;
  getTotaleCostQuantity(){
    this.imageService.getTotaleCost().subscribe(
      (resultat) => {
      this.totalCost = resultat;
    });

    this.imageService.getQuantity().subscribe(
      (resultat) => {
      this.quantity = resultat;
    });

  }


















  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }

  /**
   * Toggles the right sidebar
   */
  toggleRightSidebar() {
    this.settingsButtonClicked.emit();
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  /**
   * Fullscreen method
   */
  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement && !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }
}
