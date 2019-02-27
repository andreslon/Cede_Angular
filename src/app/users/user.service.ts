import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserBaseModel } from "./user.model";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT"
  })
};
@Injectable()
export class UserService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "https://medicalappointmentapi.azurewebsites.net/api/User";
  }
  getAll() {
    const requestUrl = this.baseUrl;
    return this.http.get(requestUrl, httpOptions);
  }
  get(id: string) {
    const requestUrl = `${this.baseUrl}/${id}`;
    return this.http.get(requestUrl);
  }
  delete(id: string) {
    const requestUrl = `${this.baseUrl}/${id}`;
    return this.http.delete(requestUrl);
  }
  addUpdate(body: UserBaseModel) {
    if (body.userId) {
      const requestUrl = `${this.baseUrl}/${body.userId}`;
      return this.http.put(requestUrl, body);
    } else {
      const requestUrl = this.baseUrl;
      return this.http.post(requestUrl, body);
    }
  }
}
