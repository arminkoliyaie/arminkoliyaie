import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  sub: Subscription = new Subscription;
  constructor() { }

  ngOnInit(): void {
    let obs = new Observable((observer) =>{
      let count = 0;
      setInterval(()=>{
        observer.next(++count)
        if (count ===5){
          observer.error(new Error('count reached 5'))
        }
        if (count === 4){
          observer.complete();
        }
      },1000);
    });

    this.sub = obs.subscribe(
      (count) => console.log(count),
      (err) =>{
        console.log('error is : ' + err);
      },
      () =>{
        console.log('done');
      }
    );

    setTimeout(() =>{
      this.sub.unsubscribe();
    },5000);
  }
  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }
}

