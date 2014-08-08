function Pieces() {
  //Generate sprite pool
  this.pool = new BoardPiecePool();

  //Array for holding borrowed sprites
  this.boardPieces = [];


  this.createPieces();
}


Pieces.prototype.createPieces = function() {
  this.borrowPiece(64, 64);
  this.borrowPiece(128, 128);
}

//borrows a piece
Pieces.prototype.borrowPiece = function(x, y) {
  var sprite = this.pool.borrowPiece();
  
  this.boardPieces.push(sprite);

  //Follows is the code to drag-drop the piece
  sprite.interactive = true;
  sprite.buttonMode = true;
 
  //Anchor point on the sprite
  sprite.anchor.x = 0.5;
  sprite.anchor.y = 0.5;

  //Trigger when mouse button depressed
  sprite.mousedown = sprite.touchstart = function(data) {
    data.originalEvent.preventDefault();

    this.data = data;
    this.alpha = 0.9;
    this.dragging = true;
  };
  
  //Trigger when mouse button released
  sprite.mouseup = sprite.mouseupoutside = sprite.touchend = sprite.touchendoutside = function(data) {
    this.alpha = 1;
    this.dragging = false;
    this.data = null;
    
    var dropPoint = new NearestPoint([this.position.x, this.position.y], Board.boardCoord);
    this.position.x = dropPoint.x;
    this.position.y = dropPoint.y;

  };

  //Trigger when mouse is dragging
  sprite.mousemove = sprite.touchmove = function(data) {
    if (this.dragging) {
      var newPosition = this.data.getLocalPosition(this.parent);

      if (newPosition.x > Board.END_X) {
        this.position.x = Board.END_X;
      } else if (newPosition.x < Board.START_X) {
        this.position.x = Board.START_X;
      } else {
        this.position.x = newPosition.x;
      }

      if (newPosition.y > Board.END_Y) {
        this.position.y = Board.END_Y;
      } else if (newPosition.y < Board.START_Y) {
        this.position.y = Board.START_Y;
      } else {
        this.position.y = newPosition.y;
      }
    }
  };

  sprite.position.x = x;
  sprite.position.y = y;

  main.stage.addChild(sprite);

}

//returns pieces to the pool
Pieces.prototype.returnPiece = function() {
  for (var i = 1; 1 < this.boardPieces.length; i++) {
    var sprite = this.boardPieces[i];
    main.stage.removeChild(sprite);
    this.pool.returnPiece(sprite);
  }

  this.boardPieces = [];

}
