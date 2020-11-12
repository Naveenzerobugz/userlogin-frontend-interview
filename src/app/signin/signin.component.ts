import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userFrom: FormGroup;
  formsubmit: Boolean = false;
  constructor(
    public formBuilder: FormBuilder,
    private UserService: UserService,
    private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.userFrom = this.formBuilder.group({
      userid: ['', [Validators.required]], 
      password: ['', [Validators.required]],
    });
  }
  get f() {
    return this.userFrom.controls;
  }
  signup() {
    this.formsubmit = true;
    this.UserService.user = this.userFrom.value
    this.UserService.signin().subscribe(res => {
      if (res['status'] == 1) {
        localStorage.setItem('userid', res['result'].userid);
        localStorage.setItem('_id', res['result']._id);
        this.router.navigate(['/dashboard']);
      } else {
        alert(res['message'])
      }
    })
  }
  showsingup() {

    this.router.navigate(['/']);
  }
}
