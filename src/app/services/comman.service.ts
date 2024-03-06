import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class CommanService {

  constructor(private http: HttpClient) { }
  private albumId = new BehaviorSubject<any>({id:'1179495885'});
  private artistsId = new BehaviorSubject<any>({id:'',pageNumber:''});
  private songData = new BehaviorSubject<any>({id:''});

  songUrlFunction = new EventEmitter();
  subsVar: Subscription |any;

  callSongUrlFunction() {
    this.songUrlFunction.emit();
  }



  // getLoginData(): Observable<any>{
  //   return this.http.get('./json/login.json')
  //     .map((result: Response) => result.json())
  //     .catch(this.getError);
  // }
  getData(): Observable<any> {
    return this.http.get<any[]>(`${API_URL}/modules?language=hindi,english`);
  }
  getModuleDetail() {
    return this.http.get<any>(`${API_URL}/modules`)
  }


  // Album apis
  getAlbumDetail() {
    return this.http.get<any>(`${API_URL}/albums?link=https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_`)
  }
  getAllAlbum() {
    return this.http.get<any>('https://saavn.me/search/albums?query=rockstar')
  }
  getAlbumById(id: any) {
    return this.http.get<any>(`https://saavn.me/albums?id=${id}`);  //568707 this is a artists id
  }
  // on click searchbar song  get some data
  searchSongList() {
    return this.http.get<any>('https://saavn.me/search/all?query=imagine+dragons')
  }
  // get song on click search bar song
  getSearchSong(id: any) {
    return this.http.get<any>(`https://saavn.me/songs?id=${id}`);  //568707 this is a artists id
  }
  // playlist
  getPlaylistSong(id:any) {
    return this.http.get<any>(`${API_URL}/playlists?id=${id}`)
  }




  setId(user: any) {
    this.albumId.next(user);
  }

  getId() {
    return this.albumId.asObservable();
  }


  setArtistsId(id: any,_pageNumber?:any) {
    debugger
    this.artistsId.next(id);
  }

  getArtistsId() {
    return this.artistsId.asObservable();
  }

  setSongData(id: any,_pageNumber?:any) {
    this.songData.next(id);
  }

  getSongData() {
    return this.songData.asObservable();
  }



}
