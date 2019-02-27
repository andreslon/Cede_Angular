import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserFullModel } from "./user.model";
@Injectable()
export class UserService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "";
  }
  getAll(sort: string, search: string, page: number, pageSize: number = 1) {
    const requestUrl = `${
      this.baseUrl
    }api/Users?sort=${sort}&search=${search}&page=${page +
      1}&search=${pageSize}`;
    return this.http.get(requestUrl);
  }
  get(id: string) {
    const requestUrl = `${this.baseUrl}api/Users/${id}`;
    return this.http.get(requestUrl);
  }
  delete(id: string) {
    const requestUrl = `${this.baseUrl}api/Users/${id}`;
    return this.http.delete(requestUrl);
  }
  addUpdate(body: UserFullModel) {
    if (body.id) {
      const requestUrl = `${this.baseUrl}api/Users/${body.id}`;
      return this.http.put(requestUrl, body);
    } else {
      const requestUrl = `${this.baseUrl}api/Users`;
      return this.http.post(requestUrl, body);
    }
  }
}
