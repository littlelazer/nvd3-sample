function Nvd3Graph ( ) {

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
}
