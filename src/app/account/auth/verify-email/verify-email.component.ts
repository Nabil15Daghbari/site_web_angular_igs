import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

 userEmail: string;

  constructor(private sharedImageService : SharedService) { }

  ngOnInit(): void {
    this.sharedImageService.getIEmail().subscribe((email) => {
      this.userEmail = email;
    });
  }

}
