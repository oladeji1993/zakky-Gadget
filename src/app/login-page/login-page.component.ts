import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user_Email: string;
  user_Password: string;

  constructor(
    private http: HttpClient,
    private route: Router,
    private SpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }

  
    getUsers() {
      this.SpinnerService.show()

      // input value
      const email = this.user_Email
      const password = this.user_Password


      let headers = new Headers()
        return this.http.get("https://applogin-api.herokuapp.com/users/",{
        headers:new HttpHeaders ({
        'content-Type': 'application/json',
        'Accept': 'application/json',
      })
    }).subscribe(result =>{
      const users = result
      console.log(users)

      // CONDITION TO VALIDATE USERs
      if(email === users[0].email && password === users[0].password || email === users[1].email && password === users[1].password){
        this.route.navigate(['dashboard'])
        console.log("Your details match")
        this.SpinnerService.hide()
      }else{
        alert("incorrect username or password, Please Check Your Details")
        console.log("Your details does not Match")
        this.SpinnerService.hide()
      }
    })

  } 

}
