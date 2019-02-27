import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "./../user.service";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { UserBaseModel } from "./../user.model";

@Component({
  selector: "sec-add-edit",
  templateUrl: "./add-edit.component.html",
  styleUrls: ["./add-edit.component.scss"]
})
export class AddEditComponent implements OnInit {
  id: string;
  isLoading: boolean;
  name = new FormControl("", [Validators.required]);
  lastName = new FormControl("", [Validators.required]);
  nit = new FormControl("");  
  birthDay = new FormControl(new Date()); 
  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(
    private userservice: UserService,
    private route: ActivatedRoute
  ) {}
  back() {
    window.history.back();
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      
      if (this.id) {
        this.isLoading = true;
        this.userservice.get(this.id).subscribe(
          (data: any) => {
            if (data) {
              this.name.setValue(data.name);
              this.lastName.setValue(data.lastName);
              this.nit.setValue(data.nit);
              this.birthDay.setValue(data.birthDay);
              this.email.setValue(data.email);
            }
            this.isLoading = false;
          },
          (error: any) => {
            this.isLoading = false;
          }
        );
      }
      
    });
  }
  clear() {
    this.name.reset();
    this.lastName.reset();
    this.nit.reset();
    this.birthDay.reset();
    this.email.reset();
  }
  save(form: FormGroup) {
    this.isLoading = true;
    let body: UserBaseModel = {
      userId: this.id,
      name: this.name.value,
      lastName: this.lastName.value,
      nit: this.nit.value,
      nitType: 0,
      nitDate: new Date(),
      contract: null,
      birthDay: this.birthDay.value,
      userStatus: 0,
      genre: 0,
      email: this.email.value,
      appointments: null
    };
    this.userservice.addUpdate(body).subscribe(data => {
      this.isLoading = false;
      this.back();
    });

    form.reset();
  }
}
