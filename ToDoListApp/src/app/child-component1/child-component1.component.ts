import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component1',
  templateUrl: './child-component1.component.html',
  styleUrls: ['./child-component1.component.css']
})
export class ChildComponent1Component implements OnInit {

  constructor() { }

  @ Input() item:{name:string, email:string}={name:'', email:''};

  ngOnInit(): void {
  }

}
