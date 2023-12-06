import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, first, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  // url = `${environment.URL_API}${environment.API_USER}/login`;

  constructor(private httpClient: HttpClient, private router: Router) { }


  public login(email: string, senha: string): Observable<any> {
    return this.httpClient.post('http://192.168.2.33:8000/token-auth/', {
      username: email.toUpperCase(),
      password: senha
    }).pipe(
      map((data: any) => {
        
        localStorage.removeItem('erroLogin');
        localStorage.setItem('token', data.token);
        localStorage.setItem('auth', JSON.stringify(data.username));
        
        return data
      }), catchError((err) => {
        console.log(err)
        throw 'Falha ao Efetuar Login!'
      }))
  }

  public isLogged() {
    const token = localStorage.getItem('token')

    if(token === null){
      return false;
    }
    return true;
  };

}
