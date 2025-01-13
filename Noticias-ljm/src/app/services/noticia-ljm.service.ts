import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaLjmService {

  constructor(private http:HttpClient) { }

  getNoticiasljm(parametros:any):Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=3e39600ef92a4344a78ad93c0a911cef'

    return this.http.get(URL);
  }
}
