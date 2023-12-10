import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    initFlowbite();
  }

  Logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

}
