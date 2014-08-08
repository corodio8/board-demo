function Board() {
  //Generate sprite pool
  this.pool = new BoardTilePool();

  //Array for holding borrowed sprites
  this.boardTiles = [];

  //Array that holds the coordinates of board grid
  Board.boardCoord = this.generateBoardCoords();

  this.createBoard();
}


//initial top-right coords for where to start
//generating the board
Board.START_X = 32;
Board.START_Y = 32;

//size of tiles (in pixels)
Board.TILE_SIZE = 32;
Board.ROWS = 10;
Board.COLUMNS = 10;

//upper bounds for board
Board.END_X = Board.START_X + Board.TILE_SIZE*(Board.ROWS - 1);
Board.END_Y = Board.START_Y + Board.TILE_SIZE*(Board.COLUMNS - 1);

Board.prototype.generateBoardCoords = function() {
  var grid = [];
  for (var i = 1; i <= Board.ROWS; i++) {
    for (var k = 1; k <= Board.COLUMNS; k++) {
      var coord = [0,0];
      coord[0] = Board.START_X + (i-1) * Board.TILE_SIZE;
      coord[1] = Board.START_Y + (k-1) * Board.TILE_SIZE;
      grid.push(coord);
    }
  }
  return grid;
}

Board.prototype.createBoard = function() {
  for (var i = 1; i < Board.COLUMNS; i++) {
    this.borrowTiles(Board.ROWS, i);
  }

}

Board.prototype.borrowTiles = function(num, rowNum) {
  for (var i = 1; i < num; i++) {
    var sprite = this.pool.borrowTile();
    sprite.position.x = Board.START_X + ((i-1) * 32);
    sprite.position.y = Board.START_Y + (rowNum - 1)*Board.TILE_SIZE;

    this.boardTiles.push(sprite);

    main.stage.addChild(sprite);
  }

}

Board.prototype.returnTiles = function() {
  for (var i = 1; 1 < this.boardTiles.length; i++) {
    var sprite = this.boardTiles[i];
    main.stage.removeChild(sprite);
    this.pool.returnTile(sprite);
  }

  this.boardTiles = [];

}
