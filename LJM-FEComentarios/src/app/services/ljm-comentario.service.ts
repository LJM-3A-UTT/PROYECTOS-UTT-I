import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ljmComentario } from '../interfaces/ljmComentario';

@Injectable({
  providedIn: 'root'
})
export class LjmComentarioService {
LJMAppUrl='https://localhost:44316/';
LJMApiUrl='api/LJMComentario';
  constructor(private http:HttpClient) { }
  getljmlistComentarios():Observable<any>{
    return this.http.get(this.LJMAppUrl + this.LJMApiUrl);
  }
   deleteLJMComentario(id: number):Observable<any>{
    return this.http.delete(this.LJMAppUrl + this.LJMApiUrl + id);
   }

   getLJMComentario(id:number):Observable<any>{
    return this.http.get(this.LJMAppUrl + this.LJMApiUrl + id);
   }

   saveLJMComentario(LJMComentario:ljmComentario):Observable<any>{
    return this.http.post(this.LJMAppUrl + this.LJMApiUrl, LJMComentario);
   }

   updateLJMComentario(id:number,LJMComentario:ljmComentario):Observable<any>{
    return this.http.put(this.LJMAppUrl + this.LJMApiUrl + id, LJMComentario);
   }
}
