import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISuperHero } from './../models/super-Hero';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../tokens/token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroSuper {
 private readonly baseURL:string = inject(API_URL);
  constructor(private http:HttpClient) {


  }
  public getSuperHeros():any {
    return this.http.get<ISuperHero[]>(`${this.baseURL}SuperHero`);
  }
  public updateHero(hero:ISuperHero,data:ISuperHero):any {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<ISuperHero[]>(`${this.baseURL}SuperHero/${hero.superId}`,data,{headers});
  }
  public DeleteHero(hero:ISuperHero):any {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<ISuperHero[]>(`${this.baseURL}SuperHero/${hero.superId}`,{headers});
  }
  public AddHero(data:ISuperHero):any {
    return this.http.post<ISuperHero[]>(`${this.baseURL}SuperHero`,data);
  }
}
