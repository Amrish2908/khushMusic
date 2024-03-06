import { Component } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';
import { ArtistsService } from 'src/app/services/artists.service';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {

  constructor(private albumsService: AlbumsService,
    private artistService: ArtistsService,
    private commanService: CommanService) { }

  artistsData: any[] = [];
  primaryArtists: any[] = [];
  albumId: any

  ngOnInit() {
    // this.getAllAlbum()
    this.getId()
    // this.getArtistsDetail(9378717)
    this.getArtistsSong(457737,1)
  }
  getId() {
    this.commanService.getId().subscribe((res: any) => {
      this.albumId = res;
      this.getAllAlbum();
    })
  }

  getAllAlbum() {
    this.albumsService.getAllAlbum().subscribe((res: any) => {
      res.data.results.forEach((res: any) => {
        if (res.id === this.albumId) {
          // console.log(res);
          this.artistsData = res.artists
          // console.log("all albums", this.artistsData)
          this.primaryArtists = res.primaryArtists
          // console.log("all albums", this.primaryArtists)
        }
      });
    })
  }

  getArtistsSong(id:any,page:any){
    this.artistService.getArtistsSong(id,page).subscribe((res:any)=>{
      // console.log("test2",res)
    })
  }

  getArtistsDetail(id:any) {
    this.artistService.getArtistsDetail(id).subscribe((res:any)=>{
      // console.log("test",res)
    })
  }

  setArtistsId(id:string){
    this.commanService.setArtistsId(id)
  }

}
