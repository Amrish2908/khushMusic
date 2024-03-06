import { Component, Input } from '@angular/core';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-tranding',
  templateUrl: './tranding.component.html',
  styleUrls: ['./tranding.component.scss']
})
export class TrandingComponent {

    trendingAlbum:any[]=[];
    trendingSong:any[]=[];
    constructor(private common: CommanService) { }


    ngOnInit(): void {
      this.getData();
    }

    getData() {
      this.common.getData().subscribe((res: any) => {
        this.trendingAlbum = res.data.trending.albums;
        this.trendingSong=res.data.trending.songs;
        console.log("treding",res.data.trending.songs);
        console.log("treding",res.data.trending.albums);

      })
    }
}
