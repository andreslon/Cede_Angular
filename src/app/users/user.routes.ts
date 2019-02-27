import { Routes } from "@angular/router";
import { AddEditComponent } from "./add-edit/add-edit.component";
import { ListComponent } from "./list/list.component";
export const ROUTES: Routes = [
  {
    path: "users",
    component: ListComponent
  },
  {
    path: "users/add/:id",
    component: AddEditComponent
  },
  {
    path: "users/add",
    component: AddEditComponent
  }
];
