import { Component } from '@angular/core';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-playsong',
  templateUrl: './playsong.component.html',
  styleUrls: ['./playsong.component.scss']
})
export class PlaysongComponent {

  songUrl: string = '';
  showPlayer: boolean = false;

  constructor(private commonService: CommanService) { }

  ngOnInit() {
    this.getSongData()
    if (this.commonService.subsVar == undefined) {
      this.commonService.subsVar = this.commonService.songUrlFunction.subscribe((name: string) => {
        this.getSongData()
      });
    }
  }
  getSongData() {
    this.commonService.getSongData().subscribe((res: any) => {
      this.showPlayer = false;
      if (!res.id) {
        this.songUrl = res
      }
      setTimeout(() => {
        this.showPlayer = true
      })
    })
  }
}
