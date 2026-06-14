import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
  }

  getById(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.url}/${id}`);
  }

  create(item: Item): Observable<Item> {
    return this.http.post<Item>(this.url, item);
  }

  update(id: number, item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.url}/${id}`, item);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
