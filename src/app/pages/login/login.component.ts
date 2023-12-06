import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  form_login!: FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService, private snack_bar: MatSnackBar, private router: Router){}

  ngOnInit() {
    this.form_login = this.fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  public login(){
    if(this.form_login.valid){
      console.log("LOGIN VALIDO!")

      const { email, senha } = this.form_login.value
      this.authService.login(email, senha).subscribe({
        next: (value) => {
          this.router.navigate(['home'])
        }, error: (err) => {
          this.openSnackBarErroAPI(err)
        }
      });
    } else {
      console.log("LOGIN INVALIDO!")
    }
  }

  openSnackBarErroAPI(err: any) {
    this.snack_bar.open(`Erro na API de Login: ${err}`, "", {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000,
    });
  }

}
