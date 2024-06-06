import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
 categories$: Observable<string[]>;
 products$: Observable<any[]>;

 categoriesBadges: { [key: string]: string } = {
  'electronics': 'badge bg-primary',
  'jewelery': 'badge bg-secondary',
  "men's clothing": 'badge bg-success',
  "women's clothing": 'badge bg-danger'
 };
 
 constructor(private http:HttpClient) {
  this.categories$ = this.http.get<string[]>(`https://fakestoreapi.com/products/categories`);
  this.products$ = this.http.get<any[]>(`https://fakestoreapi.com/products`);
 }
}