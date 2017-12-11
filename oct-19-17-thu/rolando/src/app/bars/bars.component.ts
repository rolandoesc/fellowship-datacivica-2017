import { Component, OnInit } from '@angular/core';
import * as dbox from '@dboxjs/core';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.styl']
})
export class BarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var config = {
      size: {
        width: 600,
        height: 400,
        margin: {top: 5, right: 5, bottom: 40, left: 20}
      },
      xAxis: {
        enabled: true,
        scale: 'ordinal'
      },
      yAxis: {
        enabled: true,
        scale: 'linear'
      }
    };
    var data = [{name: 'female', x: 20, y: 35},{name: 'male', x: 30, y: 24},{name: 'NA', x: 54, y: 4}];
    
    var chart = dbox.chart(config)
        .bindTo('#chart')
        .data({'raw': data})
        .layer(dbox.bars)
          .x('name')
          .y('y')
        .end()
        .draw();
  }

}
