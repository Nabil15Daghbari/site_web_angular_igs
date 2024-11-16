import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageModelService {

  constructor(private http:HttpClient) { }


  baseUrl(){
    return 'http://localhost:8081/api/image' 
  }

  createOrUpdateImage(file: File, userId: string): Observable<any> {
    const url = this.baseUrl();
  
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('userId', userId);
  
    return this.http.post(url, formData);
  }
  
  updateImage(id: number, file: File): Observable<any> {
    let url = `${this.baseUrl()}/${id}`;

    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.put(url, formData); 
  }


  save(imageId: number | null, file: File, userId: string): Observable<any> {
    if (imageId) {
      return this.update(file, imageId, userId);
    }
    return this.create(file, userId);
  }
     
  create(file: File, userId: string): Observable<any> {
    const url = this.baseUrl();
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('userId', userId);
  
    return this.http.post(url, formData);
  }
  

  update(file: File, imageId: number, userId: string): Observable<any> {
    const url = `http://localhost:8081/api/image/${imageId}`;
    const formData: FormData = new FormData();
    
    formData.append('file', file, file.name);
    formData.append('userId', userId);

    // Assurez-vous que le backend accepte le contenu de type 'multipart/form-data'
    return this.http.put<any>(url, formData);
  }
  
 
 
   getImageByUserId(userId: number): Observable<any> {
     let url = `http://localhost:8081/api/image/user/${userId}`;
     return this.http.get(url);
   }
 
 
   deleteImageByUserId(userId: string): Observable<void> {
     const url = `http://localhost:8081/api/image/user/${userId}`;
     return this.http.delete<void>(url);
   }


   delete(id: number): Observable<boolean> {
    let url = `${this.baseUrl()}/${id}`;
    return this.http.delete<boolean>(url);
  }

  findById(id: number): Observable<any> {
    let url = `${this.baseUrl()}/${id}`;
    return this.http.get<any>(url);
  }





}
