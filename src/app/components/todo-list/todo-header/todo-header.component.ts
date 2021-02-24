import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {
  inputValue: string = '';
  @Input() placeholder = 'What needs to be done?';
  @Input() delay = 300;

  @Output() onTextChanges = new EventEmitter<string>();
  @Output() onEnterUp = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) {
    const event$ = fromEvent(this.elementRef.nativeElement, 'keyup')
      .pipe(map(() => this.inputValue))
      .pipe(debounceTime(this.delay))
      .pipe(distinctUntilChanged());
    event$.subscribe(input => this.onTextChanges.emit(input))
  }

  ngOnInit() {
  }

  enterUp(){
    this.onEnterUp.emit(true);
    this.inputValue = '';
  }
}
