import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { Categorie } from 'src/app/shared/model/categorie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories ! : Categorie[];
  constructor(private categorieService:CategorieService) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.categorieService.getAll().subscribe((data) => {
      this. categories = data;
      console.log(data);
    });
  }
}
