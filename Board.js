function Board() {
  this.pool = new BoardPiecePool();
  this.boardTiles = [];
  this.createBoard();
}

Board.prototype.createBoard = function() {
  this.borrowTiles(10);
  renderer.render(main.stage);
}


Board.prototype.borrowTiles = function(num) {
  for (var i = 1; i < num; i++) {
    var sprite = this.pool.borrowTile();
    sprite.position.x = -32 + (i * 32);
    sprite.position.y = 128;
    
    this.boardTiles.push(sprite);

    main.stage.addChild(sprite);
  }

  renderer.render(main.stage);
}

Board.prototype.returnTiles = function() {
  for (var i = 1; 1 < this.boardTiles.length; i++) {
    var sprite = this.boardTiles[i];
    main.stage.removeChild(sprite);
    this.pool.returnTile(sprite);
  }

  this.boardTiles = [];

}
