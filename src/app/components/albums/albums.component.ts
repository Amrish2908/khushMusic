import { Component } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';
import { ArtistsService } from 'src/app/services/artists.service';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent {
  artistsData: any;
  // artistsData: any;

  constructor(
    private albumsService: AlbumsService,
    private commanService: CommanService,
    private artistService: ArtistsService
  ) { }

  albumData: any[] = [];

  allArtistsList: any[] = [];
  newArtistList: any[] = [];
  idList: any[] = []

  ngOnInit() {
    // this.getAlbumDetail()
    this.getAllAlbum()
    // this.getAlbumById(910051)"910051"
    this.getAlbumById(16220209)

  }
  // getAlbumDetail(){
  //   this.albumsService.getAlbumDetail().subscribe((res:any)=>{
  //     console.log("albums data",res)
  //   })
  // }
  getAllAlbum() {
    this.albumsService.getAllAlbum().subscribe((res: any) => {
      console.log("all albums", res)
      this.albumData = res.data.results;
      console.log(this.albumData)
      this.getArtist()
    })
  }

  getArtist() {
    this.albumData.forEach(list => {
      this.newArtistList = list.artists;
      console.log(this.newArtistList)
      this.allArtistsList.push(...this.newArtistList);
    });
    if (this.allArtistsList.length > 0) {
      this.allArtistsList.forEach(element => {
        this.idList.push(element.id)
      })
      let idListWithoutDuplicatesId = Array.from(new Set(this.idList));
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', idListWithoutDuplicatesId);
      idListWithoutDuplicatesId.forEach(id => {

        // getArtistsDetail(id: any) {
          this.artistService.getArtistsDetail(id).subscribe((res: any) => {
            this.artistsData = res.data
            console.log("123456789",this.artistsData)
          })
        // }

      });
    }
  }


  getAlbumById(id: any) {
    this.albumsService.getAlbumById(id).subscribe((res: any) => {
      // console.log("albums ",res)
    })
  }

  setId(id: any) {
    this.commanService.setId(id)
  }
}
