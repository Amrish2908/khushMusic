import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const API_URL = environment.baseUrlArtists;

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http :HttpClient) { }


  // Artists apis
    // Artists_URL = `$(API_URL)/artists`;
    getArtist() {
      return this.http.get<any>(`${API_URL}/search/artists?query=imagine+dragons`)  // get all artists
    }
    getArtistsDetail(id: any) {
      return this.http.get<any>(`${API_URL}?id=${id}`);  //568707 this is a artists id
    }
    getArtistsSong(id: any, pageNumber: number) {
      return this.http.get<any>(`${API_URL}/${id}/songs?page=${pageNumber}`) //568707 this is a artists id  '1' is page no.  6870116
    }
    getArtistsRecommendationsSong() {
      return this.http.get<any>(`${API_URL}/1222962/recommendations/b7WX5ZNa`)
    }
}
