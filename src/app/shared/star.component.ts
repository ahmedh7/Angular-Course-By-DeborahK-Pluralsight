import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  cropWidth: number = 75;
  @Input() rating: number = 0;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {
    console.log(`You clicked a ${this.rating}star!`);
    this.ratingClicked.emit(`You clicked a ${this.rating} star!`)
    }

  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }
}
