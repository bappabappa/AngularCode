import { Component } from '@angular/core';
import { takeLast } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  displayValue:string='';
   
  getInput(box:any){
    console.log(box.value);
    this.displayValue=box.value;
    box.value=null;
  }

// -------------------------->

  title = 'ToDoListApp';
  // displayValue1:string='';
  list:any[]=[];
  addTask(box:string ){
    
   
    // console.warn(item);
    this.list.push({id:this.list.length, name:box});
    // task.value =null;
    console.warn(this.list);
    
    
  }

  removeTask(id:number){
    console.warn(id);
    this.list=this.list.filter(item=>item.id!== id);
  }











    // -->

    parentData=100;
    updateChild(){
      this.parentData=Math.ceil(Math.random()*10);
    }


    // Reusable component

    userDetails=[
      { name:'dappa', email:'dapi@gamil.com' ,phone:'012'},
      { name:'tappa', email:'tapi@gamil.com' },
      { name:'bappa', email:'bapi@gamil.com' },
      { name:'happa', email:'hapi@gamil.com' }
    ];

    
  
}
