pt.radarToPolar = pt.radarToPolar || {};

pt.radarToPolar.init = function() {
  var data = [
    {axis:"Battery Life",value:0.22, phone: 'iPhone'},
    {axis:"Brand",value:0.28, phone: 'iPhone'},
    {axis:"Contract Cost",value:0.29, phone: 'iPhone'},
    {axis:"Design And Quality",value:0.17, phone: 'iPhone'},
    {axis:"Have Internet Connectivity",value:0.22, phone: 'iPhone'},
    {axis:"Large Screen",value:0.02, phone: 'iPhone'},
    {axis:"Price Of Device",value:0.21, phone: 'iPhone'},
    {axis:"To Be A Smartphone",value:0.50, phone: 'iPhone'},
    {axis:"Battery Life",value:0.27, phone: 'Samsung'},
    {axis:"Brand",value:0.16, phone: 'Samsung'},
    {axis:"Contract Cost",value:0.35, phone: 'Samsung'},
    {axis:"Design And Quality",value:0.13, phone: 'Samsung'},
    {axis:"Have Internet Connectivity",value:0.20, phone: 'Samsung'},
    {axis:"Large Screen",value:0.13, phone: 'Samsung'},
    {axis:"Price Of Device",value:0.35, phone: 'Samsung'},
    {axis:"To Be A Smartphone",value:0.38, phone: 'Samsung'},
    {axis:"Battery Life",value:0.26, phone: 'Nokia Smartphone'},
    {axis:"Brand",value:0.10, phone: 'Nokia Smartphone'},
    {axis:"Contract Cost",value:0.30, phone: 'Nokia Smartphone'},
    {axis:"Design And Quality",value:0.14, phone: 'Nokia Smartphone'},
    {axis:"Have Internet Connectivity",value:0.22, phone: 'Nokia Smartphone'},
    {axis:"Large Screen",value:0.04, phone: 'Nokia Smartphone'},
    {axis:"Price Of Device",value:0.41, phone: 'Nokia Smartphone'},
    {axis:"To Be A Smartphone",value:0.30, phone: 'Nokia Smartphone'}
  ];
  var chart = new G2.Chart({
    id: 'radarPolar',
    width: 700,
    height: 600,
    plotCfg: {
      margin: [60, 80, 80]
    }
  });
  chart.source(data);
  chart.axis('value', {
    formatter: function(val) {
      return val * 100 + '%';
    }
  });
  chart.coord('polar', {
    radius: 0.9
  });
  chart.legend({
    position: 'top'
  });
  chart.area().position('axis*value').color('phone', ["#EDC951","#CC333F","#00A0B0"])
    .style({
      fillOpacity: 0.35
    })
    .shape('smooth');
  chart.line().position('axis*value').color('phone', ["#EDC951","#CC333F","#00A0B0"])
    .shape('smooth');
  chart.point().position('axis*value').color('phone', ["#EDC951","#CC333F","#00A0B0"])
    .shape('circle').size(3);
  chart.render();
};
