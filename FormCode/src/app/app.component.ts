import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // dynamic binding 
  title = 'dynamic bindig';
  color="red";
  background="yellow";
  updateColor(){
    this.color="purple"
    this.background="skyblue"
  };

  // form
  userData:any={};
  getData(data:NgForm){
    console.log(data);
    this.userData = data;
  }


  // toggle 
  display=false
  toggle(){
    this.display=! this.display;
  }


  

}
