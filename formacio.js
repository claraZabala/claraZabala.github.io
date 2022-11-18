
function formatNombres(x) {
 return Highcharts.numberFormat(x, 0, '.', ',') + ' veces';
}

Highcharts.chart('container', {
 title: {
   text: 'Problema de ejemplo inicial',
   margin: 35
 },
 xAxis: [{
   title: {
     text: ''
   },
   alignTicks: false,
   opposite: false
 }, {
   title: {
     text: 'Ejemplo de datos'
   },
   accessibility: {
     description: 'Ejemplo de datos',
     rangeDescription: ''
   },
   alignTicks: false,
   opposite: false
 }],

 yAxis: [{
   title: {
     text: ''
   }
 }, {
   title: {
     text: 'Frecuencia'
   },
   accessibility: {
     description: 'Frecuencia'
   },
   opposite: false,
 }],
 plotOptions: {
   histogram: {
     binWidth: 0.5
   },
   column: {
       keys: ['name', 'y'],
       grouping: false,
       pointPadding: 0.1,
       groupPadding: 0,
       tooltip: {
           headerFormat: '<span style="font-size: 10px">' +
               '<span style="color:{point.color}">\u25CF</span> ' +
               '{series.name}</span><br/>',
           pointFormat: '{point.name}: <b>${point.y:,.0f}</b><br/>'
       }
   }
 },
 accessibility: {
   series: {
     descriptionFormatter: function(series) {
       return series.type === 'line' ?
         series.name + ', ' + formatNombres(series.points[0].y) :
         series.name + ' histograma con ' +
         series.points.length + ' barras.';
     }
   },
   point: {
     pointValueSuffix: ' veces'
   },
   keyboardNavigation: {
     seriesNavigation: {
       mode: 'serialize'
     }
   }
 },
 pane: {
   background: []
 },
 responsive: {
   rules: []
 },
 series: [{
   name: 'Ejemplo de datos',
   type: 'histogram',
   xAxis: 1,
   yAxis: 1,
   baseSeries: 's1',
   zIndex: -1,
   binWidth: 0.5
 }, {
   name: '',
   type: 'scatter',
   data: [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6,
       3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8,
       3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2,
       2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3,
       2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2,
       3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7, 3.2,
       3.3, 3, 2.5, 3, 3.4, 3],
   visible: false,
   id: 's1',
   marker: {
     radius: 1.5
   }
 }]
});
