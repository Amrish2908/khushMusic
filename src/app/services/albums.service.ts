import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor( private http : HttpClient) { }


    // Album apis
    getAlbumDetail() {
      return this.http.get<any>(`${API_URL}/albums?link=https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_`)
    }
    getAllAlbum() {
      return this.http.get<any>(`${API_URL}/search/albums?query=rockstar`)
    }
    getAlbumById(id: any) {
      return this.http.get<any>(`${API_URL}/albums?id=${id}`);  //568707 this is a artists id
    }

}
