import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http :HttpClient) { }

  getSearchData(searchData : any): Observable<any> {
    return this.http.get<any>(`${API_URL}/search/all?query=${searchData}`);
  }

}
