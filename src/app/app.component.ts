import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = '';
  somedata:string="";
  employeelist:any=[];
  constructor(private ds:DataService){
    this.employeelist=[];
  }




  ngOnInit(){
    this.somedata=this.ds.myData();
    this.loademployee();
  }
  loademployee() {
   return this.ds.GetEmployee().subscribe((data:any)=>{
     this.employeelist=data;
})
  
  }

  addEmployee(id,fname,lname,birthday){

    let employee=new Employee(id,fname,lname,birthday);
    this.employeelist.push(employee);
  }


  deleteEmployee(employee){
      let index=this.employeelist.indexOf(employee);
      this.employeelist.splice(index,1);
    
  }

  
  updateEmployee(id,fname,lname,birthday,employee){
    let e=new Employee(id,fname,lname,birthday);
    let index=this.employeelist.indexOf(employee);
    this.employeelist.splice(index,1,e);
  }
}
