import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent implements OnInit {

  @Input("likesCount") count: number = 0;
  private _isChecked: boolean = false;

  constructor() { }

  get isChecked(): boolean {
    return this._isChecked;
  }

  @Input("isActive") set isChecked(value: boolean) {
    if (this._isChecked !== value) {
      this._isChecked = value;

      if (value) {
        this.count++;
      }
      else {
        this.count--;
      }
    }
  }

  ngOnInit() {
  }

  onChecked() {
    this.isChecked = !this.isChecked;
  }
}
