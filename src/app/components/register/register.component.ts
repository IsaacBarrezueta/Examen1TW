import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; // Importa FormControl aquí
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formReg: FormGroup;
  
  constructor(private userService: UserService,
              private router:Router
    ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}
