function BoardTilePool() {
  this.createTiles();
}

BoardTilePool.prototype.borrowTile= function() {
  return this.tiles.shift();
}

BoardTilePool.prototype.returnTile= function(sprite) {
  this.tiles.push(sprite);
}

BoardTilePool.prototype.createTiles = function() {
  this.tiles = [];

  for ( var i = 1;i < 100;i++) {
    this.tiles.push(PIXI.Sprite.fromFrame('blue_square'));
  }
}
