import { Component } from '@angular/core';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {

 // fakeArray = new Array(10);
 chartsData:any[]=[];

 constructor(private common: CommanService) { }


 ngOnInit(): void {
   this.getData();
 }

 getData() {
   this.common.getData().subscribe((res: any) => {
     this.chartsData = res.data.charts;
     console.log("charts",this.chartsData)

   })
 }
}
