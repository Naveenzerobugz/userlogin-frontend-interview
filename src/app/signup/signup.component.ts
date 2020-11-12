import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService} from '../shared/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userFrom:FormGroup;
  formsubmit:Boolean=false;
  constructor(
    public formBuilder: FormBuilder,
    private UserService:UserService,
    private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.userFrom = this.formBuilder.group({      
      userid: ['', [Validators.required]],
      password:['',[Validators.required]],
    });
  }
  get f() {
    return this.userFrom.controls;
  }
  signup(){
    this.formsubmit=true;
    this.UserService.user=this.userFrom.value
    this.UserService.signup().subscribe(res=>{
      if (res['status']==1) {
        this.router.navigate(['/signin']);
        alert('your successfully registered')
      }else{
        alert(res['message'])
      }
    })
  }
  showsingin(){
    
        this.router.navigate(['/signin']);
  }
}
