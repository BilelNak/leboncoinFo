import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from 'src/app/shared/model/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Categorie[]>("http://localhost:8080/Categorie");
  }
}
