import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'app';

  datos = [340, 50, 80, 120, 360, 470, 280, 20, 15, 260];

  ngOnInit() {
      var body = d3.select('#d4');

    function reSort() {
      body.selectAll("rect").sort(function(a, b) {
        return d3.ascending(Math.random(), Math.random());
      })
    }
    d3.select(".resort").on("click", reSort);

    d3.select('#d3')
    .selectAll('circle')
    .data(this.datos)
    .enter()
    .append('circle')
    .attr('cx', function(d: any){ return d;})
    .attr('cy', function(d: any){ return d;})
    .attr('r', function(d: any){ return d/10;})
    .on("click", function(a,b) {
      return d3.ascending(a, b);
  })
    .attr('fill', '#c23d45');



    d3.select('#d4')
    .selectAll('rect')
    .data(this.datos)
    .enter()
    .append('rect')
    .attr('x', function(d:any, i){ return i *  (600/10);})
    .attr('width', '20px' )
    .attr('y',function(d:any){ return 520-d;})
    .attr('height', function(d:any){return d;})
    .on("click", function(a,b) {
      return d3.ascending(a, b);
  })
    .attr('fill', '#c23d45');
  


  var sorting = false;

  function sortBars(){ //función para hacer sort.
    
    sorting = !sorting;

      d3.select('#d4')
        .selectAll('rect')
        .sort(function(a:any,b:any) {
          if (sorting){
            return d3.ascending(a, b);
          } else {
            return d3.descending(a, b);
          }
        })
        .attr('x',function(d,i){
        return i*(520/10); //permite que se haga la transición
        });

  }
     d3.select("#sorts").on('click', function(){
       sortBars();

    });
  
} //ngOnInit


}//Component
