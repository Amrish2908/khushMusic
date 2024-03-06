import { Component } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';
import { ArtistsService } from 'src/app/services/artists.service';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.scss']
})
export class TopArtistsComponent {

  artistsData: any[] = [];
  image: any;
  albumData: any[] = [];
  allArtistsList: any[] = [];
  newArtistList: any[] = [];
  idList: any[] = [];
  allArtistsDetail:any[]=[];
  artistsDetail: any[]=[];

  constructor(
    private albumsService: AlbumsService,
    private artistsService: ArtistsService,
    private commanService: CommanService
  ) { }

  ngOnInit() {
    this.getArtists()
    // this.getArtistsDetail(568707)
    // this.getArtistsDetail(599452)
    // this.getArtistsSong(599452,1)
    // this.getArtistsSong(13947978,1)
    // this.getArtistsSong(42453068,1)

    this.getAllAlbum()

  }

  getArtists() {
    this.artistsService.getArtist().subscribe((res: any) => {
      this.artistsData = res.data.results;
      console.log(this.artistsData)
    })
  }

  // getArtistsDetail(id: any) {
  //   this.artistsService.getArtistsDetail(id).subscribe((res: any) => {
  //     console.log("artists details", res)
  //   })
  // }

  // getArtistsSong(id:any,page:any){
  //   this.artistsService.getArtistsSong(id,page).subscribe((res: any) => {
  //     console.log("artists song", res)
  //   })

  // }

  // ///////////////////////////////////////////
  getAllAlbum() {
    this.albumsService.getAllAlbum().subscribe((res: any) => {
      this.albumData = res.data.results;
      this.getArtist()
    })
  }


  getArtist() {
    this.albumData.forEach(list => {
      this.newArtistList = list.artists;
      // console.log(this.newArtistList)
      this.allArtistsList.push(...this.newArtistList);
    });
    if (this.allArtistsList.length > 0) {
      this.allArtistsList.forEach(element => {
        this.idList.push(element.id)
      })
      let idListWithoutDuplicatesId = Array.from(new Set(this.idList));
      idListWithoutDuplicatesId.forEach(id => {
          this.artistsService.getArtistsDetail(id).subscribe((res: any) => {
            this.artistsDetail = res.data
            // console.log(this.artistsDetail)
            this.allArtistsDetail.push({...this.artistsDetail});
          });
        });
        console.log(this.allArtistsDetail)
    }
  }


  setArtistsId(id:string){
    this.commanService.setArtistsId(id)
  }

}
