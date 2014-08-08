//this functions holds all the logic for creating Board Piece Objects
//and holds them when they are not in use by the app/game


function BoardPiecePool() {
  this.createPieces();
}

BoardPiecePool.prototype.borrowPiece = function() {
  return this.tiles.shift();
}

BoardPiecePool.prototype.returnPiece = function(sprite) {
  this.tiles.push(sprite);
}

BoardPiecePool.prototype.createPieces = function() {
  this.tiles = [];

  for ( var i = 1;i < 100;i++) {
    this.tiles.push(PIXI.Sprite.fromFrame('red_circle'));
  }
}
