import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'lr-summoner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css']
})
export class SummonerComponent {
  @Input() public name = '';
  @Output() public valueChange = new EventEmitter<string>();

  public change(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.valueChange.emit(target?.value);
  }

  public input(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.valueChange.emit(target?.value);
  }
}
