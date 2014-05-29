function BoardPiecePool() {
  this.createTiles();
}

BoardPiecePool.prototype.borrowTile= function() {
  return this.tiles.shift();
}

BoardPiecePool.prototype.returnTile= function(sprite) {
  this.tiles.push(sprite);
}

BoardPiecePool.prototype.createTiles = function() {
  this.tiles = [];

  for ( var i = 1;i < 100;i++) {
    this.tiles.push(PIXI.Sprite.fromFrame('blue_square'));
  }
}
