import { Component } from '@angular/core';

@Component({
  selector: 'fblike', 
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

    private _count: number = 0;
    private _isSet: boolean = false;


    // constructor()
    // {}

    // constructor (private _count: number = 0) {
    //     if (_count < 0){
    //         throw new RangeError("Count of likes cannot be negative.");
    //     }
    // }

    get count(): number {
        return this._count;
    }

    get isSet(): boolean {
        return this._isSet;
    }

    set isSet(value: boolean) {
        if (this._isSet !== value){
            this._isSet = value;

            if (value){
                this._count++;
            }
            else {
                this._count--;
            }
        }
    }

    clicked(event) {
        this.isSet = !this.isSet;
    }
}


