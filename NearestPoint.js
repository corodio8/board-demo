// thePoint should be a [x,y] tuple array
// theGrid should be an array of [x,y] arrays

function NearestPoint(thePoint, theGrid) {
  //default x,y values
  this.x = 32;
  this.y = 32;

  var answer = this.findNearestPoint(thePoint, theGrid);
  this.x = answer[0];
  this.y = answer[1];

}

NearestPoint.prototype.findNearestPoint = function(point, grid) {
  var gridSize = grid.length;
  var closestPoint = "n/a";
  var closestDistance = "10000000";
  for ( var i = 0; i < gridSize; i++) {
    var dist = this.calculateDistance(point, grid[i]);
    if (dist < closestDistance) {
      closestDistance = dist;
      closestPoint = grid[i];
    }
  }
  return closestPoint;
}

NearestPoint.prototype.calculateDistance = function(pointA, pointB) {
  xDistance = Math.abs(pointA[0] - pointB[0]);
  yDistance = Math.abs(pointA[1] - pointB[1]);
  return Math.sqrt( Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

