import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private imageSubject = new BehaviorSubject<string>('');

  private emailSubject = new BehaviorSubject<string>('');

  private totalCostSubject = new BehaviorSubject<any>('');

  private quantitySubject = new BehaviorSubject<any>('');


  sendEmail(emailData: string) {
    this.emailSubject.next(emailData);
  }

  getIEmail(): Observable<string> {
    return this.emailSubject.asObservable();
  }

  sendImage(imageData: string) {
    this.imageSubject.next(imageData);
  }

  getImage(): Observable<string> {
    return this.imageSubject.asObservable();
  }

  sendTotaleCost(totalCostSubject: any) {
    this.totalCostSubject.next(totalCostSubject);
  }

  getTotaleCost(): Observable<any> {
    return this.totalCostSubject.asObservable();
  }

  sendQuantity(quantitySubject: any) {
    this.quantitySubject.next(quantitySubject);
  }

  getQuantity(): Observable<any> {
    return this.quantitySubject.asObservable();
  }
}
