import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  albumsData:any=[]
  artistsData:any=[]
  playlistsData:any=[]
  songsData:any=[]
  topQueryData:any=[]
  searchData: any;

  constructor(private searchService: SearchService) { }

  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    console.log('Input value:', inputValue);
    this.searchService.getSearchData(inputValue).subscribe((res) => {
      if(res.status == 'SUCCESS'){
        this.searchData= res.data
        this.albumsData = res.data?.albums.results;
        this.artistsData = res.data?.artists.results;
        this.playlistsData = res.data?.playlists.results;
        this.songsData = res.data?.songs.results;
        this.topQueryData = res.data?.topQuery.results;
      }
    });
  }

}
