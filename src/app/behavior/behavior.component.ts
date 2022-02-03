import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.css']
})
export class BehaviorComponent implements OnInit {

  constructor() { }

  //test

  ngOnInit(): void {
    const subject = new BehaviorSubject('initial value');
    const observerOne = subject.subscribe(
      (val) => console.log('observerOne: ' , val),
      (err) => console.error(err),
      () => console.log('observerOne complete')
    );
    subject.next('first');
    subject.next('second');
    setTimeout(() => {
      const observertwo = subject.subscribe(
        (val) => console.log('observerTwo: ' , val),
        (err) => console.error(err),
        () => console.log('observerTwo complete')
      );
    },5000);
    subject.next('third');
    subject.next('fourth');
    setInterval(() => {
      subject.next('fifth');
    }, 7000);
  }

}
