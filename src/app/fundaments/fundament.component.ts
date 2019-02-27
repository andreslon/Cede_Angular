import { Component } from "@angular/core";

@Component({
  selector: "app-fundament",
  templateUrl: "./fundament.component.html",
  styleUrls: ["./fundament.component.scss"]
})
export class FundamentComponent {
  public text1: string = "Hello World";
  textString: string = "Andrés Londoño";
  textNumber: number = 1992;
  textBoolean: boolean = true;
  textArray: string[] = ["Juan", "Andres", "Mario"];
  constructor() {
    this.text1.substr(0, 4);
  }
  num1: number = 1;
  ChangeValue(value) {
    this.num1 = value;
  }
  message: string;
  showAlert() {
    alert(this.message);
  }
  showAndFillVariables() {
    let variable_let = "valor variable let";
    var variable_var = "valor variable var";
    alert("var dentro de bloque: " + variable_var);
    alert("let dentro de bloque: " + variable_let);
  } 
  persons: Person[];
  fillPersons() {
    this.persons = [];
    this.persons.push({
      name: "Andrés",
      lastName: "Londoño",
      isNew: true,
      age: 26
    });
    this.persons.push({
      name: "Andrés",
      lastName: "Londoño",
      isNew: true,
      age: 26
    });
    this.persons.push({
      name: "Andrés",
      lastName: "Londoño",
      isNew: true,
      age: 26
    });
  }
}

interface Person {
  name: string;
  lastName: string;
  isNew: boolean;
  age: number;
}
