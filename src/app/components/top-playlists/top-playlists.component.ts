import { Component } from '@angular/core';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-top-playlists',
  templateUrl: './top-playlists.component.html',
  styleUrls: ['./top-playlists.component.scss']
})
export class TopPlaylistsComponent {


  // fakeArray = new Array(10);
  albums: any[] = [];
  charts: any[] = [];
  playlists: any[] = [];
  trending: any[] = [];
  moduleDetails: any[]=[];

  constructor(private commanService: CommanService) { }


  ngOnInit(): void {
    this.getData();
    this.getModuleDetail();
    // this.getPlaylistDataId() ;
  }

  getData() {
    this.commanService.getData().subscribe((res: any) => {
      this.albums = res.data.albums;
      this.charts = res.data.charts;
      this.playlists = res.data.playlists;
      this.trending = res.data.trending;
      console.log('-;;;;;;;;;;;;;;;;;;;;;', this.playlists)

    })
  }


  // data get using id
  getPlaylistDataId(id: any) {
    this.commanService.getPlaylistSong(id).subscribe((res: any) => {
      console.log("-------------------------", res)
    })
  }


  // get all type list data
  getModuleDetail() {
    this.commanService.getModuleDetail().subscribe((resp: any) => {
      if (resp.status == "SUCCESS") {
        this.moduleDetails = resp.data;
        console.log("test data",resp);
      }
      else {
        alert("Something went wrong!");
      }
    });
  }

  setId(id:string){
    debugger
    this.commanService.setArtistsId(id)
  }

}
