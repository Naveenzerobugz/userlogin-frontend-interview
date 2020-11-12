import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
userid:String=''
  constructor(
    public formBuilder: FormBuilder,
    public UserService: UserService,
    private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('userid')==''||localStorage.getItem('userid')==null ){
      this.router.navigate(['/signin']);
    }else{
      this.userid=localStorage.getItem('userid')
      var data={
        currentdate:new Date,
        _id:localStorage.getItem('_id')
      }
      this.UserService.aftersingup(data).subscribe(res => {
        if (res['status'] == 1) {
        console.log(res['message']);
        
        } else {
          alert(res['message'])
        }
      })
    }
    
  }
  logout(){
    localStorage.clear();
    this.userid='';
    this.router.navigate(['/signin']);    
  }
}
