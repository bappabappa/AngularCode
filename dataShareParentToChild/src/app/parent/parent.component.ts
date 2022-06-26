import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  messenge ='This messege is written in parent component';

  constructor() { }

  ngOnInit(): void {
  }

}
