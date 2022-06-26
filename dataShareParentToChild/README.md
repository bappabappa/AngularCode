# DataShareParentToChild

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

# To share data from parent --> child 

### Steps:
### 01  Create two component
     named 'parent' and 'child'

### 02 Add Parent component selector to 'app.component.html'
    
        <app-parent> </app-parent>
### 03 Write messege to parent.ts file
    
          messenge ='This messege is written in parent component';
### 04 Access the messenge to child using Input decorator
    
            @Input() messageFromParent !:string;

### 05 Now gonig to the parent.component.html
    <app-child [child variable]="parent variable"></app-child>
    <app-child [messageFromParent]="messenge"></app-child>

### 06 finally display this in child.component.html

    <h3>{{messageFromParent}}</h3>