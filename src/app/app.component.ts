import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'custom_pipe_ssn';
  abcform!:FormGroup
  showMask=false;
  value='1234567891'
  ssn2:any
  ngOnInit(): void {
    this.abcform=new FormGroup({
      ssn: new FormControl('')
    });
    console.log(this.abcform.value)
    // this.ssn2 = this.abcform.value.ssn;
    
  }
  xyz(e:any){
    this.ssn2 = e;
    if(this.ssn2?.length <10){
      this.abcform.value['ssn']=this.ssn2.value
    }
    else{
      console.log("wrong")
    }
    console.log(this.abcform.value['ssn']);
    
  }

 
}
