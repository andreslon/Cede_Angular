import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { UserModule } from "./users/user.module";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FundamentComponent } from "./fundaments/fundament.component";
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FundamentComponent,
    NavMenuComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent,
        pathMatch: "full"
      },
      {
        path: "fundaments",
        component: FundamentComponent,
        pathMatch: "full"
      }
    ]),
    FormsModule,
    HttpClientModule,
    UserModule,
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
