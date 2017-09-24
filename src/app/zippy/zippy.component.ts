import { Component, OnInit, Input, ViewChild, ContentChild } from '@angular/core';
import {TitleDirective} from '../title.directive';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input('title2') title2: any;
  @ContentChild(TitleDirective) titleDirective:TitleDirective;
  
  title: any;
  isExpanded: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked(){   
    this.title = this.titleDirective.title;
  }

  onTitleClicked()
  {
    this.isExpanded = !this.isExpanded;
    console.log(this.title2);
  }
}
