import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddEditComponent } from "./add-edit/add-edit.component";
import { ListComponent } from "./list/list.component";
import { SharedModule } from "./../shared/shared.module";
import { ROUTES } from "./user.routes";
import { UserService } from "./user.service";

import { MaterialModule } from "./../material.module";

@NgModule({
  declarations: [ListComponent, AddEditComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    RouterModule.forChild(ROUTES),
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ListComponent, AddEditComponent],
  providers: [UserService]
})
export class UserModule {}
