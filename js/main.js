function Nvd3Graph ( ) {
  var svg;

  var initialize = function ( ) {
    setupSvg();
  };

  var generateData = function ( ) {
    var numberOfPoints = 20,
        graphData = [],
        series,
        i, j;

    for (i = 0; i < 3; i++) {
      series = [];
      for (var j = 0; j < numberOfPoints; j++) {
        series.push({x: (j+1), y: ((i+1) * (j+1))});
      }
      graphData.push({ values: series})
    }

    graphData[0].key = "First";
    graphData[1].key = "Second";
    graphData[2].key = "Third";

    return graphData;
  };

  var setupSvg = function ( ) {
    var svgAttributes = {
      width: 700,
      height: 300,
      padding: 25,
      margin : {
        top: 5,
        right: 10,
        bottom: 5,
        left: 10
      }
    };

    svg = d3.select('#home svg');
    svg.style({
      'width': svgAttributes.width + svgAttributes.margin.left + svgAttributes.margin.right,
      'height': svgAttributes.height + svgAttributes.margin.top + svgAttributes.margin.bottom,
      'padding': svgAttributes.padding,
      'margin': '0 auto'
    });
    svg.datum( generateData() );
    svg.transition().duration(500);
  }

  return {
    initialize : initialize
  }
}

var graph = new Nvd3Graph;
graph.initialize();
