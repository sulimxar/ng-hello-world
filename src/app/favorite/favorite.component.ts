import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isChecked: boolean;

  text: string;

  constructor() { }

  ngOnInit() {
  }

  onFavorite() {
    this.isChecked = !this.isChecked;
  }
}
