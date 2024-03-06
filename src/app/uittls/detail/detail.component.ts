import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistsService } from 'src/app/services/artists.service';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  pageNumber=1;
  songList: any[] = [];

  songData: any[] = [];
  newSong: any[] = [];
  artistsData: any;
  songId: any;
  lastPage:boolean=true;

  constructor(private artistService: ArtistsService, private router: Router,
    private commanService: CommanService) { }



  ngOnInit() {
    this.getArtistsId()
  }

  status: any = false;
  songLike() {
    this.status = !this.status;
  }

  getArtistsId() {
    debugger
    this.commanService.getArtistsId().subscribe((res: any) => {
      this.songId = res;
      this.getArtistsDetail(this.songId)
      this.getArtistsSong(this.songId, 1)
      this.getPlaylistDataId(res)
    })
  }

  setSongData(songlink: string) {
    this.commanService.setSongData(songlink);
    this.callPlaySongUrlFunction();
  }

    // data get using id
    getPlaylistDataId(id: any) {
      this.commanService.getPlaylistSong(id).subscribe((res: any) => {
        console.log("-------------------------", res)
        this.artistsData = res.data
        this.songList = res.data.songs
        console.log(this.songList)
      })
    }

  // getArtistsSong(id: any, page: any) {
  //   this.newSong = []
  //   this.artistService.getArtistsSong(id, page).subscribe((res: any) => {
  //     this.songData = res.data.results
  //     this.lastPage=res.data.lastPage
  //     console.log(this.songData)
  //     // this.newSong.map((res: any) => {
  //     //   this.songData.push(res)
  //     // },
  //     //   console.log(this.songData)
  //     // )
  //   })
  // }

  getArtistsSong(id: any, page: any) {
    this.newSong = []
    this.artistService.getArtistsSong(id, page).subscribe((res: any) => {
      this.newSong = res.data.results
      this.lastPage=res.data.lastPage
      this.newSong.map((res: any) => {
        this.songData.push(res)
      },
        console.log(this.songData)
      )
    })
  }



  getArtistsDetail(id: any) {
    this.artistService.getArtistsDetail(id).subscribe((res: any) => {
      this.artistsData = res.data
    })
  }

  callPlaySongUrlFunction() {
    this.commanService.callSongUrlFunction();
  }

}
