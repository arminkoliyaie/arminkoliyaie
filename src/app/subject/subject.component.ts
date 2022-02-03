import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obs = new Observable((observer) => {
      observer.next(1);
    });

    const subject = new Subject();
    subject.subscribe(
        (value) => console.log(`Observer 1: ${value}`),
        (err) => console.error(err),
        () => console.log('Observer completed')
    );
    subject.next('hi');
    const observerTow = subject.subscribe(
      (value) => console.log(`Observer 2: ${value}`),
      (err) => console.error(err),
      () => console.log('Observer completed')
    );
    subject.next('bye');
    observerTow.unsubscribe();
    subject.next('hi');
  }

}
