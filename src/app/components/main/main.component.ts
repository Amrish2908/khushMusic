import { Component } from '@angular/core';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  // fakeArray = new Array(10);
  albums: any[] = [];
  charts:any[]=[];
  playlists:any[]=[];
  trendingData:any[]=[];

  constructor(private common: CommanService) { }


  ngOnInit(): void {
    this.getData();
  }

  getData() {
    debugger
    this.common.getData().subscribe((res: any) => {
      this.albums = res.data.albums;
      console.log(res)
      this.charts = res.data.charts;
      this.playlists = res.data.playlists;
      this.trendingData = res.data.trending;

    })
  }
}
