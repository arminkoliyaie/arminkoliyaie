import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  sub: Subscription = new Subscription;
  observable = new Observable((observer) => {
    observer.next('Hello');
    observer.next('How are you armin');
    setInterval(() =>{
      observer.next('I am good');
    }, 2000);
  });
  constructor() { }

  ngOnInit(): void {
    const observerOne = this.observable.subscribe(
      (value) => this.addItem('observer one : ' + value),
      (error) => console.log(error),
      () => console.log('complete'),
    );
    const observerTow = this.observable.subscribe(
      (value) => this.addItem('observer tow : ' + value),
      (error) => console.log(error),
      () => console.log('complete'),
    );
    observerOne.add(observerTow);
    setTimeout(() => {
      observerOne.unsubscribe();
    }, 6001);
  }

  addItem(value:any){
    console.log(value);
  }
}
