import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
model :any={}
getData :any;

constructor  (private userserv: UserserviceService , private router : Router ){
}

 ngOnInit() {
   
  }
loginUser(){
 
    var user=this.model.username;
    var password=this.model.password;
    console.log("hello")
   
    this.userserv.getUserData(user,password).subscribe((res:any)=>{
     

        console.log("nihar")
      if(res==1){
          console.log("hello")
          this.router.navigate(["/home"])
      }
      else{
        alert("invalid userss............");
      }

    })

  }
}
